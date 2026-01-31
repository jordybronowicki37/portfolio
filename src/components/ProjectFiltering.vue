<script setup lang="ts">
import TechPillConfigured from "./TechPillConfigured.vue";
import {store} from "../data/Store.ts";
import {useRoute, useRouter} from "vue-router";
import {ref, watch} from "vue";
import {ProjectCardProps} from "../data/Models";
import {projectCardsData} from "../data/ProjectCardsData.ts";
import TagsFilter from "./TagsFilter.vue";

const router = useRouter();
const route = useRoute();
const filterTextQuery = route.query.filterText as string | undefined;
const filterTagsQuery = route.query.filterTags as string | string[] | undefined;
const sortTypeQuery = route.query.sortType as string | undefined;
const sortDirectionQuery = route.query.sortDirection as string | undefined;

function extractTagsFilterFromQuery(): string[] {
  if (!filterTagsQuery) return [];
  if (typeof filterTagsQuery === "string") return [filterTagsQuery];
  return filterTagsQuery as string[];
}

const projectsFiltered = ref<ProjectCardProps[]>(projectCardsData);
const filterText = ref<string>(filterTextQuery ? filterTextQuery : "");
const filterTags = ref<string[]>(extractTagsFilterFromQuery());
const sortType = ref<string>(sortTypeQuery ? sortTypeQuery : "name");
const sortDirection = ref<string>(sortDirectionQuery ? sortDirectionQuery : "asc");
const filterTagsOpened = ref(false);
const sortTypeOpened = ref(false);

function sortProjects(p1: ProjectCardProps, p2: ProjectCardProps): number {
  let result = 0;
  if (sortType.value === 'created') {
    // TODO implement created sorting
  } else {
    result = p1.title.toLowerCase() > p2.title.toLowerCase() ? 1 : -1;
  }
  if (result === 0) {
    return 0;
  } else if (sortDirection.value === 'desc') {
    return result > 0 ? -1 : 1;
  } else {
    return result > 0 ? 1 : -1;
  }
}

function filterProjects() {
  const techFilterTags = filterTags.value.filter(t => !["open source", "closed source"].includes(t));
  const loweredFilterText = filterText.value.toLowerCase();
  const filteredProjects = projectCardsData
    .filter(v =>
      v.title.toLowerCase().includes(loweredFilterText) ||
      v.description.toLowerCase().includes(loweredFilterText) ||
      v.tags.filter(t => t.toLowerCase().includes(loweredFilterText)).length > 0
    )
    .filter(v => techFilterTags.every(tag => v.tags.includes(tag)))
    .filter(v => !filterTags.value.includes("open source") || v.externalLinks.find(l => l.includes("github")) != undefined)
    .filter(v => !filterTags.value.includes("closed source") || v.externalLinks.find(l => l.includes("github")) == undefined)
    .sort(sortProjects);
  projectsFiltered.value = filteredProjects;
  store.projectsFiltered = filteredProjects;
}

watch([filterText, filterTags, sortType, sortDirection], () => {
  router.replace({
    query: {
      ...route.query,
      filterText: filterText.value !== "" ? filterText.value : undefined,
      filterTags: filterTags.value.length > 0 ? filterTags.value : undefined,
      sortType: sortType.value !== "name" ? sortType.value : undefined,
      sortDirection: sortDirection.value !== "asc" ? sortDirection.value : undefined,
    }
  });
  filterProjects();
}, {immediate: true});
</script>

