<template>
  <header id="top" class="intro-header">
    <div class="editorial-kicker">
      <span class="small-star" aria-hidden="true">✳</span> Welcome to my personal website.
    </div>
    <h1>{{ site.name }}</h1>
    <div class="intro-bottom">
      <div class="intro-copy">
        <!-- Authored HTML constants in src/data/site.ts; no external input is rendered. -->
        <p v-for="(paragraph, index) in site.bio" :key="index" v-html="paragraph" />
        <a class="text-cta" href="#/projects"
          >Explore selected work <span aria-hidden="true">↓</span></a
        >
      </div>
      <aside class="intro-note">
        <span class="note-pin" aria-hidden="true">✳</span>
        <span class="eyebrow">CURRENTLY</span>
        <p>Research at UCLA.<br />Computer science at USC.</p>
        <span class="availability"
          ><span aria-hidden="true"></span> Seeking 2027 full-time roles</span
        >
        <a href="mailto:sheyfff@gmail.com">Let's connect <span aria-hidden="true">↗</span></a>
      </aside>
    </div>
    <div class="featured-heading">
      <span class="eyebrow">A FEW STARTING POINTS</span><span aria-hidden="true">↙</span>
    </div>
    <nav class="featured-work" aria-label="Featured work">
      <div v-for="(item, index) in highlights" :key="item.href" class="featured-item">
        <a
          :href="item.href"
          class="featured-row"
          :class="{ 'featured-game-link': item.href === '#/projects/project-mo' }"
        >
          <span class="featured-number">0{{ index + 1 }}</span>
          <span class="featured-copy"
            ><span class="eyebrow">{{ item.label }}</span
            ><strong>{{ item.title }}</strong></span
          >
          <img
            v-if="item.href !== '#/projects/project-mo'"
            :src="assetUrl(item.image)"
            :alt="item.alt"
            loading="lazy"
            width="140"
            height="84"
          />
          <span class="featured-arrow" aria-hidden="true">↗</span>
        </a>
        <ScreenshotCarousel
          v-if="item.href === '#/projects/project-mo'"
          :slides="mandateOrderScreenshots"
          label="Mandate Order featured screenshots"
          class="featured-game-carousel"
        />
      </div>
    </nav>
  </header>
</template>
<script setup lang="ts">
import { assetUrl } from '@/assetUrl'
import { site } from '@/data/site'
import ScreenshotCarousel from './ScreenshotCarousel.vue'
import { mandateOrderScreenshots } from '@/data/mandateOrderScreenshots'
const highlights = [
  {
    label: 'DIGITAL SKY / SHIPPED / UNREAL ENGINE',
    title: 'Mandate Order',
    href: '#/projects/project-mo',
    image: '/project-mo-chariot.png',
    alt: 'Chariot artwork from Mandate Order',
  },
  {
    label: 'RESEARCH / SECOND AUTHOR',
    title: 'ArticulateArena',
    href: '#/research/articulatearena',
    image: '/articulatearena-category.png',
    alt: 'Articulated objects from ArticulateArena',
  },
  {
    label: 'C++ / PHYSICS / DEFORMABLE SIMULATION',
    title: 'Mass-Spring Deformable Simulation',
    href: '#/projects/jello-simulation',
    image: '/jello-scene.jpg',
    alt: 'Deformable cube with collision geometry in the mass-spring simulation',
  },
]
</script>
