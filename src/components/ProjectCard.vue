<script setup lang="ts">
import TechPillContainer from "./TechPillContainer.vue";

export type ProjectCardProps = {
  title: string,
  imageSrc: string,
  imageAlt: string,
  tags: string[],
  externalLink: string,
  pageLink: string,
  description:string
}

defineProps<{project: ProjectCardProps}>();
</script>

<template>
  <section class="project-card">
    <div>
      <h2>{{ project.title }}</h2>
      <img
        v-if="project.imageSrc !== ''"
        class="screenshot"
        :src="project.imageSrc"
        :alt="project.imageAlt"
      >
    </div>
    <TechPillContainer
      :link="project.externalLink"
      :types="project.tags"
      background-color="transparent"
    />
    <p>
      {{ project.description }}
    </p>
    <router-link
      v-if="project.pageLink !== ''"
      class="learn-more-nav"
      :to="project.pageLink"
    >
      Learn more
    </router-link>
  </section>
</template>

<style scoped>
.project-card {
  width: 20rem;
  margin: 1rem;
  background-color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  border-radius: 0.5rem;
}
.project-card h2 {
  text-align: center;
  font-size: 24px;
  color: #ddd;
}
.project-card>p {
  flex-grow: 1;
  padding: 0.5rem;
}
.project-card .screenshot {
  height: 10rem;
  width: 20rem;
}
.project-card .learn-more-nav {
  margin: 0.5rem;
  padding: 0.2rem 1rem;
  text-align: center;
  color: #bbb;
  text-decoration: none;
  border: 1px solid #bbb;
  border-radius: 1rem;
}
.project-card .learn-more-nav:hover {
  background-color: #bbb;
  color: #333;
}
</style>