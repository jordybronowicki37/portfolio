<script setup lang="ts">
import {useRoute} from "vue-router";
import {watch} from "vue";
import {store} from "../data/Store.ts";
import {EditorTab} from "../data/Models";

const route = useRoute();

watch(route, () => {
  if (typeof route.name !== "string") return;
  if (["unknown", "no-page"].includes(route.name)) return;
  const foundTab = store.tabHistory.find(tab => tab.name === route.name);
  let pathUrl = route.fullPath.replace("mobileNavOpened=true", "mobileNavOpened=false");
  if (foundTab) {
    foundTab.fullPath = pathUrl;
  }
  else {
    const newTab: EditorTab = {
      name: route.name,
      fullPath: pathUrl,
    }
    store.tabHistory.push(newTab);
  }
});
</script>

<template>
  <slot />
</template>
