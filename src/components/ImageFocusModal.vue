<script setup lang="ts">
import {ref} from "vue";

defineProps<{
  title: string,
  description: string,
}>();
const modal = ref<HTMLDialogElement>();

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
  <div
    class="image-preview"
    @click="openModal"
  >
    <slot />
  </div>

  <dialog
    ref="modal"
    class="full-screen-image-modal"
    @click="closeModal"
  >
    <div
      class="full-screen-image-modal-content-wrapper"
      @click="$event.stopPropagation()"
    >
      <header>{{ title }}</header>
      <p>{{ description }}</p>
      <div class="full-screen-image-wrapper">
        <slot />
      </div>
    </div>

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
  </dialog>
</template>

<style scoped>
.image-preview {
  cursor: pointer;
}
.full-screen-image-modal::backdrop {
  backdrop-filter: blur(10px);
}
.full-screen-image-modal:focus-visible {
  outline: none;
}
.full-screen-image-modal {
  padding: 0;
  width: 90vw;
  background-color: var(--bg-color-800);
  border: 3px solid var(--bg-color-500);
  border-radius: 10px;
}
.full-screen-image-modal-content-wrapper {
  padding: 1rem;
}
.full-screen-image-modal header {
  font-size: large;
  font-weight: bold;
}
.modal-close-button-wrapper {
  cursor: pointer;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
</style>
<style>
.full-screen-image-modal img {
  height: unset !important;
}
</style>