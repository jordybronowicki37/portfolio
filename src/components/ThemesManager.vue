<!--suppress CssUnusedSymbol -->
<script setup lang="ts">
import "../themes/DarkTheme.css"
import "../themes/LightTheme.css"
import "../themes/BlueTheme.css"
import {CURRENT_THEME_KEY, CUSTOM_THEMES_KEY, store, Themes} from "../data/Store.ts";
import {watch} from "vue";

let storedTheme = localStorage.getItem(CURRENT_THEME_KEY);
if (storedTheme == null || !Object.values(Themes).includes(storedTheme)) storedTheme = Themes.dark;
store.theme = storedTheme as Themes;

function updateColorSchemeCssProperty() {
  document.documentElement.style.colorScheme = `only ${store.theme === Themes.light ? "light" : "dark"}`;
  const customThemesElement = document.getElementById("custom-styles");

  if (customThemesElement !== null) {
    customThemesElement.innerHTML = "";
    for (const theme of store.customThemes) {

      customThemesElement.innerHTML += `
      .custom-theme-${theme.id} {
        --font-color-200: ${theme.colors.titleColor};
        --font-color-300: ${theme.colors.textColor};
        --font-color-400: ${theme.colors.subTextColor};
        --bg-color-800: ${theme.colors.backgroundFarColor};
        --bg-color-700: ${theme.colors.backgroundMidColor};
        --bg-color-600: ${theme.colors.backgroundNearColor};
        --bg-color-500: ${theme.colors.foregroundColor};
        --secondary-color: ${theme.colors.secondaryColor};
        --accent-color: ${theme.colors.accentColor};
        --error-color: ${theme.colors.errorColor};
      }\n`;
    }
  }
}
updateColorSchemeCssProperty();

watch([store], () => {
  storedTheme = store.theme;
  localStorage.setItem(CURRENT_THEME_KEY, store.theme);
  localStorage.setItem(CUSTOM_THEMES_KEY, JSON.stringify(store.customThemes));
  updateColorSchemeCssProperty();
});
</script>

<template>
  <div :class="[store.theme]">
    <slot />
  </div>
</template>

<style>
* {
  color: var(--font-color-200);
}
</style>