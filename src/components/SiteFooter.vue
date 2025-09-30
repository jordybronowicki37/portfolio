<script setup lang="ts">
import packageJson from '/package.json';
import {ref} from "vue";
import EditorBranchesOverview from "./EditorBranchesOverview.vue";
import EditorSettings from "./EditorSettings.vue";
import {MAX_AMOUNT_OF_BUGS, store} from "../data/Store.ts";

const uri = location.hostname;
let branchName = "master";
if (uri.includes("-dev")) branchName = "staging";
if (uri === 'localhost') branchName = "dev";

const dialog = ref<HTMLDialogElement>();
const branchesOverviewOpened = ref(false);
const bugsOverviewOpened = ref(false);
const amountOfBugsLeft = MAX_AMOUNT_OF_BUGS - store.bugsCompleted.length
</script>

<template>
  <footer>
    <div
      class="current-branch"
      title="Current branch"
    >
      <button
        class="footer-tab"
        @click="branchesOverviewOpened = !branchesOverviewOpened"
      >
        <box-icon
          name="git-branch"
          size="1em"
          color="var(--font-color-200)"
        />
        <span>{{ branchName }}</span>
      </button>
      <div
        v-if="branchesOverviewOpened"
        class="branches-overview"
        @mouseleave="branchesOverviewOpened = false"
      >
        <EditorBranchesOverview :current-branch="branchName" />
      </div>
    </div>
    <div class="footer-separator" />
    <div class="bugs-wrapper">
      <button
        class="footer-tab"
        title="Bugs remaining"
        @click="bugsOverviewOpened = !bugsOverviewOpened"
      >
        <box-icon
          type="solid"
          name="bug"
          size="1em"
          color="var(--font-color-200)"
        />
        <span>{{ amountOfBugsLeft }}</span>
      </button>
      <div
        v-if="bugsOverviewOpened"
        class="bugs-overview"
        @mouseleave="bugsOverviewOpened = false"
      >
        Test
      </div>
    </div>
    <div
      class="footer-tab"
      title="Current version"
    >
      V{{ packageJson.version }}
    </div>
    <button
      id="editor-settings-button"
      class="footer-tab"
      title="Settings"
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
      <EditorSettings @close="() => dialog?.close()" />
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
.current-branch, .bugs-wrapper {
  position: relative;
}
.branches-overview, .bugs-overview {
  position: absolute;
  bottom: 100%;
  left: 0;
}
button span {
  font-family: Monospaced, monospace;
  font-size: initial;
  margin-left: 0.1em;
}
button {
  background-color: unset;
  border: none;
}
button:focus-visible {
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
  overflow: hidden auto;
}
dialog>div {
  min-width: 10rem;
  min-height: 10rem;
}
</style>
