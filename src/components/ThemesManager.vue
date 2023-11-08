<!--suppress CssUnusedSymbol -->
<script setup lang="ts">
import "../themes/DefaultTheme.css"
import "../themes/LightTheme.css"
import "../themes/DarkBlueTheme.css"
import {store, Themes} from "../data/Store.ts";
import {watch} from "vue";

let storedTheme = localStorage.getItem("theme");
if (storedTheme == null || !Object.keys(Themes).includes(storedTheme)) storedTheme = "default";
store.theme = storedTheme as Themes;

watch([store], () => {
  localStorage.setItem("theme", store.theme)
});
</script>

<template>
  <div :class="[`${store.theme}-theme`]">
    <slot />
  </div>
</template>

<style>
* {
  color: var(--font-color-200);
}
</style>