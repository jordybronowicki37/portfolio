<script setup lang="ts">
import Editor from "../components/Editor.vue";
import EditorLine from "../components/EditorLine.vue";
import projects from "./projects/ProjectCardsData.json";
import ProjectCard, {ProjectCardProps} from "./projects/ProjectCard.vue";
import {ref, watch} from "vue";
import TechPillConfigured from "../components/TechPillConfigured.vue";
import TechPillContainer from "../components/TechPillContainer.vue";
import {ALLPROJECTTYPES} from "../components/TechPillConfiguredData.ts";

type TagOccurrence = {
  amount: number,
  tag: string,
}
type TagOccurrenceObj = {
  [key: string]: TagOccurrence
}
const SortOccurrences = (occurrences: TagOccurrence[]): TagOccurrence[] => {
  return occurrences.sort((a, b) => {
    const difference = b.amount - a.amount;
    if (difference !== 0) return difference;
    return (a.tag > b.tag) ? 1 : ((b.tag > a.tag) ? -1 : 0);
  });
}

const allProjects = projects as ProjectCardProps[];
const flattenedTags = allProjects.flatMap(v => v.tags);
const mappedTagOccurrences = flattenedTags.reduce((obj, tag) => {
  if (obj[tag]) obj[tag].amount += 1;
  else obj[tag] = { amount: 1, tag }
  return obj;
}, {} as TagOccurrenceObj);
const tagOccurrences = SortOccurrences(Object.values(mappedTagOccurrences).filter(v => !ALLPROJECTTYPES.includes(v.tag)));
const typeOccurrences = SortOccurrences(Object.values(mappedTagOccurrences).filter(v => ALLPROJECTTYPES.includes(v.tag)));

const projectsFiltered = ref<ProjectCardProps[]>(allProjects);
const filterTitle = ref<string>("");
const filterTags = ref<string[]>([]);

watch([filterTitle, filterTags], () => {
  projectsFiltered.value = allProjects
      .filter(v => v.title.toLowerCase().includes(filterTitle.value.toLowerCase()))
      .filter(v => filterTags.value.every(tag => v.tags.includes(tag)));
})
</script>

<template>
  <Editor>
    <EditorLine :indentation="0"/>
    <EditorLine :indentation="0">
      <h1>My Projects</h1>
    </EditorLine>
    <EditorLine :indentation="1">
      <p>Projects intro</p>
    </EditorLine>
    <EditorLine :indentation="1"/>

    <EditorLine :indentation="1"/>
    <EditorLine :indentation="1">
      <div class="filters">
        <input type="text" v-model="filterTitle">
        <div class="tags-filter">
          <TechPillContainer :types="filterTags"/>

          <div class="tags-filter-options-wrapper">
            <div class="tags-filter-options">
              <div class="tag-filter-group">
                <p class="tag-group-title">Project types</p>
                <div v-for="tagOccurrence in typeOccurrences" class="tech-occurrence" :key="tagOccurrence.tag">
                  <input type="checkbox" :value="tagOccurrence.tag" :id="tagOccurrence.tag" v-model="filterTags">
                  <label :for="tagOccurrence.tag">
                    <TechPillConfigured :type="tagOccurrence.tag"/>
                  </label>
                  <span>{{tagOccurrence.amount}}</span>
                </div>
              </div>

              <div class="tag-filter-group">
                <p class="tag-group-title">Technologies</p>
                <div v-for="tagOccurrence in tagOccurrences" class="tech-occurrence" :key="tagOccurrence.tag">
                  <input type="checkbox" :value="tagOccurrence.tag" :id="tagOccurrence.tag" v-model="filterTags">
                  <label :for="tagOccurrence.tag">
                    <TechPillConfigured :type="tagOccurrence.tag"/>
                  </label>
                  <span>{{tagOccurrence.amount}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </EditorLine>

    <EditorLine :indentation="2"/>

    <EditorLine :indentation="2">
      <div class="projects-container">
        <ProjectCard :project="project" :key="project.title" v-for="project in projectsFiltered"/>
      </div>
    </EditorLine>

    <EditorLine :indentation="2"/>
    <EditorLine :indentation="1"/>
    <EditorLine :indentation="0"/>
  </Editor>
</template>

<style scoped>
.projects-container {
  display: flex;
  flex-wrap: wrap;
}
.filters {
  display: flex;
}
.tags-filter {
  position: relative;
  width: 15rem;
}
.tags-filter-options-wrapper {
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #242424;
  border-radius: 0.5rem;
  border: 1px solid #bbb;
  width: 100%;
  height: 15rem;
  overflow-y: hidden;
  top: 100%;
  left: 0;
}
.tags-filter-options {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: auto;
  padding: 0.5rem;
}
.tag-group-title {
  font-size: 12px;
}

.tech-occurrence {
  display: flex;
  align-items: center;
}
.tech-occurrence label {
  flex-grow: 1;
}
.tech-occurrence span {
  opacity: 0.6;
}
</style>