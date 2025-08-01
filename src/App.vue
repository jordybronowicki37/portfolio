<script setup lang="ts">
import ThemeManager from "./components/ThemeManager.vue";
import SiteLayout from "./components/SiteLayout.vue";
import OnboardingSetup from "./components/OnboardingSetup.vue";
import TechExplanationPopup from "./components/TechExplanationPopup.vue";
import EditorTabsManager from "./components/EditorTabsManager.vue";
</script>

<template>
  <EditorTabsManager>
    <ThemeManager>
      <OnboardingSetup>
        <TechExplanationPopup>
          <SiteLayout>
            <router-view />
          </SiteLayout>
        </TechExplanationPopup>
      </OnboardingSetup>
    </ThemeManager>
  </EditorTabsManager>
</template>
