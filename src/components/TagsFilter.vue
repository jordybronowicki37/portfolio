<script setup lang="ts">
import {
  ALL_BACKEND_TYPES,
  ALL_DEPLOYMENT_TYPES,
  ALL_FRONTEND_TYPES,
  ALL_INTEGRATION_TYPES,
  ALL_PERSISTENCE_TYPES,
  ALL_PROJECT_STATUSES,
  ALL_PROJECT_TYPES,
  ALL_PROJECT_VISIBILITY
} from "../data/TechPillConfiguredData.ts";
import {PillDataType, ProjectCardProps} from "../data/Models";
import TechPillConfigured from "./TechPillConfigured.vue";
import {computed, ref, watch} from "vue";
import {store} from "../data/Store.ts";
import {projectCardsData} from "../data/ProjectCardsData.ts";

const emit = defineEmits<{
  (e: 'tagsFilterChanged', value: string[]): void
}>();

const {initialTags} = defineProps<{initialTags: string[]}>()

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

const allProjects = projectCardsData as ProjectCardProps[];

const tagOccurrenceGroups = computed(() => {
  const filteredProjects = store.projectsFiltered;
  const mappedTags = allProjects.flatMap(v => v.tags.summary).reduce((obj, tag) => {
    if (!obj[tag]) obj[tag] = { amount: 0, tag }
    return obj;
  }, {} as TagOccurrenceObj);
  const mappedTagOccurrences = filteredProjects.flatMap(v => v.tags.summary).reduce((obj, tag) => {
    if (obj[tag]) obj[tag].amount += 1;
    else obj[tag] = { amount: 1, tag }
    return obj;
  }, mappedTags);
  const openSourceProjects = filteredProjects.reduce((v, p) => p.externalLinks.find(l => l.includes("github")) ? v+1 : v, 0);
  const closedSourceProjects = filteredProjects.reduce((v, p) => p.externalLinks.find(l => l.includes("github")) ? v : v+1, 0);
  mappedTagOccurrences["open source"] = {tag: "open source", amount: openSourceProjects}
  mappedTagOccurrences["closed source"] = {tag: "closed source", amount: closedSourceProjects}

  function SortAndCountTypeOccurrences(types: PillDataType[]) {
    return SortOccurrences(Object.values(mappedTagOccurrences).filter(v => types.map(t => t.type).includes(v.tag)));
  }

  function SortOccurrences(occurrences: TagOccurrence[]): TagOccurrence[] {
    return occurrences.sort((a, b) => {
      const difference = b.amount - a.amount;
      if (difference !== 0) return difference;
      return (a.tag > b.tag) ? 1 : -1;
    });
  }

  const backendOccurrences = SortAndCountTypeOccurrences(ALL_BACKEND_TYPES);
  const deploymentOccurrences = SortAndCountTypeOccurrences(ALL_DEPLOYMENT_TYPES);
  const frontendOccurrences = SortAndCountTypeOccurrences(ALL_FRONTEND_TYPES);
  const persistenceOccurrences = SortAndCountTypeOccurrences(ALL_PERSISTENCE_TYPES);
  const projectStatusOccurrences = SortAndCountTypeOccurrences(ALL_PROJECT_STATUSES);
  const projectTypeOccurrences = SortAndCountTypeOccurrences(ALL_PROJECT_TYPES);
  const projectVisibilityOccurrences = SortAndCountTypeOccurrences(ALL_PROJECT_VISIBILITY);
  const integrationOccurrences = SortAndCountTypeOccurrences(ALL_INTEGRATION_TYPES);
  return [
    {
      title: "Project type",
      tags: projectTypeOccurrences
    },
    {
      title: "Project completion status",
      tags: projectStatusOccurrences
    },
    {
      title: "Project visibility",
      tags: projectVisibilityOccurrences
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
    },
    {
      title: "Integration",
      tags: integrationOccurrences
    }
  ] as TagOccurrenceGroup[];
})

const filterTags = ref<string[]>(initialTags);

watch(filterTags, () => {
  emit("tagsFilterChanged", filterTags.value);
});
</script>

<template>
  <div class="tags-filter">
    <div
      v-for="tagGroup in tagOccurrenceGroups"
      :key="tagGroup.title"
      class="tag-filter-group"
    >
      <p class="tag-group-title">
        {{ tagGroup.title }}
      </p>
      <div
        v-for="tagOccurrence in tagGroup.tags"
        :key="tagOccurrence.tag"
        class="tech-occurrence"
      >
        <input
          :id="tagOccurrence.tag"
          v-model="filterTags"
          type="checkbox"
          :value="tagOccurrence.tag"
        >
        <label :for="tagOccurrence.tag">
          <TechPillConfigured
            :type="tagOccurrence.tag"
            decoration-only
          />
        </label>
        <span>{{ tagOccurrence.amount }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tags-filter {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: auto;
  padding: 4px 8px;
  .tag-group-title {
    font-size: 12px;
    user-select: none;
  }
  .tech-occurrence {
    display: flex;
    align-items: center;
    label {
      flex-grow: 1;
      cursor: pointer;
    }
    input {
      cursor: pointer;
    }
    span {
      opacity: 0.6;
    }
  }
}
</style>
