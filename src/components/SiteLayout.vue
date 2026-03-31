<script setup lang="ts">
import SiteSideBar from "./SiteSideBar.vue";
import SiteFooter from "./SiteFooter.vue";
// import EditorBackground from "./EditorBackground.vue";
import SiteHeader from "./SiteHeader.vue";
import EditorNotificationManager from "./EditorNotificationManager.vue";
</script>

<template>
  <div id="page">
    <SiteHeader />
    <div id="page-center">
      <SiteSideBar />
      <div id="page-content-wrapper">
        <EditorNotificationManager />
<!--        <EditorBackground />-->
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
  clip-path: padding-box;
  height: 100vh;
  width: 100vw;
  background-color: var(--bg-color-800);
  background-image: linear-gradient(
    120deg,
    color-mix(in srgb, var(--accent-color) 20%, var(--bg-color-800)),
    color-mix(in srgb, var(--accent-color) 5%, var(--bg-color-800)) 70%
  );
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
