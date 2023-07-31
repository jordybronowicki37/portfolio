<script setup lang="ts">
import MainTitle from "./MainTitle.vue";
</script>

<template>
  <header>
    <div class="title">
      <MainTitle/>
    </div>

    <div class="navigation">
      <nav class="github">
        <a href="https://github.com/jordybronowicki37/portfolio" target="_blank">GitHub<box-icon name='link-external' color="#ffffffde" size="xs"/></a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: #303030;
}

.navigation {
  display: flex;
  align-items: center;
}

.navigation a {
  padding: 1rem 1rem;
  color: inherit;
}

.navigation .router-link-active {
  color: #ea6d30;
}

.navigation a:hover {
  color: #ea6d3099;
}
</style>