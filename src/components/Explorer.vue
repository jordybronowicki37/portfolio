<script setup lang="ts">
import ExplorerFolderItem from "./ExplorerFolderItem.vue";
import ExplorerFileItem from "./ExplorerFileItem.vue";
import ExplorerLinkItem from "./ExplorerLinkItem.vue";
</script>

<template>
  <div class="explorer">
    <ExplorerFileItem
      title="home"
      link="/"
    />
    <ExplorerFileItem
      title="about-me"
      link="/about"
    />
    <ExplorerFileItem
      title="contact"
      link="/contact"
    />
    <ExplorerFolderItem
      title="projects"
      link="/projects"
    >
      <ExplorerFileItem
        title="aimas"
        link="/projects/aimas"
      />
      <ExplorerFileItem
        title="neerslag radar"
        link="/projects/neerslag-radar"
      />
      <ExplorerFileItem
        title="portfolio"
        link="/projects/portfolio"
      />
      <ExplorerFileItem
        title="production calculator"
        link="/projects/production-calculator"
      />
      <ExplorerFileItem
        title="snake game"
        link="/projects/snake-game"
      />
      <ExplorerFileItem
        title="task manager"
        link="/projects/task-manager"
      />
    </ExplorerFolderItem>

    <ExplorerLinkItem
      title="GitHub"
      link="https://github.com/jordybronowicki37/portfolio"
    />
  </div>
</template>

<style scoped>
.explorer {
  overflow-y: auto;
}
</style>