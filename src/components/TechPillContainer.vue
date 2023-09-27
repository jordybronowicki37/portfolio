<script setup lang="ts">
import TechPillConfigured from "./TechPillConfigured.vue";

defineProps<{types:string[]}>();
</script>

<template>
  <div class="tech-pill-collection">
    <TechPillConfigured v-for="type in types" :type="type"/>
    <slot/>
  </div>
</template>

<style scoped>
.tech-pill-collection {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  padding: 0.3rem;
  background-color: #333;
  border-radius: 1rem;
  overflow: hidden;
}
</style>