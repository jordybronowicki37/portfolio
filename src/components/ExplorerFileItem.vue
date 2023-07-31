<script setup lang="ts">
defineProps<{link: string, title: string}>()
</script>

<template>
  <nav>
    <box-icon name='file' size="xs" color="#ffffffde"></box-icon>
    <router-link :to="link">{{title}}</router-link>
  </nav>
</template>

<style scoped>
nav {
  margin-left: 1rem;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

a {
  color: inherit;
  text-decoration: none;
  user-select: none;
}

a.router-link-active {
  color: #ea6d30;
}

a:hover {
  color: #ea6d3099;
}
</style>