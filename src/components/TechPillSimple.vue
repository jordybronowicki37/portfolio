<script setup lang="ts">
const {color, backgroundColor} = defineProps<{ color: string; backgroundColor?: string; }>();

let bgColor = color;
if (backgroundColor) {
  bgColor = backgroundColor;
} else {
  if (color.length === 4) bgColor = color + "3";
  if (color.length === 7) bgColor = color + "33";
}
</script>

<template>
  <div class="simple-tech-pill">
    <slot />
  </div>
</template>

<style scoped>
.simple-tech-pill {
  background-color: v-bind(bgColor);
  border-color: v-bind(color);
  border-width: 2px;
  border-style: solid;
  border-radius: 10rem;
  display: flex;
  gap: 0.5rem;
  width: min-content;
  transition: background-color 500ms;

  &:hover {
    background-color: v-bind(color);
  }
}
</style>
