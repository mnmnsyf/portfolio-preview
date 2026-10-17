<template>
  <div class="projects-layout">
    <nav class="project-rail" aria-label="Project index">
      <div v-for="group in projectGroups" :key="group.id" class="rail-group">
        <a :href="`#/projects/${group.id}`" class="rail-group-title">{{ group.title }}</a>
        <a
          v-for="project in group.projects"
          :key="project.id"
          :href="`#/projects/${project.id}`"
          class="rail-link"
          :class="{ current: current === project.id }"
          >{{ project.title }}</a
        >
      </div>
    </nav>
    <div class="projects-body">
      <section v-for="(group, g) in projectGroups" :id="group.id" :key="group.id" class="group">
        <div v-reveal class="group-head">
          <span class="group-index">{{ String.fromCharCode(65 + g) }}</span>
          <div>
            <h2 class="group-title">{{ group.title }}</h2>
            <p v-if="group.blurb" class="group-blurb">{{ group.blurb }}</p>
          </div>
        </div>
        <ProjectEntry
          v-for="project in group.projects"
          :key="project.id"
          :project="project"
          class="entry"
        />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { projectGroups } from '@/data/projects'
import ProjectEntry from './ProjectEntry.vue'

/** Scroll-spy: the rail highlights the last project whose top has passed the reading line. */
const current = ref(projectGroups[0]?.projects[0]?.id ?? '')
let articles: HTMLElement[] = []
let frame = 0

function spy() {
  frame = 0
  const line = window.innerHeight * 0.35
  let best = articles[0]?.id
  for (const article of articles) {
    if (article.getBoundingClientRect().top > line) break
    best = article.id
  }
  if (best) current.value = best
}
function onScroll() {
  frame ||= requestAnimationFrame(spy)
}

onMounted(() => {
  articles = [...document.querySelectorAll<HTMLElement>('.projects-body article.project')]
  window.addEventListener('scroll', onScroll, { passive: true })
  spy()
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  cancelAnimationFrame(frame)
})
</script>

<style scoped>
.projects-layout {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 64px;
  align-items: start;
}
.project-rail {
  position: sticky;
  top: calc(var(--header-h) + 32px);
  max-height: calc(100dvh - var(--header-h) - 64px);
  overflow-y: auto;
  scrollbar-width: none;
  display: grid;
  gap: 22px;
  font-size: 13px;
}
.rail-group {
  display: grid;
  gap: 2px;
}
.rail-group-title {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-faint);
  margin-bottom: 4px;
}
.rail-link {
  position: relative;
  padding: 3px 0 3px 14px;
  color: var(--text-muted);
  line-height: 1.4;
  transition: color 0.25s;
}
.rail-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 6px;
  height: 1px;
  background: var(--rule-strong);
  transition:
    width 0.3s var(--ease-out),
    background-color 0.3s;
}
.rail-link:hover {
  color: var(--text);
  text-decoration: none;
}
.rail-link.current {
  color: var(--text);
}
.rail-link.current::before {
  width: 10px;
  background: var(--accent);
}
.group {
  scroll-margin-top: calc(var(--header-h) + 24px);
}
.group + .group {
  margin-top: 120px;
}
.group-head {
  display: grid;
  grid-template-columns: 56px minmax(0, 1fr);
  align-items: baseline;
  padding-bottom: 20px;
  margin-bottom: 48px;
  border-bottom: 1px solid var(--text);
}
.group-index {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 40px;
  line-height: 1;
  color: var(--accent);
}
.group-title {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 40px;
  letter-spacing: -0.01em;
}
.group-blurb {
  margin-top: 6px;
  color: var(--text-muted);
  font-size: 15px;
}
.entry + .entry {
  margin-top: 72px;
  padding-top: 72px;
  border-top: 1px solid var(--rule);
}
@media (max-width: 1100px) {
  .projects-layout {
    grid-template-columns: minmax(0, 1fr);
  }
  .project-rail {
    display: none;
  }
}
@media (max-width: 760px) {
  .group + .group {
    margin-top: 80px;
  }
  .group-head {
    grid-template-columns: 36px minmax(0, 1fr);
    margin-bottom: 32px;
  }
  .group-index,
  .group-title {
    font-size: 30px;
  }
  .entry + .entry {
    margin-top: 48px;
    padding-top: 48px;
  }
}
</style>
