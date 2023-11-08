<script setup lang="ts">
import packageJson from '/package.json';
import {ref} from "vue";
import {store, Themes} from "../data/Store.ts";

const uri = document.baseURI;
let branchName = "master";
if (uri.includes("localhost") || uri.includes("-dev")) branchName = "dev";

const dialog = ref<HTMLDialogElement>();
</script>

<template>
  <footer>
    <div>
      <box-icon
        name="git-branch"
        size="1em"
        color="var(--font-color-200)"
      />
      <span>{{ branchName }}</span>
    </div>
    <div class="footer-separator" />
    <div>V{{ packageJson.version }}</div>
    <button
      class="settings-button"
      @click="dialog?.showModal()"
    >
      <box-icon
        type="solid"
        name="cog"
        size="1em"
        color="var(--font-color-200)"
      />
    </button>
  </footer>

  <dialog
    ref="dialog"
    @click="dialog?.close()"
  >
    <div @click="$event.stopPropagation()">
      <button
        class="close-button"
        @click="dialog?.close()"
      >
        <box-icon
          name="x"
          color="var(--font-color-200)"
        />
      </button>

      <h2>Themes</h2>

      <div class="themes-wrapper">
        <div
          class="theme-item"
          @click="store.theme = Themes.default"
        >
          <div class="theme-preview default-theme">
            <div v-for="_ in 5" />
          </div>
          <div>Dark</div>
        </div>

        <div
          class="theme-item"
          @click="store.theme = Themes['dark-blue']"
        >
          <div class="theme-preview dark-blue-theme">
            <div v-for="_ in 5" />
          </div>
          <div>Blue</div>
        </div>

        <div
          class="theme-item"
          @click="store.theme = Themes.light"
        >
          <div class="theme-preview light-theme">
            <div v-for="_ in 5" />
          </div>
          <div>Light</div>
        </div>
      </div>
    </div>
  </dialog>
</template>

<style scoped>
footer {
  background: var(--bg-color-600);
  display: flex;
  justify-content: flex-end;
}
.settings-button {
  background-color: unset;
  border: none;
  cursor: pointer;
}
.settings-button:focus-visible {
  outline: none;
}
footer>* {
  display: flex;
  align-items: center;
  padding: 0.2rem 0.5rem;
}
footer>*:not(.footer-separator):hover {
  background-color: var(--bg-color-500);
  user-select: none;
}
.footer-separator {
  flex-grow: 1;
}
dialog {
  position: relative;
  background-color: var(--bg-color-500);
  border: 2px solid var(--accent-color);
  border-radius: 1rem;
  overflow: hidden auto;
  padding: 0;
}
dialog::backdrop {
  backdrop-filter: blur(4px);
}
dialog>div {
  padding: 1rem;
  min-width: 10rem;
  min-height: 10rem;
}
dialog .close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
}
.themes-wrapper {
  display: flex;
  flex-wrap: wrap;
}
.theme-item {
  padding: 0.5rem;
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
</style>