<script setup lang="ts">
import TechPillContainer from "../../components/TechPillContainer.vue";
</script>

<template>
  <section class="project-card">
    <div>
      <h2>Neerslag radar</h2>
      <img class="screenshot" src="/neerslag-radar-basic-views.png" alt="Production calculator editor preview">
    </div>
    <TechPillContainer :types="['.net', 'c#', 'angular', 'typescript', 'school/external']" background-color="transparent"/>
    <p>
      This project was part of a collaboration between a student group and an external client. We were tasked to
      develop an application that contained interactive weather animations. Raw weather data would be processed and
      plot onto a map or graph with which you can interact to compare weather patterns.
    </p>
    <router-link class="learn-more-nav" to="/projects/neerslag-radar">Learn more</router-link>
  </section>
</template>

<style scoped>

</style>