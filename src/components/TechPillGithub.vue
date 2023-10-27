<script setup lang="ts">
import TechPillSimple from "./TechPillSimple.vue";

defineProps<{link: string}>()
</script>

<template>
  <TechPillSimple bg-color="#555">
    <a
      class="github-link"
      :href="link"
    >github <box-icon
      name="link-external"
      size="xs"
      color="#ffffffde"
    /></a>
  </TechPillSimple>
</template>

<style scoped>
.github-link {
  display: flex;
  gap: 0.2rem;
  padding: 0 0.5rem;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 800;
  color: white;
  user-select: none;
}
</style>