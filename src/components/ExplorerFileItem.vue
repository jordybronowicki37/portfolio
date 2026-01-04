<script setup lang="ts">
defineProps<{link: string, title: string, icon?: string}>()
</script>

<template>
  <nav :class="[`file-item-${title}`]">
    <box-icon
      v-if="icon === 'debug'"
      name="flask"
      type="solid"
      size="xs"
      color="var(--font-color-200)"
    />
    <box-icon
      v-else-if="icon === 'bug'"
      name="bug"
      size="xs"
      color="var(--font-color-200)"
    />
    <box-icon
      v-else
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
  display: flex;
  align-items: center;
}
box-icon {
  flex-shrink: 0;
  line-height: 0;
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
