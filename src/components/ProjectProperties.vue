<script setup lang="ts">
import TechPillConfigured from "./TechPillConfigured.vue";
import TechPillLink from "./TechPillLink.vue";
import TechPillSimple from "./TechPillSimple.vue";
import {ProjectCardProps} from "../data/Models";

defineProps<ProjectCardProps>();
</script>

<template>
  <div class="project-properties">
    <div class="property-group">
      <p>Languages</p>
      <div class="tag-list-wrapper">
        <TechPillConfigured
          v-for="language in tags.languages"
          :key="language"
          :type="language"
        />
      </div>
    </div>

    <div
      v-if="tags.frameworks"
      class="property-group"
    >
      <p>Frameworks</p>
      <div class="tag-list-wrapper">
        <TechPillConfigured
          v-for="framework in tags.frameworks"
          :key="framework"
          :type="framework"
        />
      </div>
    </div>

    <div
      v-if="tags.integrations"
      class="property-group"
    >
      <p>Integrations</p>
      <div class="tag-list-wrapper">
        <TechPillConfigured
          v-for="integration in tags.integrations"
          :key="integration"
          :type="integration"
        />
      </div>
    </div>

    <div
      v-if="tags.database"
      class="property-group"
    >
      <p>Database</p>
      <div class="tag-list-wrapper">
        <TechPillConfigured :type="tags.database" />
      </div>
    </div>

    <div
      v-if="tags.deployment"
      class="property-group"
    >
      <p>Deployment</p>
      <div class="tag-list-wrapper">
        <TechPillConfigured :type="tags.deployment" />
      </div>
    </div>

    <div class="property-group">
      <p>Type</p>
      <div class="tag-list-wrapper">
        <TechPillConfigured :type="tags.type" />
      </div>
    </div>

    <div
      v-if="tags.grade"
      class="property-group"
    >
      <p>Grade</p>
      <div class="tag-list-wrapper">
        <TechPillSimple color="#555">
          <p class="grade-text">
            {{ tags.grade }}
          </p>
        </TechPillSimple>
      </div>
    </div>

    <div
      v-if="tags.groupSize"
      class="property-group"
    >
      <p>Group size</p>
      <div class="tag-list-wrapper">
        <TechPillSimple color="#555">
          <p class="group-size-text">
            {{ tags.groupSize }}
          </p>
        </TechPillSimple>
      </div>
    </div>

    <div class="property-group">
      <p>Status</p>
      <div class="tag-list-wrapper">
        <TechPillConfigured :type="tags.status" />
      </div>
    </div>

    <div
      v-if="externalLinks && externalLinks.length"
      class="property-group"
    >
      <p>Links</p>
      <div class="tag-list-wrapper">
        <TechPillLink
          v-for="link in externalLinks"
          :key="link"
          :link="link"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-properties {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  p {
    font-weight: bold;
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
}
</style>
