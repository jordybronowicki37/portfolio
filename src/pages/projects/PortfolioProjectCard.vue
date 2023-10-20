<script setup lang="ts">
import TechPillContainer from "../../components/TechPillContainer.vue";
</script>

<template>
  <section class="project-card">
    <div>
      <h2>Portfolio</h2>
      <img
        class="screenshot"
        src="/portfolio-home.png"
        alt="Portfolio home page screenshot"
      >
    </div>
    <TechPillContainer
      link="https://github.com/jordybronowicki37/portfolio"
      :types="['vue', 'typescript', 'personal']"
      background-color="transparent"
    />
    <p>
      This is the project that you are looking at right now, my portfolio website. It previews and explains all
      of my current projects in a code editor inspired website.
    </p>
    <router-link
      class="learn-more-nav"
      to="/projects/portfolio"
    >
      Learn more
    </router-link>
  </section>
</template>

<style scoped>

</style>