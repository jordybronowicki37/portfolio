<script setup lang="ts">

import Editor from "../../components/Editor.vue";
</script>

<template>
  <div class="project-page">
    <Editor>
      <template #default>
        <slot name="default" />
      </template>
      <template #info>
        <slot name="info" />
      </template>
      <template #search>
        <slot name="search" />
      </template>
      <template #heading>
        <slot name="heading" />
      </template>
      <template #aws>
        <slot name="aws" />
      </template>
    </Editor>
  </div>
</template>

<style lang="scss">
.project-page {
  height: 100%;
  z-index: 1;
  h2 {
    margin-bottom: 0.2rem;
  }
  ul {
    padding: 0;
  }
  ul:not(.aws-services-list) {
    margin: 0;
  }
  .project-image {
    width: 100%;
    object-fit: contain;
  }
}
@container editor-line (width > 500px) {
  .project-page .project-image {
    height: 15rem;
  }
}
.features-list li {
  margin-left: 1.5rem;
  margin-bottom: 0.5rem;
}
@media screen and (min-width: 600px) {
  .features-list li {
    margin-left: 1.25rem;
  }
}

</style>
