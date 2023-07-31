<script setup lang="ts">
import ExplorerFileItem from "./ExplorerFileItem.vue";
import ExplorerFolderItem from "./ExplorerFolderItem.vue";
</script>

<template>
  <div id="file-explorer">
    <ExplorerFileItem title="home.txt" link="/"/>
    <ExplorerFileItem title="about-me.txt" link="/about"/>

    <ExplorerFolderItem title="projects" link="/projects">
      <ExplorerFileItem title="production-calculator.txt" link="/projects/prodcal"/>
      <ExplorerFileItem title="snake-game.txt" link="/projects/snake"/>
    </ExplorerFolderItem>
  </div>
</template>

<style scoped>
#file-explorer {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #444;
  min-width: 20%;
  max-width: 20%;
}
</style>