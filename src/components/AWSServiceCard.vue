<script setup lang="ts">
import {AWS_ICONS} from "../data/AWSIconData.ts";
import {ref} from "vue";

type AWSIconNames = keyof typeof AWS_ICONS;

const { name } = defineProps<{ name: AWSIconNames }>();
const selectedIcon = AWS_ICONS[name];
const modal = ref<HTMLDialogElement>()

function openModal() {
  if (!modal.value) return;
  modal.value?.showModal();
}

function closeModal() {
  if (!modal.value) return;
  modal.value?.close();
}
</script>

<template>
  <section class="aws-service-card">
    <header
      class="main-header"
      @click="openModal"
    >
      <img
        :src="selectedIcon.icon"
        :alt="`AWS ${selectedIcon.title} icon`"
      >
      <h4>{{ selectedIcon.title }}</h4>
      <div
        title="Info"
        class="info-icon"
      >
        <box-icon
          color="var(--font-color-200)"
          size="1.2em"
          name="info-circle"
        />
      </div>
    </header>
    <dialog
      ref="modal"
      @click="closeModal"
    >
      <div @click="$event.stopPropagation()">
        <header class="card-header">
          <img
            :src="selectedIcon.icon"
            :alt="`AWS ${selectedIcon.title} icon`"
          >
          <h4>{{ selectedIcon.title }}</h4>
        </header>
        <p>{{ selectedIcon.description }}</p>

        <div
          class="modal-close-button-wrapper"
          title="Close"
          @click="closeModal"
        >
          <box-icon
            color="var(--font-color-200)"
            size="2em"
            name="x"
          />
        </div>
      </div>
    </dialog>
  </section>
</template>

<style scoped>
.aws-service-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: fit-content;
  padding-right: 0.5rem;
}
header {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.main-header {
  cursor: pointer;
}
img {
  height: 2em;
  width: 2em;
}
p {
  margin-top: 1rem;
}
dialog:focus-visible {
  outline: none;
}
dialog {
  width: 90vw;
  max-width: 40rem;
}
.modal-close-button-wrapper {
  cursor: pointer;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
box-icon {
  vertical-align: bottom;
}
</style>
