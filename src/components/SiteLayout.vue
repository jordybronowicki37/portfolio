<script setup lang="ts">
import SiteSideBar from "./SiteSideBar.vue";
import SiteFooter from "./SiteFooter.vue";
import EditorBackground from "./EditorBackground.vue";
import SiteHeader from "./SiteHeader.vue";
import EditorNotificationManager from "./EditorNotificationManager.vue";
import EditorTabsManager from "./EditorTabsManager.vue";
</script>

<template>
  <div id="page">
    <SiteHeader />
    <div id="page-center">
      <SiteSideBar />
      <div id="page-content-wrapper">
        <EditorTabsManager />
        <EditorNotificationManager />
        <EditorBackground />
        <div id="page-content">
          <slot />
        </div>
      </div>
    </div>
    <SiteFooter />
  </div>
</template>

<style scoped>
#page {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
#page-center {
  position: relative;
  flex-grow: 2;
  display: flex;
  flex-direction: row;
  max-height: 100%;
  overflow: hidden;
}
#page-content-wrapper {
  background-color: var(--bg-color-800);
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  overflow: hidden;
}
#page-content {
  overflow: hidden auto;
  flex-grow: 2;
  position: relative;
}
</style>
