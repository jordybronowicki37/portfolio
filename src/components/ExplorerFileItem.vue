<script setup lang="ts">
defineProps<{link: string, title: string}>()
</script>

<template>
  <nav>
    <box-icon
      name="file"
      size="xs"
      color="var(--font-color-200)"
    />
    <router-link :to="link">
      {{ title }}
    </router-link>
  </nav>
</template>

<!--suppress CssUnusedSymbol -->
<style scoped>
nav {
  margin-left: 1rem;
  width: calc(100% - 1rem);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
a {
  color: inherit;
  text-decoration: none;
  user-select: none;
}
/*noinspection CssUnusedSymbol*/
a.router-link-active {
  color: var(--accent-color);
}
a:hover {
  color: var(--accent-color);
  opacity: 0.7;
}
</style>