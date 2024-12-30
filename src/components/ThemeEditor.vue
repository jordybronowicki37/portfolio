<script setup lang="ts">
import {ref, watchEffect} from "vue";
import {store} from "../data/Store.ts";
import {CustomTheme} from "../data/Models";
import ThemePreviewLarge from "./ThemePreviewLarge.vue";

type EditThemeMode = {
  mode: "edit",
  id: number
}
type CopyThemeMode = {
  mode: "copy",
  id: number
}
type CreateThemeMode = {
  mode: "create",
}
export type ThemeEditorModes = EditThemeMode | CopyThemeMode | CreateThemeMode;

const emit = defineEmits(['close'])
const { data } = defineProps<{data: ThemeEditorModes}>();

const displayName = ref("");
const titleColor = ref("");
const textColor = ref("");
const subTextColor = ref("");
const backgroundFarColor = ref("");
const backgroundMidColor = ref("");
const backgroundNearColor = ref("");
const foregroundColor = ref("");
const secondaryColor = ref("");
const accentColor = ref("");
const errorColor = ref("");

function getId(): number {
  if (data.mode === "edit") {
    return data.id;
  }
  return store.customThemes.map(v => v.id).reduce((p, c) => c > p ? c : p, 0) + 1;
}

function buildStyle(): CustomTheme {
  return {
    id: getId(),
    displayName: displayName.value,
    colors: {
      titleColor: titleColor.value,
      textColor: textColor.value,
      subTextColor: subTextColor.value,
      backgroundFarColor: backgroundFarColor.value,
      backgroundMidColor: backgroundMidColor.value,
      backgroundNearColor: backgroundNearColor.value,
      foregroundColor: foregroundColor.value,
      secondaryColor: secondaryColor.value,
      accentColor: accentColor.value,
      errorColor: errorColor.value,
    }
  }
}

function saveTheme() {
  if (data.mode === "edit") {
    const c = store.customThemes.findIndex(v => v.id === data.id)
    if (c === -1) return
    store.customThemes[c] = buildStyle();
  }
  else {
    store.customThemes.push(buildStyle());
  }
  emit("close");
}

