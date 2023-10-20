<script setup lang="ts">

</script>

<template>
  <div class="combined-view-container">
    <div class="left-wrapper">
      <slot name="left" />
    </div>
    <div class="right-wrapper">
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped>
.combined-view-container {
  display: flex;
  align-items: center;
}
.combined-view-container>div {
  width: 50%;
}
</style>