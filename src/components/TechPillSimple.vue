<script setup lang="ts">
const {color} = defineProps<{ color: string; }>();

let bgColor = color;
if (color.length === 4) bgColor = color + "3";
if (color.length === 7) bgColor = color + "33";
</script>

<template>
  <div class="simple-tech-till">
    <slot />
  </div>
</template>

<style scoped>
.simple-tech-till {
  background-color: v-bind(bgColor);
  border-color: v-bind(color);
  border-width: 2px;
  border-style: solid;
  border-radius: 10rem;
  padding: 2px 0;
  display: flex;
  gap: 0.5rem;
  width: min-content;
}
</style>