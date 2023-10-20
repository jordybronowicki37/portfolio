<script setup lang="ts">
import Editor from "../components/Editor.vue";
import EditorLine from "../components/EditorLine.vue";
import TechPillContainer from "../components/TechPillContainer.vue";
</script>

<template>
  <Editor>
    <EditorLine :indentation="0" />
    <EditorLine :indentation="0">
      <h1>My Projects</h1>
    </EditorLine>
    <EditorLine :indentation="1">
      <p>Projects intro</p>
    </EditorLine>
    <EditorLine :indentation="1" />
    <EditorLine :indentation="2" />

    <EditorLine :indentation="2">
      <div class="projects-container">
        <!--Production Calculator-->
        <section class="project-card">
          <div>
            <h2>Production Calculator</h2>
            <img
              class="screenshot"
              src="/prod-cal-editor.png"
              alt="Production calculator editor preview"
            >
          </div>
          <TechPillContainer
            :types="['.net', 'c#', 'mongodb', 'react', 'typescript', 'sass', 'personal']"
            link="https://github.com/jordybronowicki37/production-calculator"
            background-color="transparent"
          />
          <p class="card-text-content">
            The production calculator allows you to easily create new production chains or map out existing factories.
            Calculate product throughput, identify efficiency problems and compare recipe efficiency.
          </p>
          <router-link
            class="learn-more-nav"
            to="/projects/production-calculator"
          >
            Learn more
          </router-link>
        </section>

        <!--Vue Snake-->
        <section class="project-card">
          <div>
            <h2>Snake Game</h2>
            <img
              class="screenshot"
              src="/snake-game.png"
              alt="Production calculator editor screenshot"
            >
          </div>
          <TechPillContainer
            link="https://github.com/jordybronowicki37/vue-snake"
            :types="['vue', 'typescript', 'personal']"
            background-color="transparent"
          />
          <p>
            Play a more exciting version of the classic game of snake. Complete with a collection of exciting levels,
            single-player challenges, strategic power-ups, custom skins and two fun multiplayer game-modes.
          </p>
          <router-link
            class="learn-more-nav"
            to="/projects/snake-game"
          >
            Learn more
          </router-link>
        </section>

        <!--Portfolio-->
        <section class="project-card">
          <div>
            <h2>Portfolio</h2>
            <img
              class="screenshot"
              src="/portfolio-home.png"
              alt="Portfolio home page screenshot"
            >
          </div>
          <TechPillContainer
            link="https://github.com/jordybronowicki37/portfolio"
            :types="['vue', 'typescript', 'personal']"
            background-color="transparent"
          />
          <p>
            This is the project that you are looking at right now, my portfolio website. It previews and explains all
            of my current projects in a code editor inspired website.
          </p>
          <router-link
            class="learn-more-nav"
            to="/projects/portfolio"
          >
            Learn more
          </router-link>
        </section>

        <!--Task manager-->
        <section class="project-card">
          <div>
            <h2>Task manager</h2>
            <img
              class="screenshot"
              src="/tas-board.png"
              alt="Task manager board preview"
            >
          </div>
          <TechPillContainer
            :types="['java', 'spring', 'postgresql', 'aws', 'react', 'typescript', 'sass', 'school']"
            background-color="transparent"
          />
          <p>
            With TAS you can manage your tasks efficiently. This school project is inspired by the popular issue
            management tool Trello and was created to learn microservices cloud deployment with AWS.
          </p>
          <router-link
            class="learn-more-nav"
            to="/projects/task-manager"
          >
            Learn more
          </router-link>
        </section>

        <!--Neerslag radar-->
        <section class="project-card">
          <div>
            <h2>Neerslag radar</h2>
            <img
              class="screenshot"
              src="/neerslag-radar-basic-views.png"
              alt="Production calculator editor preview"
            >
          </div>
          <TechPillContainer
            :types="['.net', 'c#', 'angular', 'typescript', 'school/external']"
            background-color="transparent"
          />
          <p>
            This project was part of a collaboration between a student group and an external client. We were tasked to
            develop an application that contained interactive weather animations. Raw weather data would be processed and
            plot onto a map or graph with which you can interact to compare weather patterns.
          </p>
          <router-link
            class="learn-more-nav"
            to="/projects/neerslag-radar"
          >
            Learn more
          </router-link>
        </section>
      </div>
    </EditorLine>

    <EditorLine :indentation="2" />
    <EditorLine :indentation="1" />
    <EditorLine :indentation="0" />
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