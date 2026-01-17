<script setup lang="ts">
import Editor from "../components/Editor.vue";
import EditorLine from "../components/EditorLine.vue";
import ProjectCard from "../components/ProjectCard.vue";
import ProjectFiltering from "../components/ProjectFiltering.vue";
import {store} from "../data/Store.ts";
</script>

<template>
  <Editor>
    <div id="onboarding-view-projects">
      <EditorLine :indentation="0" />

      <section>
        <EditorLine :indentation="0">
          <header class="page-header">
            <h1># Projects</h1>
          </header>
        </EditorLine>
        <EditorLine :indentation="1">
          <p>
            Here you can find some of the projects that I have either created myself or in collaboration with other
            students.
          </p>
        </EditorLine>
      </section>
      <EditorLine :indentation="1" />
    </div>

    <EditorLine :indentation="2">
      <div class="projects-container">
        <ProjectCard
          v-for="project in store.projectsFiltered"
          :key="project.title"
          :project="project"
        />
      </div>
    </EditorLine>

    <EditorLine :indentation="2" />
    <EditorLine :indentation="1" />
    <EditorLine :indentation="0" />
    <EditorLine :indentation="0" />

    <template #search>
      <ProjectFiltering />
    </template>
  </Editor>
</template>

<style scoped>
.page-header {
  display: flex;
  gap: 2rem;
}

.page-header span {
  margin-left: 1rem;
  opacity: 0.7;
  font-size: xx-large;
}

.projects-container {
  display: grid;
  justify-items: center;
  gap: 10px;
}
@media screen and (min-width: 1201px) {
  .projects-container {
    grid-template-columns: repeat(auto-fit, minmax(20rem, max-content));
  }
}
@media screen and (max-width: 1200px) and (min-width: 601px) {
  .projects-container {
    grid-template-columns: repeat(auto-fit, minmax(15rem, max-content));
  }
}
@media screen and (max-width: 600px) {
  .projects-container {
    grid-template-columns: repeat(auto-fit, minmax(12rem, max-content));
  }
}
</style>
