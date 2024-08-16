<script setup lang="ts">
import TechPillSimple from "./TechPillSimple.vue";
import {GetPillData} from "../data/TechPillConfiguredData.ts";
import {useRouter} from "vue-router";

const router = useRouter();

const {type} = defineProps<{type:string, decorationOnly?: boolean}>();
const typeData = GetPillData(type);

function openExplanation() {
  router.replace({query: {techExplanation: type}});
}
</script>

<template>
  <TechPillSimple :color="typeData.bgColor">
    <p
      v-if="typeData.noDetails || decorationOnly"
      class="tech-text"
    >
      {{ typeData.type }}
    </p>
    <button
      v-else
      type="button"
      class="tech-text"
      @click="openExplanation"
    >
      {{ typeData.type }}
    </button>
  </TechPillSimple>
</template>

<style scoped>
button {
  all: unset;
  cursor: pointer;
}
p {
  cursor: default;
}
.tech-text {
  color: var(--font-color-200);
  margin: 0 0.5rem;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 10px;
  white-space: nowrap;
}
</style>