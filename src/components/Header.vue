<script setup lang="ts">
import {useRoute} from "vue-router";

const route = useRoute()

function GetTitle(route: string): string {
  switch (route) {
    case "/":
      return "home";
    case "/about":
      return "about-me";
    case "/projects":
      return "projects";
    case "/projects/prodcal":
      return "production-calculator";
    case "/projects/snake":
      return "snake-game";
    default:
      return "unknown";
  }
}
</script>

<template>
  <header>
    <img id="icon" src="/icon.svg" alt="Icon">

    <div id="current-file-title">Editing: {{GetTitle(route.fullPath)}}</div>

    <div></div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #303030;
}

header>* {
  padding: 0.2rem;
}

#icon {
  height: 1.5rem;
  width: 1.5rem;
}

#current-file-title {
  color: #bbb;
}
</style>