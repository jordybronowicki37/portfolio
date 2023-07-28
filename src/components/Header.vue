<script setup lang="ts">
import MainTitle from "./MainTitle.vue";
</script>

<template>
  <header>
    <div class="title">
      <MainTitle/>
    </div>

    <div class="navigation">
      <nav>
        <router-link to="/">Home</router-link>
      </nav>
      <nav>
        <router-link to="/about">About me</router-link>
      </nav>
      <nav>
        <router-link to="/projects">Projects</router-link>
      </nav>
      <nav class="github">
        <a href="https://github.com/jordybronowicki37/portfolio">GitHub<box-icon name='link-external' color="#ffffffde" size="xs"/></a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
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