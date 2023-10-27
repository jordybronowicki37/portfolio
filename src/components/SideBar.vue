<script setup lang="ts">
import Explorer from "./Explorer.vue";
import {ref} from "vue";

const explorerOpened = ref<boolean>(true);
</script>

<template>
  <div
    v-if="!explorerOpened"
    class="file-explorer-tab"
    @click="explorerOpened=true"
  >
    File explorer
  </div>

  <div
    v-if="explorerOpened"
    class="side-bar"
  >
    <div class="side-bar-title">
      <div>File explorer</div>
      <div
        class="minimize-explorer"
        @click="explorerOpened=false"
      >
        <box-icon
          name="minus"
          size="xs"
          color="#ffffffde"
        />
      </div>
    </div>

    <Explorer />
  </div>
</template>

<style scoped>
.side-bar {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #444;
  min-width: 20%;
  max-width: 20%;
}

.file-explorer-tab {
  cursor: pointer;
  padding: 0 0.5rem;
  font-weight: bold;
  font-size: small;
  position: absolute;
  left:0;
  top:0;
  transform: rotate(-90deg) translateX(-100%);
  transform-origin: top left;
}

.file-explorer-tab:hover,
.minimize-explorer:hover {
  background: #2227;
}

.side-bar-title {
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: small;
  background-color: #333b;
  position: relative;
  overflow: hidden;
}

.minimize-explorer {
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
}
@media screen and (max-width: 600px) {
  .file-explorer-tab {
    display: none;
  }
  .side-bar {
    display: none;
  }
}
</style>