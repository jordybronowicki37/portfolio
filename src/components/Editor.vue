<script setup lang="ts">

</script>

<template>
  <div id="editor">
    <slot/>
  </div>
</template>

<style scoped>
#editor {
  counter-reset: line-number;
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>