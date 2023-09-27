<script setup lang="ts">
import TechPillConfigured from "./TechPillConfigured.vue";
import TechPillSimple from "./TechPillSimple.vue";
withDefaults(
    defineProps<{ types:string[]; backgroundColor: string; link: string; }>(),
    { backgroundColor: "#333", link: "" }
);
</script>

<template>
  <div class="tech-pill-collection">
    <TechPillConfigured v-for="type in types" :type="type"/>
    <slot/>
    <TechPillSimple bg-color="#555" v-if="link !== ''">
      <a class="github-link" :href="link">
        github
        <box-icon name='link-external' size="10px" color="#ffffffde"/>
      </a>
    </TechPillSimple>
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
.github-link {
  display: flex;
  gap: 0.2rem;
  padding: 0 0.5rem;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 800;
  color: white;
  user-select: none;
}
.github-link>box-icon {
  line-height: 0;
}
</style>