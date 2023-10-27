<script setup lang="ts">
import ExplorerFileItem from "./ExplorerFileItem.vue";
import ExplorerFolderItem from "./ExplorerFolderItem.vue";
import {ref} from "vue";
import ExplorerLinkItem from "./ExplorerLinkItem.vue";

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
    class="file-explorer"
  >
    <div class="file-explorer-title">
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

    <ExplorerFileItem
      title="home"
      link="/"
    />
    <ExplorerFileItem
      title="about-me"
      link="/about"
    />

    <ExplorerFolderItem
      title="projects"
      link="/projects"
    >
      <ExplorerFileItem
        title="production calculator"
        link="/projects/production-calculator"
      />
      <ExplorerFileItem
        title="snake game"
        link="/projects/snake-game"
      />
      <ExplorerFileItem
        title="portfolio"
        link="/projects/portfolio"
      />
      <ExplorerFileItem
        title="task manager"
        link="/projects/task-manager"
      />
      <ExplorerFileItem
        title="neerslag radar"
        link="/projects/neerslag-radar"
      />
    </ExplorerFolderItem>

    <ExplorerLinkItem
      title="GitHub"
      link="https://github.com/jordybronowicki37/portfolio"
    />
  </div>
</template>

<style scoped>
.file-explorer {
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

.file-explorer-title {
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
  .file-explorer {
    display: none;
  }
}
</style>