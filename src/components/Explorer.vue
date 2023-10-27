<script setup lang="ts">

import ExplorerFolderItem from "./ExplorerFolderItem.vue";
import ExplorerFileItem from "./ExplorerFileItem.vue";
import ExplorerLinkItem from "./ExplorerLinkItem.vue";
</script>

<template>
  <ExplorerFileItem
    title="home"
    link="/"
  />
  <ExplorerFileItem
    title="about-me"
    link="/about"
  />

  <ExplorerFolderItem
    title="projects"
    link="/projects"
  >
    <ExplorerFileItem
      title="production calculator"
      link="/projects/production-calculator"
    />
    <ExplorerFileItem
      title="snake game"
      link="/projects/snake-game"
    />
    <ExplorerFileItem
      title="portfolio"
      link="/projects/portfolio"
    />
    <ExplorerFileItem
      title="task manager"
      link="/projects/task-manager"
    />
    <ExplorerFileItem
      title="neerslag radar"
      link="/projects/neerslag-radar"
    />
  </ExplorerFolderItem>

  <ExplorerLinkItem
    title="GitHub"
    link="https://github.com/jordybronowicki37/portfolio"
  />
</template>

<style scoped>

</style>