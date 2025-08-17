<script setup lang="ts">
import Explorer from "./Explorer.vue";
import {ref, watch} from "vue";

const resizableDiv = ref<HTMLDivElement>();
const tabOpened = ref<string>("File explorer");
const isResizing = ref<boolean>(false);
const width = ref<number>(300);

watch(resizableDiv, () => {
  if (resizableDiv.value === undefined) return;
  width.value = resizableDiv.value?.clientWidth;
});

const startResize = () => {
  isResizing.value = true;
  document.addEventListener('mousemove', resize);
  document.addEventListener('mouseup', stopResize);
}
const resize = (event: MouseEvent) => {
  if (isResizing.value) {
    width.value = event.clientX;
  }
}
const stopResize = () => {
  isResizing.value = false;
  document.removeEventListener('mousemove', resize);
  document.removeEventListener('mouseup', stopResize);
}
function switchTabVisibility(tab: string) {
  const isAlreadyOpened = tabOpened.value === tab;
  if (isAlreadyOpened) {
    tabOpened.value = '';
  } else {
    tabOpened.value = tab;
  }
}
</script>

<template>
  <div
    id="side-bar-wrapper"
    ref="resizableDiv"
    :class="[isResizing ? 'is-resizing' : '']"
    :style="[tabOpened ? {flex: `0 0 ${width}px`} : {minWidth: 'initial'}]"
  >
    <div id="side-menu">
      <button :class="[tabOpened === 'File explorer' ? 'active' : '']">
        <box-icon
          name="folder"
          size="1.5rem"
          color="var(--font-color-200)"
          title="File explorer"
          @click="switchTabVisibility('File explorer')"
        />
      </button>
      <button :class="[tabOpened === 'Commits' ? 'active' : '']">
        <box-icon
          name="git-commit"
          size="1.5rem"
          color="var(--font-color-200)"
          title="Commits"
          @click="switchTabVisibility('Commits')"
        />
      </button>
      <button :class="[tabOpened === 'Pull requests' ? 'active' : '']">
        <box-icon
          name="git-pull-request"
          size="1.5rem"
          color="var(--font-color-200)"
          title="Pull requests"
          @click="switchTabVisibility('Pull requests')"
        />
      </button>
      <button :class="[tabOpened === 'Headings' ? 'active' : '']">
        <box-icon
          name="hash"
          size="1.5rem"
          color="var(--font-color-200)"
          title="Headings"
          @click="switchTabVisibility('Headings')"
        />
      </button>
      <a href="https://github.com/jordybronowicki37">
        <box-icon
          name="github"
          type="logo"
          size="1.5rem"
          color="var(--font-color-200)"
          title="GitHub profile"
        />
      </a>
    </div>

    <div
      v-if="tabOpened"
      id="side-bar-content-wrapper"
    >
      <div id="side-bar-title">
        <div>{{ tabOpened }}</div>
        <button
          @click="tabOpened=''"
        >
          <box-icon
            name="minus"
            size="xs"
            color="var(--font-color-200)"
          />
        </button>
      </div>

      <div
        v-if="tabOpened === 'File explorer'"
        id="onboarding-view-side-bar"
      >
        <Explorer />
      </div>
    </div>

    <div
      id="side-bar-resize-handle"
      @mousedown="startResize"
    />
  </div>
</template>

<style>
body :has(.is-resizing) {
  user-select: none;
  cursor: ew-resize;
}
</style>

<style scoped>
#side-bar-wrapper {
  display: flex;
  position: relative;
  max-width: 40%;
  min-width: 15%;
  background: var(--bg-color-600);
}
#side-menu {
  border-right: 1px solid var(--bg-color-800);
}
#side-menu>* {
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  padding: 0.5rem;
  height: 1.3rem;
  width: 1.3rem;
  border-radius: 0.5rem;
  cursor: pointer;
}
#side-menu>*:hover {
  background: var(--bg-color-500);
}
#side-menu .active {
  background: var(--bg-color-500);
}
#side-bar-content-wrapper {
  border-right: 1px solid var(--secondary-color);
  height: 100%;
  flex-grow: 1;
  overflow: hidden;
}
#side-bar-resize-handle {
  cursor: ew-resize;
  width: 5px;
  position: absolute;
  height: 100%;
  top: 0;
  right: -2px;
  z-index: 1;
}
#side-bar-title {
  width: 100%;
  text-align: center;
  font-weight: bold;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--bg-color-800);
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}
#side-bar-title button:hover {
  background: var(--bg-color-800);
}
#side-bar-title button {
  all: unset;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
}
@media screen and (max-width: 600px) {
  #side-bar-wrapper {
    display: none;
  }
}
</style>
