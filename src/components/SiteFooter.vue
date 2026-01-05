<script setup lang="ts">
// @ts-ignore
import packageJson from "/package.json";
import {computed, ref, watch} from "vue";
import EditorBranchesOverview from "./EditorBranchesOverview.vue";
import EditorSettings from "./EditorSettings.vue";
import {MAX_AMOUNT_OF_BUGS, store} from "../data/Store.ts";
import BugOverview from "./BugOverview.vue";

const uri = location.hostname;
let branchName = "master";
if (uri.includes("-dev")) branchName = "staging";
if (uri === 'localhost') branchName = "dev";

const dialog = ref<HTMLDialogElement>();
const branchesOverviewOpened = ref(false);
const bugsOverviewOpened = ref(false);
const amountOfBugsLeft = computed(() => MAX_AMOUNT_OF_BUGS - store.bugsCompleted.length);
const bugCollected = ref(false);

watch([store.bugsCompleted], () => {
  bugCollected.value = true;
  setTimeout(() => {bugCollected.value = false;}, 2000);
})
</script>

<template>
  <footer>
    <div class="branches-tab">
      <button
        class="footer-tab"
        title="Current branch"
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
        class="branches-overview-popup"
        @mouseleave="branchesOverviewOpened = false"
      >
        <EditorBranchesOverview :current-branch="branchName" />
      </div>
    </div>
    <div class="footer-separator" />
    <div class="bugs-tab">
      <button
        class="footer-tab bugs-tab-button"
        :title="amountOfBugsLeft>1 ?`${amountOfBugsLeft} bugs remaining` : amountOfBugsLeft===1 ? '1 bug remaining' : 'No bugs found'"
        @click="bugsOverviewOpened = !bugsOverviewOpened"
      >
        <box-icon
          type="solid"
          name="bug"
          size="1em"
          :color="amountOfBugsLeft>0 ? 'var(--font-color-200)' : '#439934'"
        />
        <span v-if="amountOfBugsLeft>0">{{ amountOfBugsLeft }}</span>
      </button>
      <box-icon
        v-if="bugCollected"
        class="bug-collection-animation"
        type="solid"
        name="bug"
        size="1em"
        color="var(--error-color)"
      />
      <div
        v-if="bugsOverviewOpened"
        class="bugs-overview-popup"
        @mouseleave="bugsOverviewOpened = false"
      >
        <BugOverview />
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
.branches-tab, .bugs-tab {
  position: relative;
  height: auto;
  width: auto;
}
.branches-overview-popup {
  position: absolute;
  bottom: calc(100% + 10px);
  left: 10px;
}
.bugs-overview-popup {
  position: absolute;
  bottom: calc(100% + 10px);
  right: 0;
}
.bugs-tab-button {
  background: var(--bg-color-600);
  position: relative;
  z-index: 1;
  height: 100%;
}
.bug-collection-animation {
  z-index: 0;
  position: absolute;
  left: 10px;
  animation: bug-collection ease-out 2s 1 forwards;
}
@keyframes bug-collection {
  0% {
    bottom: 5px;
    transform: rotate(0deg);
  }
  10% { transform: rotate(5deg); }
  20% { transform: rotate(-5deg); }
  30% { transform: rotate(3deg); }
  40% { transform: rotate(-3deg); }
  50% {
    bottom: calc(100% + 10px);
    transform: rotate(0deg);
  }
  60% { transform: rotate(5deg); }
  70% { transform: rotate(-5deg); }
  80% { transform: rotate(3deg); }
  90% { transform: rotate(-3deg); }
  100% {
    bottom: 5px;
    transform: rotate(0deg);
  }
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
