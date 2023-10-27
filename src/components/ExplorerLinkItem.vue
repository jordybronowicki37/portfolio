<script setup lang="ts">
defineProps<{link: string, title: string}>();
</script>

<template>
  <nav>
    <box-icon
      name="link-external"
      size="xs"
      color="#ffffffde"
    />
    <a
      :href="link"
      target="_blank"
    >{{ title }}</a>
  </nav>
</template>

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
  user-select: none;
}

a:hover {
  color: #ea6d3099;
}
</style>