import { after, test } from 'node:test'
import assert from 'node:assert/strict'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSSRApp } from 'vue'
import { renderToString } from '@vue/server-renderer'

const server = await createServer({
  base: process.env.VITE_BASE_PATH || '/',
  configFile: false,
  plugins: [vue()],
  resolve: { alias: { '@': fileURLToPath(new URL('../src', import.meta.url)) } },
  server: { middlewareMode: true },
  appType: 'custom',
})
after(() => server.close())
const { projectGroups } = await server.ssrLoadModule('/src/data/projects.ts')
const { experience } = await server.ssrLoadModule('/src/data/experience.ts')
const { articulateArena } = await server.ssrLoadModule('/src/data/publications.ts')
const { default: App } = await server.ssrLoadModule('/src/App.vue')
const { sections } = await server.ssrLoadModule('/src/data/site.ts')
const { resolveRoute, sectionHref } = await server.ssrLoadModule('/src/navigation.ts')
async function renderPage(initialHash) {
  const app = createSSRApp(App, { initialHash })
  app.directive('reveal', { getSSRProps: () => ({}) })
  return renderToString(app)
}
const pages = new Map(
  await Promise.all(
    sections.map(async (section) => [section.id, await renderPage(sectionHref(section.id))]),
  ),
)
const html = [...pages.values()].join('')

test('every project has an accurately labelled usable resource', () => {
  for (const project of [...projectGroups.flatMap((group) => group.projects), articulateArena]) {
    assert.ok(project.links?.length, `${project.title} needs a resource link`)
    const start = html.indexOf(`<article id="${project.id}"`)
    assert.ok(start >= 0, `${project.title} must render`)
    const article = html.slice(start, html.indexOf('</article>', start))
    for (const link of project.links) {
      assert.ok(link.label.trim())
      assert.match(link.href, /^(https:\/\/|\/(?!\/))/)
      assert.ok(
        article.includes(link.href.replaceAll('&', '&amp;')),
        `${project.title} must display ${link.label}`,
      )
    }
  }
})

test('each experience includes an organization or project resource', () => {
  const rows = [...html.matchAll(/<nav class="link-row experience-links"[^>]*>(.*?)<\/nav>/g)]
  assert.equal(rows.length, experience.length)
  for (const [index, item] of experience.entries()) {
    assert.ok(item.links?.length, `${item.role} at ${item.org} needs a resource link`)
    for (const link of item.links)
      assert.ok(rows[index][1].includes(link.href.replaceAll('&', '&amp;')))
  }
})

test('all section and project links resolve to independently rendered destinations', () => {
  for (const [section, pageHtml] of pages) {
    const ids = [...pageHtml.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1])
    assert.equal(new Set(ids).size, ids.length, `duplicate anchor in ${section}`)
    for (const [, target] of pageHtml.matchAll(/href="#([^"]+)"/g)) {
      if (target === 'main-content') {
        assert.ok(ids.includes(target))
        continue
      }
      const route = resolveRoute(`#${target}`)
      const destination = pages.get(route.section)
      assert.ok(destination, `missing section for ${target}`)
      if (route.target)
        assert.ok(destination.includes(`id="${route.target}"`), `missing target ${target}`)
      assert.ok(target === '/' || route.section !== 'top', `unrecognized route ${target}`)
    }
  }
})

test('portfolio renders a keyboard skip link and one main landmark', () => {
  for (const [section, pageHtml] of pages) {
    assert.match(pageHtml, /href="#main-content"/)
    assert.equal([...pageHtml.matchAll(/<main\b/g)].length, 1)
    assert.equal([...pageHtml.matchAll(/<h1\b/g)].length, 1)
    const activeLink = [...pageHtml.matchAll(/<a\b[^>]*aria-current="page"[^>]*>/g)]
    assert.equal(activeLink.length, 1)
    assert.ok(activeLink[0][0].includes(`href="${sectionHref(section)}"`))
  }
})

test('Mandate Order replaces static previews with screenshot carousels', () => {
  assert.equal([...html.matchAll(/aria-roledescription="carousel"/g)].length, 2)
  assert.ok(html.includes('Next screenshot'))
  assert.ok(html.includes('Pause slideshow'))
  for (let index = 1; index <= 4; index++) {
    assert.ok(html.includes(`/mandate-order-steam-${index}.jpg`))
  }
})

