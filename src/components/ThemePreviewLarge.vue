<script setup lang="ts">
</script>

<template>
  <div
    class="theme-preview-large"
  >
    <div class="header" />
    <div class="sidebar" />
    <div class="main" />
    <div class="footer" />
  </div>
</template>

<style scoped>
.theme-preview-large {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 2em auto;
  grid-template-rows: 1em auto 1em;
  grid-template-areas:
      "a a"
      "b c"
      "b d";
}
.header {
  background-color: var(--bg-color-600);
  grid-area: a;
}
.sidebar {
  background-color: var(--bg-color-500);
  grid-area: b;
}
.main {
  background-color: var(--bg-color-800);
  grid-area: c;
}
.footer {
  background-color: var(--bg-color-600);
  grid-area: d;
}
</style>