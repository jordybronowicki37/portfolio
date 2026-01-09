<script setup lang="ts">
import {ref, useSlots, watch} from "vue";

const resizableDiv = ref<HTMLDivElement>();
const tabOpened = ref<string>("Info");
const isResizing = ref<boolean>(false);
const width = ref<number>(300);
const slots = useSlots();

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
    width.value = window.innerWidth - event.clientX;
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
    v-if="Object.keys(slots).length > 0"
    id="editor-sidebar-wrapper"
    ref="resizableDiv"
    :class="[isResizing ? 'is-resizing' : '']"
    :style="[tabOpened ? {flex: `0 0 ${width}px`} : {minWidth: 'initial'}]"
  >
    <div
      id="sidebar-resize-handle"
      @mousedown="startResize"
    />
    <div id="editor-sidebar-content">
      <div id="editor-sidebar-title">
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
        v-if="tabOpened === 'Info'"
        id="sidebar-info-wrapper"
      >
        <slot name="info" />
      </div>
      <div
        v-if="tabOpened === 'Search'"
        id="sidebar-search-wrapper"
      >
        <slot name="search" />
      </div>
      <div
        v-if="tabOpened === 'Heading'"
        id="sidebar-heading-wrapper"
      >
        <slot name="heading" />
      </div>
    </div>
    <div id="editor-sidebar-menu">
      <button
        v-if="slots['info']"
        :class="[tabOpened === 'Info' ? 'active' : '']"
      >
        <box-icon
          name="info-circle"
          size="1.5rem"
          color="var(--sidebar-tab-icon-color)"
          title="Info"
          @click="switchTabVisibility('Info')"
        />
      </button>
      <button
        v-if="slots['search']"
        :class="[tabOpened === 'Search' ? 'active' : '']"
      >
        <box-icon
          name="search"
          size="1.5rem"
          color="var(--sidebar-tab-icon-color)"
          title="Search"
          @click="switchTabVisibility('Search')"
        />
      </button>
    </div>
  </div>
</template>

<style scoped>
.is-resizing {
  user-select: none;
  cursor: ew-resize;
}
#editor-sidebar-wrapper {
  background: var(--bg-color-600);
  border-left: 1px solid var(--secondary-color);
  position: relative;
  max-width: 40%;
  display: flex;
  justify-content: flex-end;
}
#editor-sidebar-content {
  flex-grow: 1;
}
#sidebar-info-wrapper {
  padding: 1rem;
}
#editor-sidebar-menu {
  border-left: 1px solid var(--bg-color-800);

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
#editor-sidebar-title {
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
#sidebar-resize-handle {
  cursor: ew-resize;
  width: 5px;
  position: absolute;
  height: 100%;
  top: 0;
  left: -2px;
  z-index: 1;
}
</style>
