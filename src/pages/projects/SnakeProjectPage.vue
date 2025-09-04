<script setup lang="ts">
import ImageTextCombinedView from "../../components/ImageTextCombinedView.vue";
import ProjectProperties from "../../components/ProjectProperties.vue";
import TextDocBlock from "../../components/TextDocBlock.vue";
import EditorProject from "./EditorProject.vue";
import EditorLine from "../../components/EditorLine.vue";

const deploymentURL = import.meta.env.VITE_SNAKE_DEPLOYMENT_URL;
const githubURL = import.meta.env.VITE_SNAKE_GITHUB_URL;
</script>

<template>
  <EditorProject>
    <EditorLine :indentation="0" />
    <EditorLine :indentation="0" />
    <EditorLine :indentation="1">
      <h1># Project: Snake Game</h1>
    </EditorLine>

    <EditorLine :indentation="2" />
    <EditorLine :indentation="2">
      <TextDocBlock
        text="
          With this personal project I wanted to learn web development with the Vue framework. I wanted to see if it
          would be possible to recreate the game Snake and give my own twist to it. I did not have munch confidence in
          the performance of Vue and thought that I might have to mutate the dom manually for the game to be performant.
          But I was quite surprised at how well Vue performs and detects changes within deeply nested objects. Creating
          this game with Vue was actually pretty easy and much fun. I intend to work on the game and extend it's
          features whenever I get some free time.
          "
      />
    </EditorLine>

    <section>
      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <h2 class="text-only-section">## Play the famous game of snake</h2>
      </EditorLine>
      <EditorLine :indentation="2">
        <p class="text-only-section">
          Dive into the thrilling world of my Snake Game, a project that offers not just one, but two exciting
          game modes: Single Player and Versus Mode.
        </p>
      </EditorLine>
    </section>

    <section>
      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <ImageTextCombinedView
          image-on-the-left
          image-title="Snake single player mode preview"
          image-description="A preview of the single player mode"
        >
          <template #text>
            <div>
              <h2>## Single player mode</h2>
              <p>
                In Single Player mode, challenge yourself through a selection of diverse levels, each presenting
                unique hurdles and escalating difficulty. Conquer independent challenges in every level and aim
                to beat highscores. With each level, face new obstacles, test your reflexes, and strategize your
                moves to outsmart the game.
              </p>
            </div>
          </template>
          <template #image>
            <img
              src="/img/projects/snake-game.png"
              alt="Snake single player mode preview"
              class="project-image"
            >
          </template>
        </ImageTextCombinedView>
      </EditorLine>
    </section>

    <section>
      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <ImageTextCombinedView
          image-title="Snake levels preview"
          image-description="An overview of all the levels that can be played."
        >
          <template #text>
            <div>
              <h2>## Choose out of a bunch of different levels</h2>
              <p>
                Conquer a variety of levels in Single Player mode, each with its unique challenges and
                high-scores to beat. Test your skills and adapt your strategies to overcome diverse obstacles.
              </p>
            </div>
          </template>
          <template #image>
            <img
              src="/img/projects/snake-levels.png"
              alt="Snake levels preview"
              class="project-image"
            >
          </template>
        </ImageTextCombinedView>
      </EditorLine>
    </section>

    <section>
      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <ImageTextCombinedView
          image-on-the-left
          image-title="Snake game versus mode preview"
          image-description="A preview of the versus mode."
        >
          <template #text>
            <div>
              <h2>## Versus mode</h2>
              <p>
                Experience the ultimate showdown in Versus Mode, where two players compete head-to-head.
                Your goal? Gather as much fruit as you can to grow your snake and eliminate your opponent.
                It's a battle of wits and speed as you maneuver through the game grid, avoiding collisions
                and strategically collecting fruit to gain an advantage. The player with the longest snake
                and the most points emerges victorious.
              </p>
            </div>
          </template>
          <template #image>
            <img
              src="/img/projects/snake-game-versus.png"
              alt="Snake game versus mode preview"
              class="project-image"
            >
          </template>
        </ImageTextCombinedView>
      </EditorLine>
    </section>

    <EditorLine :indentation="2" />
    <EditorLine :indentation="1" />
    <EditorLine :indentation="0" />
    <EditorLine :indentation="0" />

    <template #info>
      <ProjectProperties
        :languages="['typescript', 'html', 'css']"
        :frameworks="['vue']"
        deployment="render"
        type="personal"
        status="in progress"
        :links="[
          githubURL,
          deploymentURL
        ]"
      />
    </template>
  </EditorProject>
</template>

<style scoped>

</style>
