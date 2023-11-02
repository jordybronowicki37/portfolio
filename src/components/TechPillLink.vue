<script setup lang="ts">
import TechPillSimple from "./TechPillSimple.vue";
import {GetPillData} from "./TechPillConfiguredData.ts";

const {link} = defineProps<{link: string}>();

let pillText = "unknown";

if (link.includes("github")) pillText = "github";
if (link.includes("render")) pillText = "render";

const typeData = GetPillData(pillText);
const textColor = typeData.color ?? "#ffffffde";
</script>

<template>
  <TechPillSimple :bg-color="typeData.bgColor">
    <a
      class="github-link"
      :href="link"
      target="_blank"
    >{{ pillText }} <box-icon
      name="link-external"
      size="8px"
      :color="textColor"
    /></a>
  </TechPillSimple>
</template>

<style scoped>
.github-link {
  color: v-bind(textColor);
  display: flex;
  gap: 0.2rem;
  padding: 0 0.5rem;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 800;
  user-select: none;
}
box-icon {
  line-height: 0;
}
</style>