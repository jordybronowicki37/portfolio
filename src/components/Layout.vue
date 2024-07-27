<script setup lang="ts">
import SideBar from "./SideBar.vue";
import Footer from "./Footer.vue";
import EditorBackground from "./EditorBackground.vue";
import Header from "./Header.vue";
import EditorNotificationManager from "./EditorNotificationManager.vue";
import EditorTabsManager from "./EditorTabsManager.vue";
</script>

<template>
  <div id="page">
    <Header />
    <div id="page-center">
      <SideBar />
      <div id="page-content-wrapper">
        <EditorTabsManager />
        <EditorNotificationManager />
        <EditorBackground />
        <div id="page-content">
          <slot />
        </div>
      </div>
    </div>
    <Footer />
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