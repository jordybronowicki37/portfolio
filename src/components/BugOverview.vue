<script setup lang="ts">
import {MAX_AMOUNT_OF_BUGS, store} from "../data/Store.ts";
import {computed} from "vue";

const foundBugs = store.bugsCompleted;
const completionPercentage = computed(() => `${Math.round(foundBugs.length/MAX_AMOUNT_OF_BUGS*100)}%`)
</script>

<template>
  <div class="bugs-overview">
    <h2>Bug overview</h2>
    <p>Find all the bugs to unlock a secret.</p>

    <div class="bugs-overview-container">
      <box-icon
        v-for="i in MAX_AMOUNT_OF_BUGS"
        :key="i"
        type="solid"
        name="bug"
        size="1em"
        :color="foundBugs.includes(i) ? `var(--error-color)` : `var(--font-color-200)`"
        :title="foundBugs.includes(i) ? `Bug #${i} found` : `Bug #${i} not found yet`"
      />
    </div>

    <div class="bugs-completion-container">
      <div class="skill-pill-wrapper">
        <div class="skill-pill" />
      </div>
      <p>{{ completionPercentage }}</p>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-size: larger;
  opacity: 0.8;
  margin-bottom: 0.5rem;
  white-space: nowrap;
}
.bugs-overview {
  padding: 0.5rem;
  background: var(--bg-color-600);
  border: 1px solid var(--secondary-color);
  box-shadow: 0 0 1rem #0005;
  border-radius: 5px;
}
.bugs-overview-container {
  width: min-content;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
  padding: 0.5rem 0;
}
.bugs-completion-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.skill-pill-wrapper {
  background-color: var(--bg-color-700);
  border: 1px solid var(--bg-color-500);
  border-radius: 10rem;
  flex-grow: 1;
  height: 0.5rem;
}
.skill-pill {
  background-color: #43993433;
  border-color: #439934;
  border-width: 2px;
  border-style: solid;
  border-radius: 10rem;
  padding: 2px;
  width: v-bind(completionPercentage);
  transition: width 2s;
  color: transparent;
}
</style>