<template>
  <div id="project-filter">
    <fieldset id="name-filter">
      <legend>Name</legend>
      <input
        id="name-filter-input"
        v-model="filterText"
        type="text"
        placeholder="Filter by Name"
      >
    </fieldset>

    <fieldset
      id="tags-filter"
      @click="() => filterTagsOpened = !filterTagsOpened"
    >
      <legend>Tags</legend>
      <div class="tags-filter-expand-button-wrapper">
        <box-icon
          name="chevron-up"
          color="var(--font-color-200)"
          :class="[filterTagsOpened ? 'opened': 'closed']"
        />
      </div>
      <div class="selected-tags">
        <TechPillConfigured
          v-for="tag in filterTags"
          :key="tag"
          :type="tag"
          decoration-only
        />
      </div>
      <div
        class="filter-options-wrapper"
        :class="filterTagsOpened ? 'options-opened' : 'options-closed'"
        @click="$event.stopPropagation()"
        @mouseleave="filterTagsOpened = false"
      >
        <div class="filter-options">
          <header class="filter-header">
            <p>Tags filter</p>
            <box-icon
              name="x"
              color="var(--font-color-200)"
              @click="filterTagsOpened = false"
            />
          </header>
          <TagsFilter
            :initial-tags="filterTags"
            @tags-filter-changed="v => filterTags = v"
          />
        </div>
      </div>
    </fieldset>

    <fieldset id="sorting-filter">
      <legend>Sorting</legend>
      <div
        class="sorting-type-wrapper"
        @click="() => sortTypeOpened = !sortTypeOpened"
      >
        <div class="sorting-type-name">
          {{ sortType }}
        </div>
        <div class="sorting-type-expand-button-wrapper">
          <box-icon
            name="chevron-up"
            color="var(--font-color-200)"
            :class="[sortTypeOpened ? 'opened': 'closed']"
          />
        </div>
      </div>
      <div
        class="filter-options-wrapper"
        :class="sortTypeOpened ? 'options-opened' : 'options-closed'"
        @click="$event.stopPropagation()"
        @mouseleave="sortTypeOpened = false"
      >
        <div class="filter-options">
          <header class="filter-header">
            <p>Sorting on</p>
            <box-icon
              name="x"
              color="var(--font-color-200)"
              @click="sortTypeOpened = false"
            />
          </header>
          <div class="sorting-filter-options">
            <button
              :class="{ 'active': sortType === 'name' }"
              @click="() => sortType = 'name'"
            >
              Name
            </button>
            <button
              :class="{ 'active': sortType === 'created' }"
              @click="() => sortType = 'created'"
            >
              Created
            </button>
          </div>
        </div>
      </div>
      <button
        class="sorting-direction"
        @click="() => sortDirection = sortDirection === 'asc' ? 'desc' : 'asc'"
      >
        <box-icon
          name="chevrons-up"
          color="var(--font-color-200)"
          :class="[sortDirection === 'desc' ? 'sort-desc': 'sort-asc']"
          :title="sortDirection === 'desc' ? 'Sort descending' : 'Sort ascending'"
        />
      </button>
    </fieldset>
  </div>
</template>

<style>
#tags-filter p.tech-text {
  cursor: pointer !important;
}
</style>

<style scoped>
#project-filter {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
fieldset {
  border: 1px solid var(--secondary-color);
  border-radius: 0.5rem;
  margin: 0;
}
legend {
  font-size: 12px;
  user-select: none;
}
#name-filter {
  display: flex;
  padding-bottom: 4px;
  #name-filter-input {
    flex-grow: 1;
    border: none;
    background: transparent;
    &:focus-within {
      outline: none;
    }
  }
}
#tags-filter {
  position: relative;
  user-select: none;
  cursor: pointer;

  .selected-tags {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    cursor: pointer;
    min-height: 1.2rem;
    gap: 0.3rem;
    padding-right: 20px;
  }
  .tags-filter-expand-button-wrapper {
    position: absolute;
    right: 0.5rem;
    top: 0;
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
    >box-icon {
      transition: all 0.3s;
      &.opened {
        rotate: 180deg;
      }
    }
  }
}
.filter-options-wrapper {
  background-color: var(--bg-color-600);
  border-radius: 0.5rem;
  border: 1px solid var(--secondary-color);
  width: 100%;
  max-height: 30rem;
  overflow-y: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  &.options-closed {
    display: none;
  }
  .filter-options {
    display: flex;
    flex-direction: column;
    max-height: inherit;
    overflow-y: auto;
    cursor: default;
    .filter-header {
      position: relative;
      padding: 8px 8px 4px 8px;
      border-bottom: 1px solid var(--secondary-color);
      >box-icon {
        position: absolute;
        top: 4px;
        right: 4px;
        cursor: pointer;
      }
    }
  }
}
#sorting-filter {
  display: flex;
  position: relative;
  user-select: none;
  .sorting-type-wrapper {
    display: flex;
    align-items: center;
    flex-grow: 1;

    .sorting-type-name {
      flex-grow: 1;
      text-transform: capitalize;
      cursor: pointer;
    }
    .sorting-type-expand-button-wrapper {
      display: flex;
      align-items: center;
      height: 100%;
      cursor: pointer;
      >box-icon {
        transition: all 0.3s;
        &.opened {
          rotate: 180deg;
        }
      }
    }
  }
  .sorting-filter-options {
    display: flex;
    flex-direction: column;
    width: 100%;
    button {
      all: unset;
      padding: 4px 8px;
      cursor: pointer;
      &.active {
        background-color: var(--secondary-color);
      }
      &:hover {
        background: var(--secondary-color);
      }
    }
  }
  .sorting-direction {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    border-radius: 8px;
    background-color: var(--bg-color-500);
    user-select: none;
    cursor: pointer;
    &:hover {
      color: var(--accent-color);
    }
    box-icon {
      transition: all 0.3s;
      &.sort-desc {
        rotate: 180deg;
      }
    }
  }
}
</style>
