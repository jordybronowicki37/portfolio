<script setup lang="ts">

import ImageFocusModal from "./ImageFocusModal.vue";

withDefaults(
    defineProps<{
      imageOnTheLeft?: boolean,
      imageTitle: string,
      imageDescription: string,
    }>(),
    { imageOnTheLeft: false }
);
</script>

<template>
  <div
    class="combined-view-container"
    :class="[ imageOnTheLeft ? 'image-on-the-left' : '']"
  >
    <div class="text-wrapper">
      <slot name="text" />
    </div>
    <ImageFocusModal
      :title="imageTitle"
      :description="imageDescription"
    >
      <slot name="image" />
    </ImageFocusModal>
  </div>
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
.text-wrapper {
  width: 60%;
  padding: 1rem;
}
@container editor-line (width < 500px) {
  .text-wrapper {
    width: 100%;
  }
  .combined-view-container {
    flex-direction: column;
  }
}

</style>