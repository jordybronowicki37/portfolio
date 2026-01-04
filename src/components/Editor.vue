<script setup lang="ts">
import EditorTabsContainer from "./EditorTabsContainer.vue";
</script>

<template>
  <div id="editor">
    <div id="editor-center">
      <EditorTabsContainer />
      <div id="editor-lines-wrapper">
        <slot />
      </div>
    </div>
    <div id="editor-info-panel">
      <slot name="info" />
    </div>
  </div>
</template>

<style scoped>
#editor {
  counter-reset: line-number;
  height: 100%;
  display: flex;
}
#editor-center {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
}
#editor-lines-wrapper {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
}
#editor-info-panel {
  background: var(--bg-color-600);
  border-left: 1px solid var(--secondary-color);
  padding: 1rem
}
#editor-info-panel:not(:has(*)) {
  display: none;
}
</style>
