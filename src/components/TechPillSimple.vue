<script setup lang="ts">
defineProps<{ bgColor: string; }>();
</script>

<template>
  <div class="simple-tech-till">
    <slot />
  </div>
</template>

<style scoped>
.simple-tech-till {
  background-color: v-bind(bgColor);
  border-radius: 10rem;
  display: flex;
  gap: 0.5rem;
  width: min-content;
}
</style>