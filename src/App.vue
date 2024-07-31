<script setup lang="ts">
import ThemesManager from "./components/ThemesManager.vue";
import Layout from "./components/Layout.vue";
import OnboardingSetup from "./components/OnboardingSetup.vue";
</script>

<template>
  <ThemesManager>
    <OnboardingSetup>
      <Layout>
        <router-view />
      </Layout>
    </OnboardingSetup>
  </ThemesManager>
</template>

<style scoped>

</style>
