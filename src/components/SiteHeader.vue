<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import Explorer from "./Explorer.vue";
import {ref, watch} from "vue";

const router = useRouter();
const route = useRoute();
const mobileNavigationOpened = ref<boolean>(false);

function ToggleMobileNavigation() {
  if (mobileNavigationOpened.value) CloseMobileNavigation();
  else OpenMobileNavigation();
}

function CloseMobileNavigation() {
  router.replace({query: {...route.query, mobileNavOpened: undefined}});
  mobileNavigationOpened.value = false;
}

function OpenMobileNavigation() {
  router.replace({query: {...route.query, mobileNavOpened: "true"}});
  mobileNavigationOpened.value = true;
}

watch(route, () => {
  mobileNavigationOpened.value = route.query.mobileNavOpened === "true";
})
</script>

<template>
  <header>
    <img
      id="icon"
      src="/img/icon.svg"
      alt="Icon"
    >

    <div
      v-if="typeof route.name === 'string' && !['unknown', 'no-page'].includes(route.name)"
      id="current-file-title"
    >
      Editing: {{ route.name }}
    </div>

    <div
      id="mobile-navigation-open-btn"
      @click="ToggleMobileNavigation"
    >
      <box-icon
        name="menu"
        color="var(--font-color-200)"
      />
    </div>

    <div
      id="mobile-navigation"
      :class="[mobileNavigationOpened ? 'opened' : 'closed']"
    >
      <div>
        <Explorer />
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0.5rem 1rem;
}
#icon {
  height: 1.3rem;
  width: 1.3rem;
}
#current-file-title {
  color: var(--font-color-400);
}
header box-icon {
  cursor: pointer;
}
#mobile-navigation {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 1fr;
  transition: grid-template-rows 0.5s;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 9;
  width: 100%;
  padding: 0;
  background-color: var(--bg-color-800);
  border-bottom: 1px solid var(--bg-color-500);
}
#mobile-navigation > div {
  overflow: hidden;
  padding: 1rem;
  transition: padding 0.5s;
}
/*noinspection CssUnusedSymbol*/
#mobile-navigation.opened {
  grid-template-rows: 1fr;
}
#mobile-navigation.closed > div {
  padding: 0 1rem;
}
@media screen and (min-width: 600px) {
  #mobile-navigation {
    display: none;
  }
  #mobile-navigation-open-btn box-icon {
    display: none;
  }
}
</style>
