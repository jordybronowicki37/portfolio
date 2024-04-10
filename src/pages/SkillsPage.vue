<script setup lang="ts">
import Editor from "../components/Editor.vue";
import EditorLine from "../components/EditorLine.vue";
import {
  ALL_BACKEND_TYPES,
  ALL_DEPLOYMENT_TYPES,
  ALL_FRONTEND_TYPES,
  ALL_PERSISTENCE_TYPES
} from "../components/TechPillConfiguredData.ts";
import SkillPill from "../components/SkillPill.vue";
import {PillDataType} from "../data/Models";

function processTechPills(a: PillDataType[]): PillDataType[] {
  return a.filter(tp => tp.skillLevel).sort(sortTechPills);
}

function sortTechPills(a: PillDataType, b: PillDataType): number {
  if(a.skillLevel == undefined || b.skillLevel == undefined) return 0;
  if(a.skillLevel != b.skillLevel) return b.skillLevel - a.skillLevel;
  return (a.type > b.type) ? 1 : ((b.type > a.type) ? -1 : 0);
}

const backendTechPills = processTechPills(ALL_BACKEND_TYPES);
const frontendTechPills = processTechPills(ALL_FRONTEND_TYPES);
const deploymentTechPills = processTechPills(ALL_DEPLOYMENT_TYPES);
const persistenceTechPills = processTechPills(ALL_PERSISTENCE_TYPES);
</script>

<template>
  <Editor>
    <EditorLine :indentation="0"/>
    <EditorLine :indentation="0">
      <h2>My skills</h2>
    </EditorLine>

    <EditorLine :indentation="1"/>
    <EditorLine :indentation="1">
      <h3>Backend</h3>
    </EditorLine>
    <ul>
      <EditorLine v-for="tech in backendTechPills" :indentation="1">
        <li>
          <SkillPill :tech="tech"/>
        </li>
      </EditorLine>
    </ul>

    <EditorLine :indentation="1"/>
    <EditorLine :indentation="1">
      <h3>Frontend</h3>
    </EditorLine>
    <ul>
      <EditorLine v-for="tech in frontendTechPills" :indentation="1">
        <li>
          <SkillPill :tech="tech"/>
        </li>
      </EditorLine>
    </ul>

    <EditorLine :indentation="1"/>
    <EditorLine :indentation="1">
      <h3>Deployment</h3>
    </EditorLine>
    <ul>
      <EditorLine v-for="tech in deploymentTechPills" :indentation="1">
        <li>
          <SkillPill :tech="tech"/>
        </li>
      </EditorLine>
    </ul>

    <EditorLine :indentation="1"/>
    <EditorLine :indentation="1">
      <h3>Databases</h3>
    </EditorLine>
    <ul>
      <EditorLine v-for="tech in persistenceTechPills" :indentation="1">
        <li>
          <SkillPill :tech="tech"/>
        </li>
      </EditorLine>
    </ul>
    <EditorLine :indentation="1"/>

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