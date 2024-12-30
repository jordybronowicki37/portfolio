<!--suppress CssUnusedSymbol -->
<script setup lang="ts">
import "../themes/DarkTheme.css"
import "../themes/LightTheme.css"
import "../themes/BlueTheme.css"
import {CURRENT_THEME_KEY, store, Themes} from "../data/Store.ts";
import {watch} from "vue";

let storedTheme = localStorage.getItem(CURRENT_THEME_KEY);
if (storedTheme == null || !Object.values(Themes).includes(storedTheme)) storedTheme = Themes.dark;
store.theme = storedTheme as Themes;

function updateColorSchemeCssProperty() {
  document.documentElement.style.colorScheme = `only ${LightThemes.includes(store.theme) ? "light" : "dark"}`;
}
updateColorSchemeCssProperty();

watch([store], () => {
  storedTheme = store.theme;
  localStorage.setItem(CURRENT_THEME_KEY, store.theme);
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