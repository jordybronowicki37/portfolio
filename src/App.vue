<script setup lang="ts">
import Header from "./components/Header.vue";
import SideBar from "./components/SideBar.vue";
import Footer from "./components/Footer.vue";

</script>

<template>
  <div id="page">
    <Header />
    <div id="page-center">
      <SideBar />
      <div id="page-content">
        <router-view />
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
  display: flex;
  flex-direction: column;
  overflow: hidden auto;
  flex-grow: 2;
}
</style>
