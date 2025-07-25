<script setup lang="ts">
defineProps<{ currentBranch: string }>()
const productionUrl = import.meta.env.VITE_PORTFOLIO_PRODUCTION_DEPLOYMENT_URL;
const developmentUrl = import.meta.env.VITE_PORTFOLIO_DEVELOPMENT_DEPLOYMENT_URL;
</script>

<template>
  <div class="branches-overview">
    <p>Branches</p>
    <ul>
      <li>
        <a :href="productionUrl">
          <box-icon
            name="git-branch"
            size="1em"
            color="var(--font-color-200)"
          />
          master
        </a>
      </li>
      <li>
        <a :href="developmentUrl">
          <box-icon
            name="git-branch"
            size="1em"
            color="var(--font-color-200)"
          />
          staging
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.branches-overview {
  background-color: var(--bg-color-600);
  padding: 0.5rem;
  border: 1px solid var(--secondary-color);
}
p {
  margin-bottom: 0.4rem;
  font-size: large;
  font-weight: bold;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  padding: 0 0.5rem;
}
li:hover {
  background-color: var(--bg-color-500);
}
a {
  display: flex;
  text-decoration: none;
}
</style>