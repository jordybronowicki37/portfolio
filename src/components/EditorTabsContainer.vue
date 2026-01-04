<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {ref, watchPostEffect} from "vue";
import {store} from "../data/Store.ts";

const tabsContainer = ref<HTMLDivElement>();
const router = useRouter();
const route = useRoute();

function translateScroll(e: WheelEvent) {
  if (!tabsContainer.value) return;
  tabsContainer.value.scrollTo({
    left: tabsContainer.value.scrollLeft + e.deltaY,
    behavior: "auto",
  });
}

function removeTab(name: string) {
  let tabs = store.tabHistory;
  const isCurrentTab = route.name === name;
  const removeIndex = tabs.findIndex(t => t.name === name);
  if (removeIndex === -1) return;
  tabs = tabs.filter(t => t.name !== name);
  store.tabHistory = tabs;

  if (tabs.length === 0) {
    router.push("/no-page");
    return;
  }
  if (!isCurrentTab) return;
  if (tabs.length === removeIndex) router.push(tabs[removeIndex-1].fullPath);
  else router.push(tabs[removeIndex].fullPath);
}
watchPostEffect(() => {
  if (typeof route.name !== "string") return;
  if (!tabsContainer.value) return;
  const foundTabElement = tabsContainer.value.querySelector(".active-tab");
  if (foundTabElement) foundTabElement.scrollIntoView({ behavior: "smooth" });
});
</script>

<template>
  <div
    id="tabs-container"
    ref="tabsContainer"
    class="editor-tabs-container"
    @wheel="translateScroll"
  >
    <div
      v-for="tab in store.tabHistory"
      :key="tab.name"
      class="editor-tab"
      :class="[route.name === tab.name ? 'active-tab' : '']"
    >
      <box-icon
        class="tab-icon"
        name="file"
        size="xs"
        :color="route.name === tab.name ? 'var(--accent-color)' : 'var(--font-color-200)'"
      />
      <router-link
        :to="tab.fullPath"
        class="editor-tab-link"
      >
        {{ tab.name }}
      </router-link>
      <button
        class="editor-tab-close-btn"
        title="Close tab"
        @click="() => removeTab(tab.name)"
      >
        <box-icon
          name="x"
          size="xs"
          color="var(--font-color-200)"
        />
      </button>
    </div>
  </div>
</template>

<style scoped>
.editor-tabs-container {
  display: flex;
  flex: 0 0 content;
  width: 100%;
  overflow: auto;
  background-color: var(--bg-color-700);
  border-bottom: 1px solid var(--secondary-color);
  scroll-behavior: smooth;
  z-index: 1;
}
.editor-tab {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
}
@media screen and (min-width: 600px) {
  .editor-tab:not(:hover):not(.active-tab) .editor-tab-close-btn {
    opacity: 0;
  }
}
.active-tab .editor-tab-link {
  color: var(--accent-color);
}
.active-tab::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  width: 100%;
  background-color: var(--accent-color);
  border-radius: 5px;
}
.editor-tab-link {
  display: inline-block;
  text-decoration: none;
  white-space: nowrap;
}
.tab-icon {
  line-height: 0;
}
.editor-tab-close-btn {
  background-color: transparent;
  border: none;
  border-radius: 4px;
  padding: 0 0.2rem;
}
.editor-tab-close-btn:hover {
  background-color: var(--bg-color-500);
  border: none;
}
.editor-tab-close-btn:focus-visible {
  background-color: var(--bg-color-500);
  outline: none;
}
</style>
