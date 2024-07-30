<script setup lang="ts">
import TechPillSimple from "./TechPillSimple.vue";
import {GetPillData} from "../data/TechPillConfiguredData.ts";

const {type} = defineProps<{type:string}>();
const typeData = GetPillData(type);
</script>

<template>
  <TechPillSimple :color="typeData.bgColor">
    <p class="tech-text">
      {{ typeData.type }}
    </p>
  </TechPillSimple>
</template>

<style scoped>
.tech-text {
  color: var(--font-color-200);
  margin: 0 0.5rem;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 10px;
  white-space: nowrap;
}
</style>