<script setup lang="ts">
import Editor from "../components/Editor.vue";
import EditorLine from "../components/EditorLine.vue";
import projects from "./projects/ProjectCardsData.json";
import ProjectCard, {ProjectCardProps} from "./projects/ProjectCard.vue";
import {ref, watch} from "vue";
import TechPillConfigured from "../components/TechPillConfigured.vue";
import {
  ALL_BACKEND_TYPES, ALL_DEPLOYMENT_TYPES,
  ALL_FRONTEND_TYPES,
  ALL_PERSISTENCE_TYPES,
  ALL_PROJECT_TYPES
} from "../components/TechPillConfiguredData.ts";

type TagOccurrence = {
  amount: number,
  tag: string,
}
type TagOccurrenceObj = {
  [key: string]: TagOccurrence
}
type TagOccurrenceGroup = {
  title: string,
  tags: TagOccurrence[];
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

const projectTypeOccurrences = SortOccurrences(Object.values(mappedTagOccurrences).filter(v => ALL_PROJECT_TYPES.includes(v.tag)));
const backendOccurrences = SortOccurrences(Object.values(mappedTagOccurrences).filter(v => ALL_BACKEND_TYPES.includes(v.tag)));
const frontendOccurrences = SortOccurrences(Object.values(mappedTagOccurrences).filter(v => ALL_FRONTEND_TYPES.includes(v.tag)));
const persistenceOccurrences = SortOccurrences(Object.values(mappedTagOccurrences).filter(v => ALL_PERSISTENCE_TYPES.includes(v.tag)));
const deploymentOccurrences = SortOccurrences(Object.values(mappedTagOccurrences).filter(v => ALL_DEPLOYMENT_TYPES.includes(v.tag)));
const tagOccurrenceGroups: TagOccurrenceGroup[] = [
  {
    title: "Project type",
    tags: projectTypeOccurrences
  },
  {
    title: "Backend",
    tags: backendOccurrences
  },
  {
    title: "Frontend",
    tags: frontendOccurrences
  },
  {
    title: "Persistence",
    tags: persistenceOccurrences
  },
  {
    title: "Deployment",
    tags: deploymentOccurrences
  }
]

const projectsFiltered = ref<ProjectCardProps[]>(allProjects);
const filterTitle = ref<string>("");
const filterTags = ref<string[]>([]);
const filterTagsOpened = ref<boolean>(false);

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
    <EditorLine :indentation="1">
      <div class="filters-wrapper">
        <p>Filter projects</p>
        <div class="filters">
          <div class="title-filter-wrapper">
            <label for="title-filter">Title</label>
            <input type="text" id="title-filter" v-model="filterTitle">
          </div>

          <div class="tags-filter-wrapper" v-on:click="filterTagsOpened = !filterTagsOpened">
            <label>Tags</label>
            <div class="tags-filter-expand-button-wrapper">
              <box-icon name='chevron-down' color="#ffffffde" :class="[filterTagsOpened ? 'opened': 'closed']"/>
            </div>

            <div class="selected-tags">
              <TechPillConfigured v-for="tag in filterTags" :type="tag" :key="tag"/>
            </div>

            <div class="tags-filter-options-wrapper" v-if="filterTagsOpened" v-on:click="$event.stopPropagation()">
              <header class="tags-filter-header">
                <p>Tags filter</p>
                <box-icon name='x' color="#ffffffde" v-on:click="filterTagsOpened = false"/>
              </header>
              <div class="tags-filter-options">
                <div class="tag-filter-group" v-for="tagGroup in tagOccurrenceGroups">
                  <p class="tag-group-title">{{tagGroup.title}}</p>
                  <div v-for="tagOccurrence in tagGroup.tags" class="tech-occurrence" :key="tagOccurrence.tag">
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
      </div>
    </EditorLine>
    <EditorLine :indentation="1"/>

    <EditorLine :indentation="2">
      <div class="projects-container">
        <ProjectCard :project="project" :key="project.title" v-for="project in projectsFiltered"/>
      </div>
    </EditorLine>

    <EditorLine :indentation="2"/>
    <EditorLine :indentation="1"/>
    <EditorLine :indentation="0"/>
    <EditorLine :indentation="0"/>
  </Editor>
</template>

<style scoped>
.projects-container {
  display: flex;
  flex-wrap: wrap;
}
.filters-wrapper {
  display: flex;
  flex-direction: column;
  padding: 0.3rem;
  gap: 0.5rem;
  background-color: #333;
  border-radius: 0.5rem;
}
.filters {
  display: flex;
  gap: 0.3rem;
}
.title-filter-wrapper {
  display: flex;
  position: relative;
  padding-top: 0.6em;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}
.tags-filter-wrapper>label,
.title-filter-wrapper>label {
  position: absolute;
  top: -0.7em;
  left: 0.8em;
  padding: 0.1em;
  font-size: 12px;
  background-color: #333;
}
.tags-filter-expand-button-wrapper {
  position: absolute;
  right: 0.5rem;
  top: 0;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
}
.tags-filter-expand-button-wrapper>box-icon {
  rotate: 0deg;
  transition: all 0.3s;
}
.tags-filter-expand-button-wrapper>box-icon.opened {
  rotate: 180deg;
}
.title-filter-wrapper input {
  flex-grow: 1;
  background-color: transparent;
  border: none;
  border-radius: 0;
}
.title-filter-wrapper input:focus {
  background-color: transparent;
  outline: none;
}
.tags-filter-wrapper {
  position: relative;
  border: 1px solid #ccc;
  padding-top: 0.6em;
  border-radius: 0.5rem;
  flex-grow: 1;
}
.selected-tags {
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  cursor: pointer;
  min-height: 0.8rem;
  gap: 0.3rem;
  padding: 0.3rem;
}
.tags-filter-options-wrapper {
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #242424;
  border-radius: 0.5rem;
  border: 1px solid #bbb;
  width: 15rem;
  height: 15rem;
  overflow-y: hidden;
  top: 100%;
  left: 0;
}
.tags-filter-header {
  position: relative;
  padding: 0.5rem 0.5rem 0 0.5rem;
}
.tags-filter-header>box-icon {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
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