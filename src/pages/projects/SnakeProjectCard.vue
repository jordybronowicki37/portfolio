<script setup lang="ts">
import TechPillContainer from "../../components/TechPillContainer.vue";
</script>

<template>
  <section class="project-card">
    <div>
      <h2>Snake Game</h2>
      <img class="screenshot" src="/snake-game.png" alt="Production calculator editor screenshot">
    </div>
    <TechPillContainer
        link="https://github.com/jordybronowicki37/vue-snake"
        :types="['vue', 'typescript', 'personal']"
        background-color="transparent"/>
    <p>
      Play a more exciting version of the classic game of snake. Complete with a collection of exciting levels,
      single-player challenges, strategic power-ups, custom skins and two fun multiplayer game-modes.
    </p>
    <router-link class="learn-more-nav" to="/projects/snake-game">Learn more</router-link>
  </section>
</template>

<style scoped>

</style>