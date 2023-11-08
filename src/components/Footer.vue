<script setup lang="ts">
import packageJson from '/package.json';

const uri = document.baseURI;
let branchName = "master";
if (uri.includes("localhost") || uri.includes("-dev")) branchName = "dev";
</script>

<template>
  <footer>
    <div>
      <box-icon
        name="git-branch"
        size="1em"
        color="var(--font-color-200)"
      />
      <span>{{ branchName }}</span>
    </div>
    <div>V{{ packageJson.version }}</div>
    <button class="settings-button">
      <box-icon
        type="solid"
        name="cog"
        size="1em"
        color="var(--font-color-200)"
      />
    </button>
  </footer>
</template>

<style scoped>
footer {
  background: var(--bg-color-600);
  display: flex;
  justify-content: flex-end;
}
.settings-button {
  background-color: unset;
  border: none;
}
.settings-button:focus-visible {
  outline: none;
}
footer>* {
  display: flex;
  align-items: center;
  padding: 0.2rem 0.5rem;
}
footer>*:hover {
  background-color: var(--bg-color-500);
  user-select: none;
}
</style>