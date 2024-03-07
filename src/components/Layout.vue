<script setup lang="ts">
import SideBar from "./SideBar.vue";
import Footer from "./Footer.vue";
import EditorBackground from "./EditorBackground.vue";
import Header from "./Header.vue";
import EditorNotificationManager from "./EditorNotificationManager.vue";
</script>

<template>
  <div id="page">
    <Header />
    <div id="page-center">
      <SideBar />
      <div id="page-content-wrapper">
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
  display: flex;
  flex-direction: column;
}
#page-content {
  background-color: var(--bg-color-800);
  overflow: hidden auto;
  flex-grow: 2;
  position: relative;
}
</style>