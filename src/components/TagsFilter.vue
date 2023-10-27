<script setup lang="ts">
import projects from "./ProjectCardsData.json";
import {
  ALL_BACKEND_TYPES,
  ALL_DEPLOYMENT_TYPES,
  ALL_FRONTEND_TYPES,
  ALL_PERSISTENCE_TYPES,
  ALL_PROJECT_TYPES
} from "./TechPillConfiguredData";
import {ProjectCardProps} from "./ProjectCard.vue";
import TechPillConfigured from "./TechPillConfigured.vue";
import {watch, ref} from "vue";

const emit = defineEmits<{
  (e: 'tagsFilterChanged', value: string[]): void
}>();

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
];

const filterTags = ref<string[]>([]);

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
ue
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