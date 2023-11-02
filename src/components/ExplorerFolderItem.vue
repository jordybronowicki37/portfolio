<script setup lang="ts">
import {ref} from "vue";

const {link} = defineProps<{link: string, title: string}>();

const folderOpen = ref<boolean>(document.URL.includes(link));
</script>

<template>
  <nav class="folder-item">
    <div class="folder-collapse">
      <box-icon
        v-if="!folderOpen"
        name="chevron-right"
        size="xs"
        color="#ffffffde"
        @click="folderOpen = !folderOpen"
      />
      <box-icon
        v-if="folderOpen"
        name="chevron-down"
        size="xs"
        color="#ffffffde"
        @click="folderOpen = !folderOpen"
      />
    </div>
    <box-icon
      name="folder"
      size="xs"
      color="#ffffffde"
    />
    <router-link
      :to="link"
      @click="folderOpen = true"
    >
      {{ title }}
    </router-link>
  </nav>

  <div
    v-if="folderOpen"
    class="folder-contents"
  >
    <slot />
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
  color: var(--accent-color);
}
a:hover {
  color: var(--accent-color);
  opacity: 0.7;
}
</style>