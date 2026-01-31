<script setup lang="ts">
import TechPillConfigured from "./TechPillConfigured.vue";
import TechPillLink from "./TechPillLink.vue";
import TechPillSimple from "./TechPillSimple.vue";
import {ProjectCardProps} from "../data/Models";

defineProps<ProjectCardProps>();
</script>

<template>
  <div class="project-properties">
    <p>Languages:</p>
    <div class="tag-list-wrapper">
      <TechPillConfigured
        v-for="language in tags.languages"
        :key="language"
        :type="language"
      />
    </div>

    <p v-if="tags.frameworks">
      Frameworks:
    </p>
    <div
      v-if="tags.frameworks"
      class="tag-list-wrapper"
    >
      <TechPillConfigured
        v-for="framework in tags.frameworks"
        :key="framework"
        :type="framework"
      />
    </div>

    <p v-if="tags.integrations">
      Integrations:
    </p>
    <div
      v-if="tags.integrations"
      class="tag-list-wrapper"
    >
      <TechPillConfigured
        v-for="integration in tags.integrations"
        :key="integration"
        :type="integration"
      />
    </div>

    <p v-if="tags.database">
      Database:
    </p>
    <div
      v-if="tags.database"
      class="tag-list-wrapper"
    >
      <TechPillConfigured :type="tags.database" />
    </div>

    <p v-if="tags.deployment">
      Deployment:
    </p>
    <div
      v-if="tags.deployment"
      class="tag-list-wrapper"
    >
      <TechPillConfigured :type="tags.deployment" />
    </div>

    <p>Type:</p>
    <div class="tag-list-wrapper">
      <TechPillConfigured :type="tags.type" />
    </div>

    <p v-if="tags.grade">
      Grade:
    </p>
    <div
      v-if="tags.grade"
      class="tag-list-wrapper"
    >
      <TechPillSimple color="#555">
        <p class="grade-text">
          {{ tags.grade }}
        </p>
      </TechPillSimple>
    </div>

    <p v-if="tags.groupSize">
      Group size:
    </p>
    <div
      v-if="tags.groupSize"
      class="tag-list-wrapper"
    >
      <TechPillSimple color="#555">
        <p class="group-size-text">
          {{ tags.groupSize }}
        </p>
      </TechPillSimple>
    </div>

    <p>Status:</p>
    <div class="tag-list-wrapper">
      <TechPillConfigured :type="tags.status" />
    </div>

    <p v-if="externalLinks && externalLinks.length">
      Links:
    </p>
    <div
      v-if="externalLinks && externalLinks.length"
      class="tag-list-wrapper"
    >
      <TechPillLink
        v-for="link in externalLinks"
        :key="link"
        :link="link"
      />
    </div>
  </div>
</template>

<style scoped>
.project-properties {
  display: grid;
  grid-template-columns: auto auto;
  gap: 0.3rem 0.5rem;
}
.tag-list-wrapper {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.3rem;
}
.grade-text, .group-size-text {
  color: var(--font-color-200);
  padding: 2px 0.5rem;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 10px;
  white-space: nowrap;
  user-select: none;
}
</style>
