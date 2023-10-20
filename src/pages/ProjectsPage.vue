<script setup lang="ts">
import Editor from "../components/Editor.vue";
import EditorLine from "../components/EditorLine.vue";
import NeerslagRadarProjectCard from "./projects/NeerslagRadarProjectCard.vue";
import SnakeProjectCard from "./projects/SnakeProjectCard.vue";
import PortfolioProjectCard from "./projects/PortfolioProjectCard.vue";
import TaskManagerProjectCard from "./projects/TaskManagerProjectCard.vue";
import ProdCalProjectCard from "./projects/ProdCalProjectCard.vue";
import "./projects/ProjectCard.css";
</script>

<template>
  <Editor>
    <EditorLine :indentation="0" />
    <EditorLine :indentation="0">
      <h1>My Projects</h1>
    </EditorLine>
    <EditorLine :indentation="1">
      <p>Projects intro</p>
    </EditorLine>
    <EditorLine :indentation="1" />
    <EditorLine :indentation="2" />

    <EditorLine :indentation="2">
      <div class="projects-container">
        <ProdCalProjectCard />
        <SnakeProjectCard />
        <PortfolioProjectCard />
        <TaskManagerProjectCard />
        <NeerslagRadarProjectCard />
      </div>
    </EditorLine>

    <EditorLine :indentation="2" />
    <EditorLine :indentation="1" />
    <EditorLine :indentation="0" />
  </Editor>
</template>

<style scoped>
.projects-container {
  display: flex;
  flex-wrap: wrap;
}
</style>