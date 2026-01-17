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
    id="sidebar-wrapper"
    ref="resizableDiv"
    :class="[isResizing ? 'is-resizing' : '']"
    :style="[tabOpened ? {flex: `0 0 ${width}px`} : {minWidth: 'initial'}]"
  >
    <div id="sidebar-menu">
      <button
        title="File explorer"
        :class="[tabOpened === 'File explorer' ? 'active' : '']"
        @click="switchTabVisibility('File explorer')"
      >
        <box-icon
          name="folder"
          size="1.5rem"
          color="var(--sidebar-tab-icon-color)"
        />
      </button>
      <button
        title="Commits"
        :class="[tabOpened === 'Commits' ? 'active' : '']"
        @click="switchTabVisibility('Commits')"
      >
        <box-icon
          name="git-commit"
          size="1.5rem"
          color="var(--sidebar-tab-icon-color)"
        />
      </button>
      <button
        title="Pull requests"
        :class="[tabOpened === 'Pull requests' ? 'active' : '']"
        @click="switchTabVisibility('Pull requests')"
      >
        <box-icon
          name="git-pull-request"
          size="1.5rem"
          color="var(--sidebar-tab-icon-color)"
        />
      </button>
      <a href="https://github.com/jordybronowicki37">
        <box-icon
          name="github"
          type="logo"
          size="1.5rem"
          color="var(--sidebar-tab-icon-color)"
          title="GitHub profile"
        />
      </a>
    </div>

    <div
      v-if="tabOpened"
      id="sidebar-content-wrapper"
    >
      <div id="sidebar-title">
        <div>{{ tabOpened }}</div>
        <div class="close-button-wrapper">
          <button
            title="Close side bar"
            @click="tabOpened=''"
          >
            <box-icon
              name="minus"
              size="xs"
              color="var(--sidebar-close-button-color)"
            />
          </button>
        </div>
      </div>

      <div
        v-if="tabOpened === 'File explorer'"
        id="onboarding-view-sidebar"
      >
        <Explorer />
      </div>
    </div>

    <div
      id="sidebar-resize-handle"
      @mousedown="startResize"
    />
  </div>
</template>

<style lang="scss" scoped>
.is-resizing {
  user-select: none;
  cursor: ew-resize;
}
#sidebar-wrapper {
  display: flex;
  position: relative;
  max-width: min(40vw, 750px);
  min-width: max(15vw, 250px);
  background: var(--bg-color-600);
  border-right: 1px solid var(--secondary-color);
}
#sidebar-menu {
  border-right: 1px solid var(--bg-color-800);

  .active {
    background: var(--bg-color-500);
  }
  >* {
    --sidebar-tab-icon-color: var(--font-color-200);
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
    &:hover {
      --sidebar-tab-icon-color: var(--accent-color);
      background: var(--bg-color-500);
    }
  }
}
#sidebar-content-wrapper {
  height: 100%;
  flex-grow: 1;
  overflow: hidden;
}
#sidebar-resize-handle {
  cursor: ew-resize;
  width: 5px;
  position: absolute;
  height: 100%;
  top: 0;
  right: -2px;
  z-index: 1;
}
#sidebar-title {
  width: 100%;
  text-align: center;
  font-weight: bold;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--bg-color-800);
  position: relative;
  overflow: hidden;
  flex-shrink: 0;

  .close-button-wrapper {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
  }

  button {
    --sidebar-close-button-color: var(--font-color-200);
    all: unset;
    cursor: pointer;
    border-radius: 5px;
    overflow: hidden;
    height: 1.5rem;
    width: 1.5rem;
    margin: 0.5rem;
    background: var(--bg-color-500);

    &:hover {
      --sidebar-close-button-color: var(--accent-color);
    }
  }
}
@media screen and (max-width: 600px) {
  #sidebar-wrapper {
    display: none;
  }
}
</style>
