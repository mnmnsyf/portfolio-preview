<template>
  <section :id="id" class="section">
    <component :is="headingTag" class="section-title">{{ title }}</component>
    <slot />
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ id: string; title: string; headingTag?: 'h1' | 'h2' }>(), {
  headingTag: 'h2',
})
</script>
