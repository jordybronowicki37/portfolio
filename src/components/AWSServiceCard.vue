<script setup lang="ts">
import {AWS_ICONS} from "../data/AWSIconData.ts";

type AWSIconNames = keyof typeof AWS_ICONS;

const { name } = defineProps<{ name: AWSIconNames }>();
const selectedIcon = AWS_ICONS[name];
</script>

<template>
  <section class="aws-service-card">
    <header>
      <img
        :src="selectedIcon.icon"
        :alt="`AWS ${selectedIcon.title} icon`"
      >
      <h4>{{ selectedIcon.title }}</h4>
    </header>
    <p>{{selectedIcon.description}}</p>
  </section>
</template>

<style scoped>
.aws-service-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid var(--font-color-200);
  border-radius: .5rem;
  background-color: var(--bg-color-800);
  flex-grow: 1;
}
header {
  display: flex;
  align-items: center;
  gap: 1rem;
}
img {
  height: 2em;
  width: 2em;
}
</style>