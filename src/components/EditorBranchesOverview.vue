<script setup lang="ts">
defineProps<{ currentBranch: string }>()
const productionUrl = import.meta.env.VITE_PORTFOLIO_PRODUCTION_DEPLOYMENT_URL;
const developmentUrl = import.meta.env.VITE_PORTFOLIO_DEVELOPMENT_DEPLOYMENT_URL;
</script>

<template>
  <div class="branches-overview">
    <h2>Branches</h2>
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
h2 {
  font-size: larger;
  opacity: 0.8;
  margin-bottom: 0.5rem;
  color: var(--font-color-200);
}
.branches-overview {
  padding: 0.5rem;
  background-color: var(--bg-color-600);
  border: 1px solid var(--secondary-color);
  box-shadow: 0 0 1rem #0005;
  border-radius: 5px;
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
