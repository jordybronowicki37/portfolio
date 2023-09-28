<script setup lang="ts">
import Editor from "../components/Editor.vue";
import EditorLine from "../components/EditorLine.vue";
import TechPillContainer from "../components/TechPillContainer.vue";
</script>

<template>
  <Editor>
    <EditorLine :indentation="0"/>
    <EditorLine :indentation="0">
      <h1>My Projects</h1>
    </EditorLine>
    <EditorLine :indentation="1">
      <p>Projects intro</p>
    </EditorLine>
    <EditorLine :indentation="1"/>
    <EditorLine :indentation="2"/>

    <EditorLine :indentation="2">
      <div class="projects-container">
        <!--Production Calculator-->
        <section class="project-card">
          <div>
            <h2>Production Calculator</h2>
            <img class="screenshot" src="/prod-cal-editor.png" alt="Production calculator editor preview">
          </div>
          <TechPillContainer
              :types="['.net', 'c#', 'mongodb', 'react', 'sass', 'typescript', 'personal']"
              link="https://github.com/jordybronowicki37/production-calculator"
              background-color="transparent"/>
          <p class="card-text-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae dolor eveniet hic laudantium maxime
            nemo recusandae velit voluptas. Et exercitationem nesciunt nihil sed unde. Amet corporis dolore dolorum in
            labore maiores maxime minima nemo nulla officia optio pariatur possimus quia, quisquam ratione sint totam.
            Ea magni perspiciatis recusandae veniam.
          </p>
          <router-link class="learn-more-nav" to="/projects/prodcal">Learn more</router-link>
        </section>

        <!--Vue Snake-->
        <section class="project-card">
          <div>
            <h2>Snake Game</h2>
            <img class="screenshot" src="/snake-game.png" alt="Production calculator editor screenshot">
          </div>
          <TechPillContainer
              link="https://github.com/jordybronowicki37/vue-snake"
              :types="['vue', 'typescript', 'personal']"
              background-color="transparent"/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae dolor eveniet hic laudantium maxime
            nemo recusandae velit voluptas. Et exercitationem nesciunt nihil sed unde. Amet corporis dolore dolorum in
            labore maiores maxime minima nemo nulla officia
          </p>
          <router-link class="learn-more-nav" to="/projects/snake">Learn more</router-link>
        </section>

        <!--Portfolio-->
        <section class="project-card">
          <div>
            <h2>Portfolio</h2>
            <img class="screenshot" src="/portfolio-home.png" alt="Portfolio home page screenshot">
          </div>
          <TechPillContainer
              link="https://github.com/jordybronowicki37/portfolio"
              :types="['vue', 'typescript', 'personal']"
              background-color="transparent"/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae dolor eveniet hic laudantium maxime
            nemo recusandae velit voluptas.
          </p>
        </section>

        <!--Neerslag radar-->
        <section class="project-card">
          <div>
            <h2>Neerslag radar</h2>
            <img class="screenshot" src="/neerslag-radar-basic-views.png" alt="Production calculator editor preview">
          </div>
          <TechPillContainer :types="['.net', 'c#', 'angular', 'typescript', 'school/external']" background-color="transparent"/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae dolor eveniet hic laudantium maxime
            nemo recusandae velit voluptas. Et exercitationem nesciunt nihil sed unde. Amet corporis dolore dolorum in
            labore maiores maxime minima nemo nulla officia optio pariatur possimus quia, quisquam ratione sint totam.
            Ea magni perspiciatis recusandae veniam.
          </p>
        </section>
      </div>
    </EditorLine>

    <EditorLine :indentation="2"/>
    <EditorLine :indentation="1"/>
    <EditorLine :indentation="0"/>
  </Editor>
</template>

<style scoped>
.projects-container {
  display: flex;
  flex-wrap: wrap;
}
.project-card {
  width: 20rem;
  margin: 1rem;
  background-color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  border-radius: 0.5rem;
}
.project-card h2 {
  text-align: center;
  font-size: 24px;
  color: #ddd;
}
.project-card p {
  flex-grow: 1;
  padding: 0.5rem;
}
.screenshot {
  height: 10rem;
  width: 20rem;
}
.learn-more-nav {
  margin: 0.5rem;
  padding: 0.2rem 1rem;
  text-align: center;
  color: #bbb;
  text-decoration: none;
  border: 1px solid #bbb;
  border-radius: 1rem;
}
.learn-more-nav:hover {
  background-color: #bbb;
  color: #333;
}
</style>