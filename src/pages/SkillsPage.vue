<script setup lang="ts">
import Editor from "../components/Editor.vue";
import EditorLine from "../components/EditorLine.vue";
import {ALL_TECH_PILL_TYPES} from "../components/TechPillConfiguredData.ts";
import SkillPill from "../components/SkillPill.vue";

const techPills = ALL_TECH_PILL_TYPES.filter(tp => tp.skillLevel).sort((a, b) => {
  if(a.skillLevel == undefined || b.skillLevel == undefined) return 0;
  if(a.skillLevel != b.skillLevel) return b.skillLevel - a.skillLevel;
  return (a.type > b.type) ? 1 : ((b.type > a.type) ? -1 : 0);
});

</script>

<template>
  <Editor>
    <EditorLine :indentation="0"/>
    <EditorLine :indentation="0">
      <h2>My skills</h2>
    </EditorLine>

    <ul>
      <EditorLine v-for="tech in techPills" :indentation="1">
        <li>
          <SkillPill :tech="tech"/>
        </li>
      </EditorLine>
    </ul>

    <EditorLine :indentation="0"/>
    <EditorLine :indentation="0"/>
  </Editor>
</template>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
  margin-bottom: 0.2rem;
}
</style>