test('carousel navigation wraps and pauses automatic changes for interaction and reduced motion', async () => {
  const { createCarouselState } = await server.ssrLoadModule('/src/components/carouselState.ts')
  const state = createCarouselState(4)
  state.previous()
  assert.equal(state.active.value, 3)
  state.next()
  assert.equal(state.active.value, 0)
  state.select(2)
  assert.equal(state.active.value, 2)
  state.advance({ visible: true, interacting: false, reducedMotion: true })
  assert.equal(state.active.value, 2)
  state.advance({ visible: true, interacting: true, reducedMotion: false })
  assert.equal(state.active.value, 2)
  state.advance({ visible: false, interacting: false, reducedMotion: false })
  assert.equal(state.active.value, 2)
  state.togglePause()
  state.advance({ visible: true, interacting: false, reducedMotion: false })
  assert.equal(state.active.value, 2)
  state.togglePause()
  state.advance({ visible: true, interacting: false, reducedMotion: false })
  assert.equal(state.active.value, 3)
})

test('Entry and Projects render as separate sections', async () => {
  const entryHtml = pages.get('top')
  assert.ok(entryHtml.includes('Welcome to my personal website.'))
  assert.ok(!entryHtml.includes('<article id="project-mo"'))
  const projectsHtml = pages.get('projects')
  assert.ok(projectsHtml.includes('<article id="project-mo"'))
  assert.ok(!projectsHtml.includes('Welcome to my personal website.'))
  assert.ok(!projectsHtml.includes('id="experience"'))
  for (const section of sections) {
    assert.equal([...pages.get(section.id).matchAll(/data-section="[^"]+"/g)].length, 1)
  }
})

test('navigation resolves section URLs and legacy project anchors', async () => {
  assert.deepEqual(resolveRoute('#/projects/project-mo'), {
    section: 'projects',
    target: 'project-mo',
  })
  assert.deepEqual(resolveRoute('#project-mo'), { section: 'projects', target: 'project-mo' })
  assert.deepEqual(resolveRoute('#articulatearena'), {
    section: 'research',
    target: 'articulatearena',
  })
  assert.deepEqual(resolveRoute('#/experience'), { section: 'experience', target: null })
  assert.deepEqual(resolveRoute('#/'), { section: 'top', target: null })
  assert.deepEqual(resolveRoute('#/research/project-mo'), { section: 'research', target: null })
  assert.deepEqual(resolveRoute('#%malformed'), { section: 'top', target: null })
  const legacy = await renderPage('#project-mo')
  assert.ok(legacy.includes('data-section="projects"'))
  assert.ok(legacy.includes('<article id="project-mo"'))
})

test('asset URLs respect preview subdirectories without changing external or section links', async () => {
  const { assetUrl } = await server.ssrLoadModule('/src/assetUrl.ts')
  assert.equal(assetUrl('/portrait.jpg', '/portfolio-preview/'), '/portfolio-preview/portrait.jpg')
  assert.equal(assetUrl('/portrait.jpg', '/'), '/portrait.jpg')
  assert.equal(
    assetUrl('https://example.com/demo.mp4', '/portfolio-preview/'),
    'https://example.com/demo.mp4',
  )
  assert.equal(assetUrl('#/projects/project-mo', '/portfolio-preview/'), '#/projects/project-mo')
  assert.equal(assetUrl(undefined, '/portfolio-preview/'), undefined)
  for (const pageHtml of pages.values()) {
    for (const [, path] of pageHtml.matchAll(/(?:src|poster|href)="(\/[^\/"]+)"/g)) {
      assert.ok(path.startsWith(server.config.base), `asset outside build base: ${path}`)
    }
  }
})

test('website uses Fiona without Chinese profile text and describes ongoing deep learning', () => {
  const entry = pages.get('top')
  assert.ok(entry.includes('Fiona She'))
  for (const pageHtml of pages.values()) {
    const text = pageHtml.replace(/<[^>]*>/g, '')
    assert.ok(!text.includes('Yongfei'))
    assert.ok(!/[\u3400-\u9fff]/u.test(text))
  }
  assert.ok(entry.includes('C++ software systems'))
  assert.ok(entry.includes('CSCI 566'))
  assert.ok(entry.includes('deep learning'))
  assert.ok(entry.includes('PyTorch'))
})
