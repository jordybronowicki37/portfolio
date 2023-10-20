<script setup lang="ts">
withDefaults(
    defineProps<{ imageOnTheLeft?: boolean }>(),
    {imageOnTheLeft: false}
);
</script>

<template>
  <div class="combined-view-container" :class="[ imageOnTheLeft ? 'image-on-the-left' : '']">
    <div class="left-wrapper text-wrapper">
      <slot name="text"/>
    </div>
    <div class="right-wrapper image-wrapper">
      <slot name="image"/>
    </div>
  </div>
</template>

<style scoped>
.combined-view-container {
  display: flex;
  align-items: center;
}
.image-on-the-left {
  flex-direction: row-reverse;
}
.image-wrapper {
  width: 40%;
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
</style>