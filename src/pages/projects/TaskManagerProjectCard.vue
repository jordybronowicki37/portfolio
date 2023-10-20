<script setup lang="ts">
import TechPillContainer from "../../components/TechPillContainer.vue";
</script>

<template>
  <section class="project-card">
    <div>
      <h2>Task manager</h2>
      <img
        class="screenshot"
        src="/tas-board.png"
        alt="Task manager board preview"
      >
    </div>
    <TechPillContainer
      :types="['java', 'spring', 'postgresql', 'aws', 'react', 'typescript', 'sass', 'school']"
      background-color="transparent"
    />
    <p>
      With TAS you can manage your tasks efficiently. This school project is inspired by the popular issue
      management tool Trello and was created to learn microservices cloud deployment with AWS.
    </p>
    <router-link
      class="learn-more-nav"
      to="/projects/task-manager"
    >
      Learn more
    </router-link>
  </section>
</template>

<style scoped>

</style>