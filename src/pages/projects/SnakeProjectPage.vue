<script setup lang="ts">
import EditorLine from "../../components/EditorLine.vue";
import Editor from "../../components/Editor.vue";
import ImageTextCombinedView from "../../components/ImageTextCombinedView.vue";
import "./ProjectPage.css";
import ProjectProperties from "../../components/ProjectProperties.vue";

const deploymentURL = import.meta.env.VITE_SNAKE_DEPLOYMENT_URL;
const githubURL = import.meta.env.VITE_SNAKE_GITHUB_URL;
</script>

<template>
  <div class="project-page">
    <Editor>
      <EditorLine :indentation="0" />
      <EditorLine :indentation="0" />
      <EditorLine :indentation="1">
        <h2>Project: Snake Game</h2>
      </EditorLine>
      <EditorLine :indentation="1">
        <div class="tags-wrapper">
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
        </div>
      </EditorLine>

      <section>
        <EditorLine :indentation="2" />
        <EditorLine :indentation="2">
          <h3 class="text-only-section">
            Project intentions
          </h3>
        </EditorLine>
        <EditorLine :indentation="2">
          <p class="text-only-section">
            With this personal project I wanted to learn web development with the Vue framework. I wanted to see if it
            would be possible to recreate the game Snake and give my own twist to it. I did not have munch confidence in
            the performance of Vue and thought that I might have to mutate the dom manually for the game to be performant.
            But I was quite surprised at how well Vue performs and detects changes within deeply nested objects. Creating
            this game with Vue was actually pretty easy and much fun. I intend to work on the game and extend it's
            features whenever I get some free time.
          </p>
        </EditorLine>
      </section>

      <section>
        <EditorLine :indentation="2" />
        <EditorLine :indentation="2">
          <h3 class="text-only-section">
            Play the famous game of snake
          </h3>
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
                <h3>Single player mode</h3>
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
                src="/snake-game.png"
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
                <h3>Choose out of a bunch of different levels</h3>
                <p>
                  Conquer a variety of levels in Single Player mode, each with its unique challenges and
                  high-scores to beat. Test your skills and adapt your strategies to overcome diverse obstacles.
                </p>
              </div>
            </template>
            <template #image>
              <img
                src="/snake-levels.png"
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
                <h3>Versus mode</h3>
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
                src="/snake-game-versus.png"
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
    </Editor>
  </div>
</template>

<style scoped>

</style>