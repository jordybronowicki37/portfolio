<script setup lang="ts">

import SideBar from "./SideBar.vue";
import Footer from "./Footer.vue";
import EditorBackground from "./EditorBackground.vue";
import Header from "./Header.vue";
</script>

<template>
  <div id="page">
    <Header />
    <div id="page-center">
      <SideBar />
      <div id="page-content">
        <EditorBackground/>
        <slot />
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

#page-content {
  background-color: var(--bg-color-800);
  display: flex;
  flex-direction: column;
  overflow: hidden auto;
  flex-grow: 2;
  position: relative;
}
</style>