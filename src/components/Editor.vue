<script setup lang="ts">

import EditorBackground from "./EditorBackground.vue";
</script>

<template>
  <div id="editor">
    <EditorBackground/>
    <div id="editor-lines-wrapper">
      <slot />
    </div>
  </div>
</template>

<style scoped>
#editor {
  counter-reset: line-number;
  display: grid;
  height: 100%;
}
#editor-lines-wrapper {
  z-index: 1;
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
}
</style>