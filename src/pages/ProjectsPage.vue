<script setup lang="js">
import Editor from "../components/Editor.vue";
import EditorLine from "../components/EditorLine.vue";
import projects from "../components/ProjectCardsData.json";
import ProjectCard from "../components/ProjectCard.vue";
import {ref, watch} from "vue";
import TechPillConfigured from "../components/TechPillConfigured.vue";
import TagsFilter from "../components/TagsFilter.vue";
import {useRoute, useRouter} from "vue-router";

const router = useRouter();
const route = useRoute();
const filterTitleQuery = route.query.filterTitle;
const filterTagsQuery = route.query.filterTags;

const extractTagsFilterFromQuery = function () {
  if (!filterTagsQuery) return [];
  if (typeof filterTagsQuery === "string") return [filterTagsQuery];
  return filterTagsQuery;
}

const projectsFiltered = ref(projects);
const filterTitle = ref(filterTitleQuery || "");
const filterTags = ref(extractTagsFilterFromQuery());
const filterTagsOpened = ref(false);

const filterProjects = function () {
  projectsFiltered.value = projects
      .filter(v => v.title.toLowerCase().includes(filterTitle.value.toLowerCase()))
      .filter(v => filterTags.value.every(tag => v.tags.includes(tag)));
}
filterProjects();

watch([filterTitle, filterTags], function () {
  router.replace({query: {filterTitle: filterTitle.value, filterTags: filterTags.value}});
  filterProjects()
});
</script>

<template>
  <Editor>
    <EditorLine :indentation="0" />
    <EditorLine :indentation="0">
      <header class="page-header">
        <h2>Projects</h2><span>{{ projects.length }}</span>
      </header>
    </EditorLine>

    <EditorLine :indentation="1">
      <p>Here you can find some of the projects that I have either created myself or in collaboration with other students.</p>
    </EditorLine>

    <EditorLine :indentation="1" />
    <EditorLine :indentation="1">
      <div class="filters-wrapper">
        <p>Filter projects</p>
        <div class="filters">
          <div class="title-filter-wrapper">
            <label for="title-filter">Title</label>
            <input
              id="title-filter"
              v-model="filterTitle"
              type="text"
            >
          </div>

          <div
            class="tags-filter-wrapper"
            @click="filterTagsOpened = !filterTagsOpened"
          >
            <label>Tags</label>
            <div class="tags-filter-expand-button-wrapper">
              <box-icon
                name="chevron-down"
                color="#ffffffde"
                :class="[filterTagsOpened ? 'opened': 'closed']"
              />
            </div>

            <div class="selected-tags">
              <TechPillConfigured
                v-for="tag in filterTags"
                :key="tag"
                :type="tag"
              />
            </div>

            <div
              class="tags-filter-options-wrapper"
              :class="[filterTagsOpened ? 'filter-tags-opened' : 'filter-tags-closed']"
              @click="$event.stopPropagation()"
            >
              <header class="tags-filter-header">
                <p>Tags filter</p>
                <box-icon
                  name="x"
                  color="#ffffffde"
                  @click="filterTagsOpened = false"
                />
              </header>
              <TagsFilter
                :initial-tags="filterTags"
                @tags-filter-changed="v => filterTags = v"
              />
            </div>
          </div>
        </div>
      </div>
    </EditorLine>
    <EditorLine :indentation="1" />

    <EditorLine :indentation="2">
      <div class="projects-container">
        <ProjectCard
          v-for="project in projectsFiltered"
          :key="project.title"
          :project="project"
        />
      </div>
    </EditorLine>

    <EditorLine :indentation="2" />
    <EditorLine :indentation="1" />
    <EditorLine :indentation="0" />
    <EditorLine :indentation="0" />
  </Editor>
</template>

<style scoped>
.page-header {
  display: flex;
  gap: 2rem;
}
.page-header>h2 {
  font-size: x-large;
}
.page-header>span {
  opacity: 0.7;
  font-size: x-large;
}
.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, max-content));
  justify-items: center;
}
.filters-wrapper {
  display: flex;
  flex-direction: column;
  padding: 0.3rem;
  gap: 0.5rem;
  background-color: var(--bg-color-600);
  border-radius: 0.5rem;
}
.filters {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, auto));
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
  background-color: var(--bg-color-600);
  user-select: none;
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
/*noinspection CssUnusedSymbol*/
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
  background-color: var(--bg-color-800);
  border-radius: 0.5rem;
  border: 1px solid #bbb;
  width: 15rem;
  height: 15rem;
  overflow-y: hidden;
  top: 100%;
  left: 0;
}
/*noinspection CssUnusedSymbol*/
.filter-tags-closed {
  display: none;
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
@media screen and (max-width: 600px) {
  .filters {
    display: flex;
    flex-direction: column;
  }
}
</style>