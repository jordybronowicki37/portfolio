<script setup lang="ts">
import {PillDataType} from "../data/Models";

const {tech, index} = defineProps<{tech: PillDataType, index: number}>();

const animationDelay = `${index*30}ms`
const color = tech.bgColor;
let bgColor = color;
if (color.length === 4) bgColor = color + "3";
if (color.length === 7) bgColor = color + "33";
const pillWidth = `${tech.skillLevel}%`
</script>

<template>
  <div class="skill-pill-wrapper">
    <div class="skill-pill">
      <div>{{ tech.type }}</div>
      <div>{{ tech.skillLevel }}%</div>
    </div>
  </div>
</template>

<style scoped>
.skill-pill-wrapper {
  max-width: 30rem;
  background-color: var(--bg-color-700);
  border: 1px solid var(--bg-color-500);
}
.skill-pill {
  background-color: v-bind(bgColor);
  border-color: v-bind(color);
  border-width: 2px;
  border-style: solid;
  padding: 2px 0.5rem;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  width: 0;
  color: transparent;
  animation: growPill 2s ease-in-out forwards;
  animation-delay: v-bind(animationDelay);
}
.skill-pill div {
  color: inherit;
}
.skill-pill-wrapper, .skill-pill {
  border-radius: 10rem;
}
@keyframes growPill {
  from {
    width: 0;
    color: transparent;
  }
  to {
    width: v-bind(pillWidth);
    color: var(--font-color-200);
  }
}
</style>