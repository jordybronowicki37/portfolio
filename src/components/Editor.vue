<script setup lang="ts">
import EditorTabsContainer from "./EditorTabsContainer.vue";
import EditorSideBar from "./EditorSideBar.vue";
import {useSlots} from "vue";

const slots = useSlots();
</script>

<template>
  <div id="editor">
    <div id="editor-center">
      <EditorTabsContainer />
      <div id="editor-lines-wrapper">
        <slot />
      </div>
    </div>
    <EditorSideBar>
      <template
        v-if="slots.info"
        #info
      >
        <slot name="info" />
      </template>
      <template
        v-if="slots.heading"
        #heading
      >
        <slot name="heading" />
      </template>
      <template
        v-if="slots.search"
        #search
      >
        <slot name="search" />
      </template>
      <template
        v-if="slots.aws"
        #aws
      >
        <slot name="aws" />
      </template>
    </EditorSideBar>
  </div>
</template>

<style scoped>
#editor {
  counter-reset: line-number;
  height: 100%;
  display: flex;
}
#editor-center {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
  background-color: var(--bg-color-600);
  margin: 0 5px;
  border-radius: 5px;
}
#editor-lines-wrapper {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
}
</style>
