<script setup lang="ts">
import {useRoute} from "vue-router";
import Explorer from "./Explorer.vue";
import {ref, watch} from "vue";

const route = useRoute();
const mobileNavigationOpened = ref<boolean>(false);

watch(route, () => {
  mobileNavigationOpened.value = false;
})
</script>

<template>
  <header>
    <img
      id="icon"
      src="/icon.svg"
      alt="Icon"
    >

    <div id="current-file-title">
      Editing: {{ route.name }}
    </div>

    <div>
      <box-icon
        name="menu"
        color="var(--font-color-200)"
        @click="mobileNavigationOpened = !mobileNavigationOpened"
      />
    </div>

    <div
      class="mobile-navigation"
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
  width: 100%;
  background-color: linear-gradient(var(--bg-color-800));
  background-image:
      linear-gradient(
          90deg,
          color-mix(in srgb, var(--accent-color) 80%, transparent),
          color-mix(in srgb, var(--bg-color-800) 90%, transparent) 40%
      );
  border-bottom: 1px solid var(--secondary-color);
  position: relative;
}
header>* {
  padding: 0.2rem;
}
#icon {
  height: 1.5rem;
  width: 1.5rem;
}
#current-file-title {
  color: var(--font-color-400);
}
header box-icon {
  cursor: pointer;
}
.mobile-navigation {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 1fr;
  transition: grid-template-rows 0.5s;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  width: 100%;
  padding: 0;
  background-color: var(--bg-color-800);
  border-bottom: 1px solid var(--bg-color-500);
}
.mobile-navigation>div {
  overflow: hidden;
  padding: 1rem;
  transition: padding 0.5s;
}
/*noinspection CssUnusedSymbol*/
.mobile-navigation.opened {
  grid-template-rows: 1fr;
}
.mobile-navigation.closed>div {
  padding: 0 1rem;
}
@media screen and (min-width: 600px) {
  .mobile-navigation {
    display: none;
  }
  box-icon {
    display: none;
  }
}
</style>