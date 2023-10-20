<script setup lang="ts">
import TechPillContainer from "../../components/TechPillContainer.vue";
</script>

<template>
  <section class="project-card">
    <div>
      <h2>Production Calculator</h2>
      <img
        class="screenshot"
        src="/prod-cal-editor.png"
        alt="Production calculator editor preview"
      >
    </div>
    <TechPillContainer
      :types="['.net', 'c#', 'mongodb', 'react', 'typescript', 'sass', 'personal']"
      link="https://github.com/jordybronowicki37/production-calculator"
      background-color="transparent"
    />
    <p class="card-text-content">
      The production calculator allows you to easily create new production chains or map out existing factories.
      Calculate product throughput, identify efficiency problems and compare recipe efficiency.
    </p>
    <router-link
      class="learn-more-nav"
      to="/projects/production-calculator"
    >
      Learn more
    </router-link>
  </section>
</template>

<style scoped>

</style>