<script setup lang="ts">
import TechPillContainer from "./TechPillContainer.vue";
import {ProjectCardProps} from "../data/Models";
import TechPillSimple from "./TechPillSimple.vue";

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
      <div class="year-pill">
        <TechPillSimple
          color="#555"
          backgroundColor="#5558"
        >
          <p>{{project.startedAt.year}}</p>
        </TechPillSimple>
      </div>
    </header>
    <TechPillContainer
      :links="project.externalLinks"
      :types="project.tags.summary"
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

<style scoped lang="scss">
@use "sass:color";

.project-card {
  background-color: var(--bg-color-600);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  border-radius: 10px;
  max-width: 25rem;
  background-clip: padding-box;
  border: solid 3px transparent;

  &:hover:before {
    animation-play-state: running;
  }

  &:before {
    --angle: 0deg;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -3px;
    border-radius: inherit;
    background: linear-gradient(var(--angle), #9c58fc, #42b0cd);
    animation: rotate-project-border 5s linear infinite paused;
  }

  >p {
    flex-grow: 1;
    padding: 1rem;
  }

  header {
    position: relative ;
    width: 100%;

    h2 {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      text-align: center;
      align-content: end;
      font-size: 24px;
      height: 2em;
      color: var(--font-color-200);
      background: linear-gradient(to top, var(--bg-color-600) 10%, color-mix(in srgb, var(--bg-color-600) 60%, transparent) 60%, transparent);
      padding: 0.2rem 0.5rem;
    }

    .year-pill {
      position: absolute;
      top: 10px;
      right: 10px;
      user-select: none;

      p {
        color: #eee;
        padding: 2px 0.5rem;
        font-weight: 800;
        font-size: 14px;
      }
    }

    .screenshot {
      width: 100%;
      aspect-ratio: 2 / 1;
      object-position: top;
      object-fit: cover;
      border-radius: 7px;
      overflow: hidden;
    }
  }

  .learn-more-nav {
    margin-bottom: 1rem;
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
}
@keyframes rotate-project-border {
  0% { --angle: 0deg; }
  100% { --angle: 360deg; }
}
@property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}
</style>
