<template>
  <div class="module-page">
    <p v-reveal class="claim">{{ t(module.claim) }}</p>

    <section class="block" :aria-labelledby="`${module.id}-skills`">
      <h2 :id="`${module.id}-skills`" class="block-label">{{ t('Skills') }}</h2>
      <ul class="skill-chips">
        <li v-for="skill in module.skills" :key="skill">{{ t(skill) }}</li>
      </ul>
    </section>

    <section v-if="systems.length" class="block" :aria-labelledby="`${module.id}-shipped`">
      <div class="block-head">
        <h2 :id="`${module.id}-shipped`" class="block-label">
          {{ t('Shipped in Mandate Order') }}
        </h2>
        <a class="block-more" href="#/projects/project-mo">{{ t('Project overview →') }}</a>
      </div>
      <article
        v-for="(system, i) in systems"
        :id="`${module.id}-system-${i}`"
        :key="system.title"
        v-reveal
        class="system"
      >
        <header class="system-head">
          <span class="system-num">{{ pad(i + 1) }}</span>
          <h3>{{ system.title }}</h3>
          <p v-if="system.tags?.length" class="system-tags">
            <span v-for="tag in system.tags" :key="tag">{{ tag }}</span>
          </p>
        </header>
        <div class="system-body" :class="{ 'has-figure': system.illustration }">
          <div class="prose">
            <p v-for="(paragraph, p) in system.body" :key="p">{{ paragraph }}</p>
          </div>
          <IllustrationFigure v-if="system.illustration" :illustration="system.illustration" />
        </div>
        <MediaGrid
          v-if="system.media?.length"
          :items="system.media"
          :columns="system.mediaColumns ?? 1"
        />
      </article>
      <ul v-if="briefSystems.length" class="brief-list">
        <li v-for="system in briefSystems" :key="system.title">
          <strong>{{ system.title }}</strong>
          <span>{{ splitLead(system.body[0] ?? '').lead }}</span>
        </li>
      </ul>
    </section>

    <section v-if="projects.length" class="block" :aria-labelledby="`${module.id}-projects`">
      <h2 :id="`${module.id}-projects`" class="block-label">
        {{ t(systems.length ? 'More evidence' : 'Projects') }}
      </h2>
      <ol class="evidence">
        <li v-for="project in projects" :key="project.id" v-reveal>
          <a class="evidence-card" :href="`#/projects/${project.id}`">
            <span class="evidence-meta">
              <span v-if="project.period">{{ project.period }}</span>
              <span v-if="project.role">{{ project.role }}</span>
            </span>
            <strong class="evidence-title">{{ project.title }}</strong>
            <span class="evidence-text">{{ splitLead(project.summary).lead }}</span>
            <span class="evidence-tech">
              <span v-for="tech in project.tech.slice(0, 4)" :key="tech">{{ tech }}</span>
            </span>
            <span class="evidence-go">{{ t('Open project →') }}</span>
          </a>
        </li>
      </ol>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { SkillModule } from '@/data/modules'
import { projectGroups } from '@/data/projects'
import type { Project } from '@/data/types'
import { localize, t } from '@/i18n'
import { splitLead } from '@/projectText'
import IllustrationFigure from './IllustrationFigure.vue'
import MediaGrid from './MediaGrid.vue'

const props = defineProps<{ module: SkillModule }>()

const allProjects = projectGroups.flatMap((group) => group.projects)
const mandateOrder = computed(() => localize(allProjects.find((p) => p.id === 'project-mo')!))
const pick = (indices: number[] | undefined) =>
  (indices ?? []).map((i) => mandateOrder.value.modules![i]!).filter(Boolean)

const systems = computed(() => pick(props.module.systems))
const briefSystems = computed(() => pick(props.module.briefSystems))
const projects = computed(() =>
  props.module.projects
    .map((id) => allProjects.find((project) => project.id === id))
    .filter((project): project is Project => !!project)
    .map((project) => localize(project)),
)

const pad = (n: number) => String(n).padStart(2, '0')
</script>

<style scoped>
.claim {
  max-width: 34ch;
  font-family: var(--font-display);
  font-size: clamp(26px, 3vw, 38px);
  line-height: 1.25;
}
.block {
  margin-top: 72px;
}
.block-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
}
.block-label {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-faint);
  margin-bottom: 20px;
}
.block-more {
  font-size: 13px;
  color: var(--text-muted);
}
.skill-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.skill-chips li {
  padding: 6px 14px;
  border: 1px solid var(--rule-strong);
  border-radius: 999px;
  font-size: 14px;
}
.system {
  padding: 32px 0;
  border-top: 1px solid var(--rule);
  scroll-margin-top: calc(var(--header-h) + 24px);
}
.system-head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 8px 16px;
  margin-bottom: 18px;
}
.system-num {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--accent);
}
.system-head h3 {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(24px, 2.4vw, 32px);
  line-height: 1.15;
}
.system-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  flex-basis: 100%;
}
.system-tags span,
.evidence-tech span {
  font-family: var(--font-mono);
  font-size: 11px;
  padding: 2px 9px;
  border: 1px solid var(--rule-strong);
  border-radius: 999px;
  color: var(--text-muted);
}
.system-body {
  display: grid;
  gap: 24px;
}
.system-body.has-figure {
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  align-items: start;
}
.system-body .prose {
  max-width: 64ch;
  color: var(--text-muted);
}
.system-body .prose p + p {
  margin-top: 12px;
}
.system :deep(.grid) {
  margin-top: 20px;
}
.brief-list {
  display: grid;
  gap: 14px;
  padding-top: 24px;
  border-top: 1px solid var(--rule);
}
.brief-list li {
  display: grid;
  grid-template-columns: minmax(0, 16em) minmax(0, 1fr);
  gap: 4px 24px;
}
.brief-list span {
  color: var(--text-muted);
}
.evidence {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}
.evidence-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  padding: 22px;
  border: 1px solid var(--rule);
  border-radius: 14px;
  color: var(--text);
  transition:
    border-color 0.2s,
    transform 0.3s var(--ease-out);
}
.evidence-card:hover {
  border-color: var(--text);
  text-decoration: none;
  transform: translateY(-2px);
}
.evidence-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 12px;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-faint);
}
.evidence-title {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 24px;
  line-height: 1.15;
}
.evidence-text {
  color: var(--text-muted);
  font-size: 14px;
  line-height: 1.6;
}
.evidence-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
}
.evidence-go {
  font-size: 13px;
  color: var(--accent);
}
@media (max-width: 860px) {
  .system-body.has-figure,
  .brief-list li {
    grid-template-columns: minmax(0, 1fr);
  }
  .block {
    margin-top: 56px;
  }
}
</style>