watchEffect(() => {
  if (data.mode === "edit" || data.mode === "copy") {
    const refStyle = store.customThemes.find(v => v.id === data.id);
    if (!refStyle) return;
    displayName.value = refStyle.displayName;
    titleColor.value = refStyle.colors.titleColor;
    textColor.value = refStyle.colors.textColor;
    subTextColor.value = refStyle.colors.subTextColor;
    backgroundFarColor.value = refStyle.colors.backgroundFarColor;
    backgroundMidColor.value = refStyle.colors.backgroundMidColor;
    backgroundNearColor.value = refStyle.colors.backgroundNearColor;
    foregroundColor.value = refStyle.colors.foregroundColor;
    secondaryColor.value = refStyle.colors.secondaryColor;
    accentColor.value = refStyle.colors.accentColor;
    errorColor.value = refStyle.colors.errorColor;
  }
  if (data.mode === "create") {
    displayName.value = "My new style"
    titleColor.value = "#ffffff"
    textColor.value = "#bdbdbd"
    subTextColor.value = "#bbbbbb"
    backgroundFarColor.value = "#242424"
    backgroundMidColor.value = "#282828"
    backgroundNearColor.value = "#333333"
    foregroundColor.value = "#444444"
    secondaryColor.value = "#999999"
    accentColor.value = "#ea6d30"
    errorColor.value = "#8f1e1e"
  }
})
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

  <div class="theme-editor">
    <form @submit="$event.preventDefault()">
      <header>
        <h3 v-if="data.mode === 'create'">
          Creating a new style
        </h3>
        <h3 v-if="data.mode === 'edit'">
          Editing a style
        </h3>
        <h3 v-if="data.mode === 'copy'">
          Copied a style
        </h3>
      </header>
      <div class="inputs">
        <label for="displayNameInput">Name</label>
        <input
          id="displayNameInput"
          v-model="displayName"
          type="text"
        >

        <label for="titleColorInput">Title color</label>
        <div>
          <input
            id="titleColorInput"
            v-model="titleColor"
            type="color"
          >
          <input
            class="color-code-preview"
            :value="titleColor"
            type="text"
            disabled
          >
        </div>

        <label for="textColorInput">Text color</label>
        <div>
          <input
            id="textColorInput"
            v-model="textColor"
            type="color"
          >
          <input
            class="color-code-preview"
            :value="textColor"
            type="text"
            disabled
          >
        </div>

        <label for="subTextColorInput">Sub-text color</label>
        <div>
          <input
            id="subTextColorInput"
            v-model="subTextColor"
            type="color"
          >
          <input
            class="color-code-preview"
            :value="subTextColor"
            type="text"
            disabled
          >
        </div>

        <label for="backgroundFarColorInput">Far background color</label>
        <div>
          <input
            id="backgroundFarColorInput"
            v-model="backgroundFarColor"
            type="color"
          >
          <input
            class="color-code-preview"
            :value="backgroundFarColor"
            type="text"
            disabled
          >
        </div>

        <label for="backgroundMidColorInput">Mid background color</label>
        <div>
          <input
            id="backgroundMidColorInput"
            v-model="backgroundMidColor"
            type="color"
          >
          <input
            class="color-code-preview"
            :value="backgroundMidColor"
            type="text"
            disabled
          >
        </div>

        <label for="backgroundNearColorInput">Near background color</label>
        <div>
          <input
            id="backgroundNearColorInput"
            v-model="backgroundNearColor"
            type="color"
          >
          <input
            class="color-code-preview"
            :value="backgroundNearColor"
            type="text"
            disabled
          >
        </div>

        <label for="foregroundColorInput">Foreground color</label>
        <div>
          <input
            id="foregroundColorInput"
            v-model="foregroundColor"
            type="color"
          >
          <input
            class="color-code-preview"
            :value="foregroundColor"
            type="text"
            disabled
          >
        </div>

        <label for="secondaryColorInput">Secondary color</label>
        <div>
          <input
            id="secondaryColorInput"
            v-model="secondaryColor"
            type="color"
          >
          <input
            class="color-code-preview"
            :value="secondaryColor"
            type="text"
            disabled
          >
        </div>

        <label for="accentColorInput">Accent color</label>
        <div>
          <input
            id="accentColorInput"
            v-model="accentColor"
            type="color"
          >
          <input
            class="color-code-preview"
            :value="accentColor"
            type="text"
            disabled
          >
        </div>

        <label for="errorColorInput">Error color</label>
        <div>
          <input
            id="errorColorInput"
            v-model="errorColor"
            type="color"
          >
          <input
            class="color-code-preview"
            :value="errorColor"
            type="text"
            disabled
          >
        </div>
      </div>
      <div class="buttons">
        <button @click="$emit('close')">
          Cancel
        </button>
        <button @click="saveTheme">
          Save
        </button>
      </div>
    </form>

    <div class="editor-preview">
      <ThemePreviewLarge />
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
.theme-editor {
  display: flex;
}
header {
  text-align: center;
  padding: 1rem;
}
.inputs {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  row-gap: 0.5rem;
  padding: 0 1rem;
}
.inputs>div {
  display: flex;
}
input[type=color] {
  margin: 0;
  padding: 0;
  border: none;
  width: 2em;
  height: 2em;
}
.color-code-preview {
  width: 5em;
}
#displayNameInput {
  width: 7em;
  height: 2em;
}
.editor-preview {
  border-left: 2px solid var(--accent-color);
  width: 15em;
  --font-color-200: v-bind(titleColor);
  --font-color-300: v-bind(textColor);
  --font-color-400: v-bind(subTextColor);
  --bg-color-800: v-bind(backgroundFarColor);
  --bg-color-700: v-bind(backgroundMidColor);
  --bg-color-600: v-bind(backgroundNearColor);
  --bg-color-500: v-bind(foregroundColor);
  --secondary-color: v-bind(secondaryColor);
  --accent-color: v-bind(accentColor);
  --error-color: v-bind(errorColor);
}
.buttons {
  display: flex;
  gap: 1rem;
  padding: 1rem;
}
.buttons button {
  box-shadow: 0 1px 2px #0000000d;
  padding: .3rem .5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  flex-grow: 1;
  background-color: transparent;
  border: 1px solid var(--font-color-200);
}
.buttons button:hover {
  background-color: var(--bg-color-800);
  opacity: 0.8;
}
</style>