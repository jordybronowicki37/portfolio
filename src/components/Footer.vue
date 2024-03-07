<script setup lang="ts">
import packageJson from '/package.json';
import {ref} from "vue";
import BranchesOverview from "./BranchesOverview.vue";
import EditorSettings from "./EditorSettings.vue";

const uri = location.hostname;
let branchName = "master";
if (uri.includes("-dev")) branchName = "staging";
if (uri.includes("localhost")) branchName = "dev";

const dialog = ref<HTMLDialogElement>();
const branchesOverviewOpened = ref(false);
</script>

<template>
  <footer>
    <div class="current-branch">
      <div
        class="footer-tab"
        @click="branchesOverviewOpened = !branchesOverviewOpened"
      >
        <box-icon
          name="git-branch"
          size="1em"
          color="var(--font-color-200)"
        />
        <span>{{ branchName }}</span>
      </div>
      <div
        v-if="branchesOverviewOpened"
        class="branches-overview"
        @mouseleave="branchesOverviewOpened = false"
      >
        <BranchesOverview :current-branch="branchName" />
      </div>
    </div>
    <div class="footer-separator" />
    <div class="footer-tab">
      V{{ packageJson.version }}
    </div>
    <button
      class="settings-button footer-tab"
      @click="dialog?.showModal()"
    >
      <box-icon
        type="solid"
        name="cog"
        size="1em"
        color="var(--font-color-200)"
      />
    </button>
  </footer>

  <dialog
    ref="dialog"
    @click="dialog?.close()"
  >
    <div @click="$event.stopPropagation()">
      <EditorSettings :close="() => dialog?.close()" />
    </div>
  </dialog>
</template>

<style scoped>
footer {
  background: var(--bg-color-600);
  border-top: 1px solid var(--secondary-color);
  display: flex;
  justify-content: flex-end;
}
.current-branch {
  position: relative;
}
.branches-overview {
  position: absolute;
  bottom: 100%;
  left: 0;
}
.settings-button {
  background-color: unset;
  border: none;
}
.settings-button:focus-visible {
  outline: none;
}
.footer-tab {
  display: flex;
  align-items: center;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  user-select: none;
}
.footer-tab:hover {
  background-color: var(--bg-color-500);
}
.footer-separator {
  flex-grow: 1;
}
dialog {
  position: relative;
  background-color: var(--bg-color-500);
  border: 2px solid var(--accent-color);
  border-radius: 1rem;
  overflow: hidden auto;
  padding: 0;
}
dialog::backdrop {
  backdrop-filter: blur(4px);
}
dialog>div {
  padding: 1rem;
  min-width: 10rem;
  min-height: 10rem;
}
</style>