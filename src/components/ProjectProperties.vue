<script setup lang="ts">
import TechPillConfigured from "./TechPillConfigured.vue";
import TechPillLink from "./TechPillLink.vue";
import TechPillSimple from "./TechPillSimple.vue";

defineProps<{
  languages: string[],
  frameworks?: string[],
  integrations?: string[],
  database?: string,
  deployment?: string,
  type: string,
  groupSize?: number,
  grade?: number,
  status: string,
  links?: string[],
}>();
</script>

<template>
  <div class="project-properties">
    <p>Languages:</p>
    <div class="tag-list-wrapper">
      <TechPillConfigured
        v-for="language in languages"
        :key="language"
        :type="language"
      />
    </div>

    <p v-if="frameworks">
      Frameworks:
    </p>
    <div
      v-if="frameworks"
      class="tag-list-wrapper"
    >
      <TechPillConfigured
        v-for="framework in frameworks"
        :key="framework"
        :type="framework"
      />
    </div>

    <p v-if="integrations">
      Integrations:
    </p>
    <div
      v-if="integrations"
      class="tag-list-wrapper"
    >
      <TechPillConfigured
        v-for="integration in integrations"
        :key="integration"
        :type="integration"
      />
    </div>

    <p v-if="database">
      Database:
    </p>
    <div
      v-if="database"
      class="tag-list-wrapper"
    >
      <TechPillConfigured :type="database" />
    </div>

    <p v-if="deployment">
      Deployment:
    </p>
    <div
      v-if="deployment"
      class="tag-list-wrapper"
    >
      <TechPillConfigured :type="deployment" />
    </div>

    <p>Type:</p>
    <div class="tag-list-wrapper">
      <TechPillConfigured :type="type" />
    </div>

    <p v-if="grade">
      Grade:
    </p>
    <div
      v-if="grade"
      class="tag-list-wrapper"
    >
      <TechPillSimple color="#555">
        <p class="grade-text">
          {{ grade }}
        </p>
      </TechPillSimple>
    </div>

    <p v-if="groupSize">
      Group size:
    </p>
    <div
      v-if="groupSize"
      class="tag-list-wrapper"
    >
      <TechPillSimple color="#555">
        <p class="group-size-text">
          {{ groupSize }}
        </p>
      </TechPillSimple>
    </div>

    <p>Status:</p>
    <div class="tag-list-wrapper">
      <TechPillConfigured :type="status" />
    </div>

    <p v-if="links && links.length">
      Links:
    </p>
    <div
      v-if="links && links.length"
      class="tag-list-wrapper"
    >
      <TechPillLink
        v-for="link in links"
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
  background-color: var(--bg-color-600);
  border-radius: 0.5rem;
  padding: 0.5rem;
}
.tag-list-wrapper {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.3rem;
}
.grade-text, .group-size-text {
  color: var(--font-color-200);
  margin: 0 0.5rem;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 10px;
  white-space: nowrap;
  user-select: none;
}
</style>