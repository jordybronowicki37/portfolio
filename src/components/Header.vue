<script setup lang="ts">
import MainTitle from "./MainTitle.vue";

const currentPath = new URL(document.URL).pathname.split("/")[0];
</script>

<template>
  <header>
    <div class="title">
      <MainTitle/>
    </div>

    <div class="navigation">
      <nav :class="{selected: currentPath===''}">Home</nav>
      <nav :class="{selected: currentPath==='aboutme'}">About me</nav>
      <nav :class="{selected: currentPath==='projects'}">Projects</nav>
      <nav class="github">GitHub</nav>
    </div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: #303030;
}

.navigation {
  display: flex;
  align-items: center;
}

.navigation nav {
  padding: 1rem 1rem;
}

.navigation .selected {
  color: #ea6d30;
}
</style>