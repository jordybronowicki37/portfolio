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
    </Editor>
  </div>
</template>

<style>
.project-page {
  height: 100%;
  z-index: 1;
}
.project-page h2 {
  margin-bottom: 0.2rem;
}
@container editor-line (width > 500px) {
  .project-page .project-image {
    height: 15rem;
  }
}
.project-page .project-image {
  width: 100%;
  object-fit: contain;
}
.project-page ul {
  margin: 0;
  padding: 0;
}
.services-list li {
  margin-bottom: 0.5rem;
}
.features-list li {
  margin-left: 1.5rem;
  margin-bottom: 0.5rem;
}
.services-list {
  margin-left: 1rem !important;
  list-style: none;
}
@media screen and (min-width: 600px) {
  .features-list li {
    margin-left: 1.25rem;
  }
}

</style>
