<script setup lang="ts">
import packageJson from '/package.json';
</script>

<template>
  <footer>
    <div>options</div>
    <div>V{{ packageJson.version }}</div>
  </footer>
</template>

<style scoped>
footer {
  background: var(--bg-color-600);
  display: flex;
  justify-content: flex-end;
  padding: 0.2rem 0.5rem;
  gap: 0.5rem;
}
</style>