<script setup lang="ts">
</script>

<template>
  <div id="editor">
    <div id="editor-lines-wrapper">
      <slot />
    </div>
  </div>
</template>

<style scoped>
#editor {
  z-index: 1;
  counter-reset: line-number;
  height: 100%;
}
#editor-lines-wrapper {
  display: flex;
  flex-direction: column;
  height: inherit;
}
</style>