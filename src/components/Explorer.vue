<script setup lang="ts">
import ExplorerFolderItem from "./ExplorerFolderItem.vue";
import ExplorerFileItem from "./ExplorerFileItem.vue";
import ExplorerLinkItem from "./ExplorerLinkItem.vue";
import {MAX_AMOUNT_OF_BUGS, store} from "../data/Store.ts";

const githubURL = import.meta.env.VITE_PORTFOLIO_GITHUB_URL;
const uri = location.hostname
</script>

<template>
  <div class="explorer">
    <ExplorerFolderItem
      title="portfolio project"
      link="/"
    >
      <ExplorerFileItem
        title="home"
        link="/"
      />
      <ExplorerFileItem
        title="about me"
        link="/about"
      />
      <ExplorerFileItem
        title="contact"
        link="/contact"
      />
      <ExplorerFileItem
        title="skills"
        link="/skills"
      />
      <ExplorerFolderItem
        title="projects"
        link="/projects"
      >
        <ExplorerFileItem
          title="aimas"
          link="/projects/aimas"
        />
        <ExplorerFileItem
          title="befit"
          link="/projects/befit"
        />
        <ExplorerFileItem
          title="mining game"
          link="/projects/mining-game"
        />
        <ExplorerFileItem
          title="mtg collection manager"
          link="/projects/mtg"
        />
        <ExplorerFileItem
          title="neerslag radar"
          link="/projects/neerslag-radar"
        />
        <ExplorerFileItem
          title="portfolio"
          link="/projects/portfolio"
        />
        <ExplorerFileItem
          title="production calculator"
          link="/projects/production-calculator"
        />
        <ExplorerFileItem
          title="snake game"
          link="/projects/snake-game"
        />
        <ExplorerFileItem
          title="task manager"
          link="/projects/task-manager"
        />
      </ExplorerFolderItem>
      <ExplorerFileItem
        v-if="uri === 'localhost'"
        title="debug"
        link="/debug"
        icon="debug"
      />
      <ExplorerFileItem
        v-if="store.bugsCompleted.length > MAX_AMOUNT_OF_BUGS-1 || uri === 'localhost'"
        title="bug"
        link="/asteroids"
        icon="bug"
      />
      <ExplorerLinkItem
        title="GitHub"
        :link="githubURL"
      />
    </ExplorerFolderItem>
  </div>
</template>

<style scoped>
.explorer {
  overflow-y: auto;
}
</style>
