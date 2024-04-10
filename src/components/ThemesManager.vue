<!--suppress CssUnusedSymbol -->
<script setup lang="ts">
import "../themes/DefaultTheme.css"
import "../themes/LightTheme.css"
import "../themes/DarkBlueTheme.css"
import {LightThemes, store, Themes} from "../data/Store.ts";
import {watch} from "vue";

let storedTheme = localStorage.getItem("theme");
if (storedTheme == null || !Object.keys(Themes).includes(storedTheme)) storedTheme = "default";
store.theme = storedTheme as Themes;

function updateColorSchemeCssProperty() {
  document.documentElement.style.colorScheme = `only ${LightThemes.includes(store.theme) ? "light" : "dark"}`;
}
updateColorSchemeCssProperty();

watch([store], () => {
  localStorage.setItem("theme", store.theme);
  updateColorSchemeCssProperty();
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