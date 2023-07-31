<script setup lang="ts">
import {ref} from "vue";
defineProps<{link: string, title: string}>()
const folderOpen = ref<boolean>(true);
</script>

<template>
  <nav class="folder-item">
    <div class="folder-collapse">
      <box-icon v-on:click="folderOpen = !folderOpen" v-if="!folderOpen" name='chevron-right' size="xs" color="#ffffffde"></box-icon>
      <box-icon v-on:click="folderOpen = !folderOpen" v-if="folderOpen" name='chevron-down' size="xs" color="#ffffffde"></box-icon>
    </div>
    <box-icon name='folder' size="xs" color="#ffffffde"></box-icon>
    <router-link :to="link">{{title}}</router-link>
  </nav>

  <div class="folder-contents" v-if="folderOpen">
    <slot/>
  </div>
</template>

<style scoped>
.folder-item {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.folder-item>div {
  display: inline-block;
  width: 1rem;
}

.folder-collapse {
  cursor: pointer;
}

.folder-contents {
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
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