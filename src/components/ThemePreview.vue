<script setup lang="ts">
defineProps<{theme: string}>()
</script>

<template>
  <div
    :class="theme"
    class="theme-preview"
  >
    <div
      v-for="i in 5"
      :key="i"
    />
  </div>
</template>

<style scoped>
.theme-preview {
  border: 2px solid var(--accent-color);
  background-color: var(--bg-color-800);
  color: var(--font-color-200);
  border-radius: 0.5rem;
  display: grid;
  padding: 0.5rem;
  gap: 0.2rem;
  grid-template-areas:
      "a b c"
      "a d e";
}
.theme-preview>div {
  min-height: 1rem;
  min-width: 1rem;
  background-color: var(--bg-color-600);
}
.theme-preview>div:first-child {
  background-color: var(--bg-color-500);
  grid-area: a;
}
</style>