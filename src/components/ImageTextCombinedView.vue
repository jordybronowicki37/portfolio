<script setup lang="ts">
import {ref} from "vue";

withDefaults(
    defineProps<{ imageOnTheLeft?: boolean }>(),
    {imageOnTheLeft: false}
);
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
    class="combined-view-container"
    :class="[ imageOnTheLeft ? 'image-on-the-left' : '']"
  >
    <div class="left-wrapper text-wrapper">
      <slot name="text" />
    </div>
    <div
      class="right-wrapper image-wrapper"
      @click="openModal"
    >
      <slot name="image" />
    </div>
  </div>

  <dialog
    ref="modal"
    class="full-screen-image-modal"
    @click="closeModal"
  >
    <div
      class="full-screen-image-wrapper"
      @click="$event.stopPropagation()"
    >
      <slot name="image" />
    </div>
    <div
      class="modal-close-button-wrapper"
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
.combined-view-container {
  display: flex;
  align-items: center;
}
/*noinspection CssUnusedSymbol*/
.image-on-the-left {
  flex-direction: row-reverse;
}
.image-wrapper {
  width: 40%;
  cursor: pointer;
}
.text-wrapper {
  width: 60%;
  padding: 1rem;
}
@media screen and (max-width: 600px) {
  .combined-view-container {
    flex-direction: column;
  }
  .image-wrapper {
    width: 100%;
  }
  .text-wrapper {
    width: 100%;
  }
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
.full-screen-image-wrapper {
  padding: 2rem;
}
.modal-close-button-wrapper {
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
}
</style>
<style>
.full-screen-image-modal img {
  height: unset !important;
}
</style>