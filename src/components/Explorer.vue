<script setup lang="ts">
import ExplorerFileItem from "./ExplorerFileItem.vue";
import ExplorerFolderItem from "./ExplorerFolderItem.vue";
</script>

<template>
  <div id="file-explorer">
    <ExplorerFileItem title="Home" link="/"/>
    <ExplorerFileItem title="About me" link="/about"/>

    <ExplorerFolderItem title="Projects" link="/projects">
      <ExplorerFileItem title="Production calculator" link="/projects/prodcal"/>
      <ExplorerFileItem title="Snake game" link="/projects/snake"/>
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