<script setup lang="ts">
import {useRoute} from "vue-router";
import Explorer from "./Explorer.vue";
import {ref} from "vue";

const route = useRoute();
const mobileNavigationOpened = ref<boolean>(false);

function GetTitle(route: string): string {
  switch (route) {
    case "/":
      return "home";
    case "/about":
      return "about-me";
    case "/projects":
      return "projects";
    default:
      if (route.startsWith("/projects/")) return route.replace("/projects/", "");
      return "unknown";
  }
}
</script>

<template>
  <header>
    <img
      id="icon"
      src="/icon.svg"
      alt="Icon"
    >

    <div id="current-file-title">
      Editing: {{ GetTitle(route.fullPath) }}
    </div>

    <box-icon name="menu" color="#ffffffde" @click="mobileNavigationOpened = !mobileNavigationOpened"/>

    <div class="mobile-navigation" :class="[mobileNavigationOpened ? 'opened' : 'closed']">
      <div>
        <Explorer/>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #303030;
  position: relative;
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
header>box-icon {
  cursor: pointer;
}
.mobile-navigation {
  display: grid;
  grid-template-rows: 0fr;
  transition: 0.5s;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 1;
  background-color: #242424;
  padding: 0 1rem;
  border-bottom: 2px solid #555;
}
.mobile-navigation.opened {
  grid-template-rows: 1fr;
  padding: 1rem;
}
.mobile-navigation.closed {
  border-bottom-color: transparent;
}
.mobile-navigation>div {
  overflow: hidden;
}
@media screen and (min-width: 600px) {
  .mobile-navigation {
    display: none;
  }
}
</style>