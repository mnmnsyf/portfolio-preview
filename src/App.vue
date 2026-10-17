<template>
  <a href="#main-content" class="skip-link" @click.prevent="focusMain">Skip to content</a>
  <div class="site-layout" @click="onRouteLinkClick">
    <SiteNav :active="route.section" />
    <main id="main-content" class="page" tabindex="-1">
      <div class="section-viewport">
        <Transition
          name="section-view"
          mode="out-in"
          @enter="scrollRoute"
          @after-enter="focusRoute"
        >
          <div :key="route.section" class="section-view" :data-section="route.section">
            <SiteHeader v-if="route.section === 'top'" />
            <SectionBlock
              v-else-if="route.section === 'projects'"
              id="projects"
              title="Selected projects"
              heading-tag="h1"
            >
              <ProjectGroups />
            </SectionBlock>
            <SectionBlock
              v-else-if="route.section === 'research'"
              id="research"
              title="Research"
              heading-tag="h1"
            >
              <ProjectEntry :project="articulateArena" />
            </SectionBlock>
            <SectionBlock
              v-else-if="route.section === 'experience'"
              id="experience"
              title="Experience"
              heading-tag="h1"
            >
              <ExperienceList />
            </SectionBlock>
            <SectionBlock
              v-else-if="route.section === 'news'"
              id="news"
              title="Updates"
              heading-tag="h1"
            >
              <NewsList />
            </SectionBlock>
            <SectionBlock
              v-else-if="route.section === 'education'"
              id="education"
              title="Education"
              heading-tag="h1"
            >
              <EducationList />
            </SectionBlock>
            <SectionBlock
              v-else-if="route.section === 'awards'"
              id="awards"
              title="Awards"
              heading-tag="h1"
            >
              <AwardList />
            </SectionBlock>
            <SectionBlock
              v-else-if="route.section === 'skills'"
              id="skills"
              title="Skills"
              heading-tag="h1"
            >
              <SkillList />
            </SectionBlock>
          </div>
        </Transition>
      </div>
      <SiteFooter />
    </main>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import SiteNav from '@/components/SiteNav.vue'
import SiteHeader from '@/components/SiteHeader.vue'
import SectionBlock from '@/components/SectionBlock.vue'
import NewsList from '@/components/NewsList.vue'
import ExperienceList from '@/components/ExperienceList.vue'
import ProjectGroups from '@/components/ProjectGroups.vue'
import ProjectEntry from '@/components/ProjectEntry.vue'
import { articulateArena } from '@/data/publications'
import { sections, site } from '@/data/site'
import { resolveRoute } from '@/navigation'
import EducationList from '@/components/EducationList.vue'
import AwardList from '@/components/AwardList.vue'
import SkillList from '@/components/SkillList.vue'
import SiteFooter from '@/components/SiteFooter.vue'

const props = defineProps<{ initialHash?: string }>()
const route = ref(
  resolveRoute(props.initialHash ?? (typeof window === 'undefined' ? '#/' : window.location.hash)),
)

function focusMain() {
  document.getElementById('main-content')?.focus()
}
function scrollRoute() {
  const target = route.value.target ? document.getElementById(route.value.target) : null
  if (target) {
    // Layout offsets exclude the entrance transform, so deep links do not jump
    // again when the transition finishes.
    let top = 0
    let element: HTMLElement | null = target
    while (element) {
      top += element.offsetTop
      element = element.offsetParent as HTMLElement | null
    }
    const margin = Number.parseFloat(window.getComputedStyle(target).scrollMarginTop) || 0
    window.scrollTo({ top: Math.max(0, top - margin), behavior: 'instant' })
  } else {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
}
function focusRoute() {
  const destination = document.getElementById(route.value.target ?? 'main-content')
  if (destination) {
    if (route.value.target) destination.setAttribute('tabindex', '-1')
    destination.focus({ preventScroll: true })
  }
}
function positionRoute() {
  scrollRoute()
  focusRoute()
}
function onRouteLinkClick(event: MouseEvent) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  )
    return
  const link = event.target instanceof Element ? event.target.closest('a') : null
  const href = link?.getAttribute('href')
  if (href?.startsWith('#') && href !== '#main-content' && href === window.location.hash) {
    event.preventDefault()
    positionRoute()
  }
}
function updateTitle() {
  const label = sections.find((section) => section.id === route.value.section)?.label
  document.title =
    route.value.section === 'top' ? `${site.name} — Personal Website` : `${label} — ${site.name}`
}
function syncRoute() {
  if (window.location.hash === '#main-content') return
  const previousSection = route.value.section
  route.value = resolveRoute(window.location.hash)
  updateTitle()
  if (route.value.section === previousSection) void nextTick(positionRoute)
}
onMounted(() => {
  window.addEventListener('hashchange', syncRoute)
  updateTitle()
  void nextTick(positionRoute)
})
onBeforeUnmount(() => window.removeEventListener('hashchange', syncRoute))
</script>
