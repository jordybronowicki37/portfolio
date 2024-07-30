<script setup lang="ts">
import {projectCardsData} from "../data/ProjectCardsData.ts";
import {
  ALL_BACKEND_TYPES,
  ALL_DEPLOYMENT_TYPES,
  ALL_FRONTEND_TYPES, ALL_INTEGRATION_TYPES,
  ALL_PERSISTENCE_TYPES, ALL_PROJECT_STATUSES,
  ALL_PROJECT_TYPES, ALL_PROJECT_VISIBILITY
} from "../data/TechPillConfiguredData.ts";
import {PillDataType, ProjectCardProps} from "../data/Models";
import TechPillConfigured from "./TechPillConfigured.vue";
import {watch, ref} from "vue";

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
const flattenedTags = allProjects.flatMap(v => v.tags);
const mappedTagOccurrences = flattenedTags.reduce((obj, tag) => {
  if (obj[tag]) obj[tag].amount += 1;
  else obj[tag] = { amount: 1, tag }
  return obj;
}, {} as TagOccurrenceObj);
const openSourceProjects = allProjects.reduce((v, p) => p.externalLinks.find(l => l.includes("github")) ? v+1 : v, 0);
const closedSourceProjects = allProjects.reduce((v, p) => p.externalLinks.find(l => l.includes("github")) ? v : v+1, 0);
mappedTagOccurrences["open source"] = {tag: "open source", amount: openSourceProjects}
mappedTagOccurrences["closed source"] = {tag: "closed source", amount: closedSourceProjects}

function SortOccurrences(occurrences: TagOccurrence[]): TagOccurrence[] {
  return occurrences.sort((a, b) => {
    const difference = b.amount - a.amount;
    if (difference !== 0) return difference;
    return (a.tag > b.tag) ? 1 : ((b.tag > a.tag) ? -1 : 0);
  });
}

function SortAndCountTypeOccurences(types: PillDataType[]) {
  return SortOccurrences(Object.values(mappedTagOccurrences).filter(v => types.map(t => t.type).includes(v.tag)));
}

const backendOccurrences = SortAndCountTypeOccurences(ALL_BACKEND_TYPES);
const deploymentOccurrences = SortAndCountTypeOccurences(ALL_DEPLOYMENT_TYPES);
const frontendOccurrences = SortAndCountTypeOccurences(ALL_FRONTEND_TYPES);
const persistenceOccurrences = SortAndCountTypeOccurences(ALL_PERSISTENCE_TYPES);
const projectStatusOccurrences = SortAndCountTypeOccurences(ALL_PROJECT_STATUSES);
const projectTypeOccurrences = SortAndCountTypeOccurences(ALL_PROJECT_TYPES);
const projectVisibilityOccurrences = SortAndCountTypeOccurences(ALL_PROJECT_VISIBILITY);
const integrationOccurrences = SortAndCountTypeOccurences(ALL_INTEGRATION_TYPES);
const tagOccurrenceGroups: TagOccurrenceGroup[] = [
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
];

const filterTags = ref<string[]>(initialTags);

watch(filterTags, () => {
  emit("tagsFilterChanged", filterTags.value);
});
</script>

<template>
  <div class="tags-filter-options">
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
          <TechPillConfigured :type="tagOccurrence.tag" />
        </label>
        <span>{{ tagOccurrence.amount }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  user-select: none;
}
.tech-occurrence {
  display: flex;
  align-items: center;
}
.tech-occurrence label {
  flex-grow: 1;
  user-select: none;
}
.tech-occurrence span {
  opacity: 0.6;
  user-select: none;
}
</style>