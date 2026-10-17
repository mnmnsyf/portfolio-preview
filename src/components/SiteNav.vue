<template>
  <aside class="sidebar">
    <a href="#/" class="profile-link" :aria-label="`${site.name} — back to introduction`">
      <img
        class="sidebar-portrait"
        :src="assetUrl(site.photo.src)"
        :alt="site.photo.alt"
        width="112"
        height="112"
      />
      <span class="profile-name">{{ site.name }}</span>
    </a>
    <p class="sidebar-role">C++ software engineer.<br />Graphics & simulation.</p>
    <nav class="section-nav" aria-label="Main navigation">
      <a
        v-for="(section, index) in sections"
        :key="section.id"
        :href="sectionHref(section.id)"
        :class="{ active: active === section.id }"
        :aria-current="active === section.id ? 'page' : undefined"
      >
        <span class="nav-number" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
        {{ section.label }}<span class="nav-dot" aria-hidden="true">●</span>
      </a>
    </nav>
    <div class="sidebar-bottom">
      <p>Los Angeles, CA</p>
      <nav class="sidebar-socials" aria-label="Contact and profiles">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          :target="link.href.startsWith('mailto:') ? undefined : '_blank'"
          rel="noopener noreferrer"
        >
          {{ link.label }} <span aria-hidden="true">↗</span>
        </a>
      </nav>
      <span class="sidebar-edition">PORTFOLIO / 2026</span>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { assetUrl } from '@/assetUrl'
import { site, navLinks, sections } from '@/data/site'
import { sectionHref, type SectionId } from '@/navigation'
defineProps<{ active: SectionId }>()
</script>
