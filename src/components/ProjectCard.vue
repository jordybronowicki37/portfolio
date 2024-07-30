<script setup lang="ts">
import TechPillContainer from "./TechPillContainer.vue";
import {ProjectCardProps} from "../data/Models";

defineProps<{project: ProjectCardProps}>();
</script>

<template>
  <section class="project-card">
    <header>
      <h2>{{ project.title }}</h2>
      <img
        v-if="project.imageSrc !== ''"
        class="screenshot"
        :src="project.imageSrc"
        :alt="project.imageAlt"
      >
    </header>
    <TechPillContainer
      :links="project.externalLinks"
      :types="project.tags"
      background-color="transparent"
    />
    <p>
      {{ project.description }}
    </p>
    <router-link
      v-if="project.pageLink"
      class="learn-more-nav"
      :to="project.pageLink"
    >
      Learn more
    </router-link>
  </section>
</template>

<style scoped>
.project-card {
  margin: 1rem;
  background-color: var(--bg-color-600);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  border-radius: 0.5rem;
  max-width: 25rem;
}
header {
  width: 100%;
}
h2 {
  text-align: center;
  font-size: 24px;
  color: var(--font-color-300);
}
.project-card>p {
  flex-grow: 1;
  padding: 0.5rem;
}
.screenshot {
  width: 100%;
  aspect-ratio: 2 / 1;
}
.learn-more-nav {
  margin: 0.5rem;
  padding: 0.2rem 1rem;
  text-align: center;
  color: var(--font-color-400);
  text-decoration: none;
  border: 1px solid var(--font-color-400);
  border-radius: 1rem;
}
.learn-more-nav:hover {
  background-color: var(--font-color-400);
  color: var(--bg-color-600);
}
</style>