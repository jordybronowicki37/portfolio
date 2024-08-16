<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {ref, watch} from "vue";
import {ALL_TECH_PILL_TYPES} from "../data/TechPillConfiguredData.ts";
import TechPillConfigured from "./TechPillConfigured.vue";
import {PillDataType} from "../data/Models";

const router = useRouter();
const route = useRoute();
const modal = ref<HTMLDialogElement>();
const tech = ref<PillDataType>();

watch(route, () => {
  if (!modal.value) return;
  if (!route.query.techExplanation) {
    modal.value.close();
    return;
  }
  const techTitle = route.query.techExplanation as string;
  const techPill = ALL_TECH_PILL_TYPES.find(t => t.type === techTitle);
  if (!techPill) return;
  tech.value = techPill;
  modal.value.showModal();
});

function close() {
  router.replace({query:{techExplanation: undefined}});
  modal.value?.close();
}
</script>

<template>
  <dialog
    ref="modal"
    @click="close"
  >
    <div @click="$event.stopPropagation()">
      <button
        class="close-button"
        @click="close"
      >
        <box-icon
          name="x"
          color="var(--font-color-200)"
        />
      </button>

      <section v-if="tech">
        <header>
          <TechPillConfigured
            :key="tech.type"
            :type="tech.type"
            decoration-only
          />
        </header>

        <p v-if="tech.description">
          {{ tech.description }}
        </p>

        <ul v-if="tech.links && tech.links.length > 0">
          <li>
            <a
              v-for="link in tech.links"
              :key="link.name"
              :href="link.url"
            >{{ link.name }}</a>
          </li>
        </ul>
      </section>
    </div>
  </dialog>
  <slot />
</template>

<style scoped>
dialog {
  background-color: var(--bg-color-600);
  border: none;
  border-radius: .375rem;
  padding: 0;
  width: 20rem;
}
dialog>div {
  padding: 1rem;
}
section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
a {
  color: revert;
}
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
}
</style>