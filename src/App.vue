<script setup lang="ts">
import Header from "./components/Header.vue";

</script>

<template>
  <div id="page">
    <Header/>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
#page {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  flex-grow: 2;
  display: flex;
  flex-direction: column;
}
</style>
