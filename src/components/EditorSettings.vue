<script setup lang="ts">
import {store, Themes} from "../data/Store.ts";
import ThemePreview from "./ThemePreview.vue";
import ThemeEditor, {ThemeEditorModes} from "./ThemeEditor.vue";
import {ref} from "vue";

const emit = defineEmits(['close'])
const themeEditorDialog = ref<HTMLDialogElement>();
const themeEditorData = ref<ThemeEditorModes>({mode: "create"})

function restartOnboarding() {
  emit('close');
  store.startOnboarding = true;
}
function removeTheme(id: number) {
  store.customThemes = store.customThemes.filter(item => item.id !== id);
}
function copyTheme(id: number) {
  themeEditorData.value = {mode: "copy", id: id};
  themeEditorDialog.value?.showModal()
}
function editTheme(id: number) {
  themeEditorData.value = {mode: "edit", id: id};
  themeEditorDialog.value?.showModal()
}
function createTheme() {
  themeEditorData.value = {mode: "create"};
  themeEditorDialog.value?.showModal()
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
        <button
          v-for="[title, theme] in Object.entries(Themes)"
          :key="title"
          class="theme-item"
          @click="store.theme = theme"
        >
          <ThemePreview :theme="theme" />
          <i class="theme-name">{{ title }}</i>
        </button>
      </div>
    </div>

    <div>
      <h2>Custom themes</h2>
      <div class="custom-themes-container themes-wrapper">
        <div
          v-for="theme in store.customThemes"
          :key="theme.id"
          class="custom-theme-item"
        >
          <button
            class="theme-item"
            @click="store.theme = 'custom-theme-'+theme.id"
          >
            <ThemePreview :theme="'custom-theme-'+theme.id" />
            <i class="theme-name">{{ theme.displayName }}</i>
          </button>
          <div class="custom-themes-actions">
            <button
              title="Remove"
              @click="removeTheme(theme.id)"
            >
              <box-icon
                type="solid"
                name="trash"
                size="1em"
                color="var(--font-color-200)"
              />
            </button>
            <button
              title="Copy"
              @click="copyTheme(theme.id)"
            >
              <box-icon
                type="solid"
                name="copy"
                size="1em"
                color="var(--font-color-200)"
              />
            </button>
            <button
              title="Edit"
              @click="editTheme(theme.id)"
            >
              <box-icon
                type="solid"
                name="edit"
                size="1em"
                color="var(--font-color-200)"
              />
            </button>
          </div>
        </div>
      </div>
      <button
        class="create-button"
        @click="createTheme"
      >
        Create new
      </button>
    </div>

    <div class="tutorial-setting-wrapper">
      <h2>Tutorial</h2>
      <button @click="restartOnboarding">
        Restart tutorial
      </button>
    </div>

    <dialog
      ref="themeEditorDialog"
      @click="themeEditorDialog?.close()"
    >
      <div @click="$event.stopPropagation()">
        <ThemeEditor
          :data="themeEditorData"
          @close="themeEditorDialog?.close()"
        />
      </div>
    </dialog>
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
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
}
.theme-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  cursor: pointer;
  padding: 0;
  background-color: transparent;
  border: none;
  transition: all 0.3s;
}
.theme-item:focus-visible {
  outline: none;
}
.theme-item:hover {
  scale: 1.1;
}
.theme-name {
  text-transform: capitalize;
  font-style: normal;
}
.custom-themes-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
}
.custom-theme-item {
  display: flex;
}
.custom-themes-actions {
  display: flex;
  flex-direction: column;
}
.custom-themes-actions button {
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s;
}
.custom-themes-actions button:focus-visible {
  outline: none;
}
.custom-themes-actions button:hover {
  opacity: 1;
}
.tutorial-setting-wrapper button, .create-button {
  box-shadow: 0 1px 2px #0000000d;
  padding: .3rem .5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  flex-grow: 1;
  background-color: transparent;
  border: 1px solid var(--font-color-200);
}
.tutorial-setting-wrapper button:hover, .create-button:hover {
  background-color: var(--bg-color-800);
  opacity: 0.8;
}
dialog {
  position: relative;
  background-color: var(--bg-color-500);
  border: 2px solid var(--accent-color);
  border-radius: 1rem;
  overflow: hidden auto;
  padding: 0;
}
</style>