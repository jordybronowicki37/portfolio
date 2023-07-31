<script setup lang="ts">
import Header from "./components/Header.vue";
import Explorer from "./components/Explorer.vue";

</script>

<template>
  <div id="page">
    <Header/>
    <div id="page-center">
      <Explorer/>
      <div id="page-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
#page {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

#page-center {
  flex-grow: 2;
  display: flex;
  flex-direction: row;
}

#page-content {
  display: flex;
  flex-direction: column;
}
</style>
