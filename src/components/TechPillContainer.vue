<script setup lang="ts">
import TechPillConfigured from "./TechPillConfigured.vue";
import TechPillLink from "./TechPillLink.vue";
withDefaults(
    defineProps<{ types:string[]; backgroundColor?: string; links: string[]; }>(),
    { backgroundColor: "var(--bg-color-600)" }
);
</script>

<template>
  <div class="tech-pill-collection">
    <TechPillConfigured
      v-for="type in types"
      :key="type"
      :type="type"
    />
    <slot />
    <TechPillLink
      v-for="link in links"
      :key="link"
      :link="link"
    />
  </div>
</template>

<style scoped>
.tech-pill-collection {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.3rem;
  padding: 0.3rem;
  background-color: v-bind(backgroundColor);
  border-radius: 1rem;
  overflow: hidden;
}
</style>