<script setup lang="ts">
import ThemesManager from "./components/ThemesManager.vue";
import Layout from "./components/Layout.vue";
import OnboardingSetup from "./components/OnboardingSetup.vue";
import TechExplanationPopup from "./components/TechExplanationPopup.vue";
</script>

<template>
  <ThemesManager>
    <OnboardingSetup>
      <TechExplanationPopup>
        <Layout>
          <router-view />
        </Layout>
      </TechExplanationPopup>
    </OnboardingSetup>
  </ThemesManager>
</template>
