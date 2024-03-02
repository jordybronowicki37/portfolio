<script setup lang="ts">
import ThemesManager from "./components/ThemesManager.vue";
import Layout from "./components/Layout.vue";
</script>

<template>
  <ThemesManager>
    <Layout>
      <router-view />
    </Layout>
  </ThemesManager>
</template>

<style scoped>

</style>
