<script setup lang="ts">
import {store, Themes} from "../data/Store.ts";

const emit = defineEmits(['close'])

function restartOnboarding() {
  emit('close');
  store.startOnboarding = true;
}
</script>

<template>
  <button
    class="close-button"
    @click="$emit('close')"
  >
    <box-icon
      name="x"
      color="var(--font-color-200)"
    />
  </button>

  <div class="all-settings-wrapper">
    <div class="themes-setting-wrapper">
      <h2>Themes</h2>
      <div class="themes-wrapper">
        <div
          class="theme-item"
          @click="store.theme = Themes.default"
        >
          <div class="theme-preview default-theme">
            <div
              v-for="i in 5"
              :key="i"
            />
          </div>
          <div>Dark</div>
        </div>

        <div
          class="theme-item"
          @click="store.theme = Themes['dark-blue']"
        >
          <div class="theme-preview dark-blue-theme">
            <div
              v-for="i in 5"
              :key="i"
            />
          </div>
          <div>Blue</div>
        </div>

        <div
          class="theme-item"
          @click="store.theme = Themes.light"
        >
          <div class="theme-preview light-theme">
            <div
              v-for="i in 5"
              :key="i"
            />
          </div>
          <div>Light</div>
        </div>
      </div>
    </div>

    <div class="tutorial-setting-wrapper">
      <h2>Tutorial</h2>
      <button @click="restartOnboarding">
        Restart tutorial
      </button>
    </div>
  </div>
</template>

<style scoped>
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
}
.all-settings-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.themes-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.theme-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  cursor: pointer;
}
.theme-preview {
  border: 2px solid var(--accent-color);
  background-color: var(--bg-color-800);
  color: var(--font-color-200);
  border-radius: 0.5rem;
  display: grid;
  padding: 0.5rem;
  gap: 0.2rem;
  grid-template-areas:
      "a b c"
      "a d e";
}
.theme-preview>div {
  min-height: 1rem;
  min-width: 1rem;
  background-color: var(--bg-color-600);
}
.theme-preview>div:first-child {
  background-color: var(--bg-color-500);
  grid-area: a;
}
.tutorial-setting-wrapper button {
  box-shadow: 0 1px 2px #0000000d;
  padding: .3rem .5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  flex-grow: 1;
  background-color: transparent;
  border: 1px solid var(--font-color-200);
}
.tutorial-setting-wrapper button:hover {
  background-color: var(--bg-color-800);
  opacity: 0.8;
}
</style>