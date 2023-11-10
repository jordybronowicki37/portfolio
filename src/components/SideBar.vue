<script setup lang="ts">
import Explorer from "./Explorer.vue";
import {ref, watch} from "vue";

const resizableDiv = ref<HTMLDivElement>();
const explorerOpened = ref<boolean>(true);
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
</script>

<template>
  <div
    ref="resizableDiv"
    class="side-bar-wrapper"
    :class="[isResizing ? 'is-resizing' : '']"
    :style="[explorerOpened ? {flex: `0 0 ${width}px`} : {minWidth: 'unset', width: 0}]"
  >
    <div
      v-if="!explorerOpened"
      key="side-bar-title"
      class="file-explorer-tab"
      @click="explorerOpened=true"
    >
      File explorer
    </div>

    <div
      v-if="explorerOpened"
      class="side-bar"
    >
      <div class="side-bar-title">
        <div>File explorer</div>
        <div
          class="minimize-explorer"
          @click="explorerOpened=false"
        >
          <box-icon
            name="minus"
            size="xs"
            color="var(--font-color-200)"
          />
        </div>
      </div>

      <Explorer />
    </div>
    <div
      class="side-bar-resize-handle"
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
.side-bar-wrapper {
  display: flex;
  max-width: 40%;
  min-width: 15%;
}
.side-bar-resize-handle {
  cursor: ew-resize;
  background-color: var(--bg-color-600);
  border-left: 1px solid var(--secondary-color);
  width: 3px;
}
.side-bar {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  background: var(--bg-color-500);
  overflow: hidden;
}
.file-explorer-tab {
  cursor: pointer;
  padding: 0 0.5rem;
  font-weight: bold;
  font-size: small;
  position: absolute;
  left:0;
  top:0;
  transform: rotate(-90deg) translateX(-100%);
  transform-origin: top left;
}
.file-explorer-tab:hover,
.minimize-explorer:hover {
  background: var(--bg-color-800);
}
.side-bar-title {
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: small;
  background-color: var(--bg-color-600);
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}
.minimize-explorer {
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
}
@media screen and (max-width: 600px) {
  .side-bar-wrapper {
    display: none;
  }
}
</style>