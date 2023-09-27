<script setup lang="ts">
import TechPillSimple from "./TechPillSimple.vue";
import {GetPillData} from "./TechPillConfiguredData.ts";

const {type} = defineProps<{type:string}>();
const typeData = GetPillData(type);
</script>

<template>
  <TechPillSimple :bg-color="typeData.bgColor">
    <p class="tech-text">{{typeData.type}}</p>
  </TechPillSimple>
</template>

<style scoped>
.tech-text {
  margin: 0 0.5rem;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 14px;
  user-select: none;
}
</style>