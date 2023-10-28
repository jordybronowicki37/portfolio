<script setup lang="ts">
import EditorLine from "../../components/EditorLine.vue";
import Editor from "../../components/Editor.vue";
import ImageTextCombinedView from "../../components/ImageTextCombinedView.vue";
import TechPillContainer from "../../components/TechPillContainer.vue";
import "./ProjectPage.css";
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
          <TechPillContainer
              link="https://github.com/jordybronowicki37/vue-snake"
              :types="['vue', 'typescript', 'personal']"
          />
        </div>
      </EditorLine>

      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <ImageTextCombinedView>
          <template #text>
            <div>
              <h3>Play the famous game of snake</h3>
              <section>
                Dive into the thrilling world of my Snake Game, a project that offers not just one, but two exciting
                game modes: Single Player and Versus Mode.
              </section>
            </div>
          </template>
          <template #image>
            <img
                src="/snake-game.png"
                alt="Snake single-player game preview"
                class="project-image"
            >
          </template>
        </ImageTextCombinedView>
      </EditorLine>

      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <ImageTextCombinedView image-on-the-left>
          <template #text>
            <div>
              <h3>Single player mode</h3>
              <section>
                In Single Player mode, challenge yourself through a selection of diverse levels, each presenting
                unique hurdles and escalating difficulty. Conquer independent challenges in every level and aim
                to beat highscores. With each level, face new obstacles, test your reflexes, and strategize your
                moves to outsmart the game.
              </section>
            </div>
          </template>
          <template #image>
            <img
                src="/snake-game.png"
                alt="Snake levels preview"
                class="project-image"
            >
          </template>
        </ImageTextCombinedView>
      </EditorLine>

      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <ImageTextCombinedView>
          <template #text>
            <div>
              <h3>Choose out of a bunch of different levels</h3>
              <section>
                Conquer a variety of levels in Single Player mode, each with its unique challenges and
                high-scores to beat. Test your skills and adapt your strategies to overcome diverse obstacles.
              </section>
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

      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <ImageTextCombinedView image-on-the-left>
          <template #text>
            <div>
              <h3>Versus mode</h3>
              <section>
                Experience the ultimate showdown in Versus Mode, where two players compete head-to-head.
                Your goal? Gather as much fruit as you can to grow your snake and eliminate your opponent.
                It's a battle of wits and speed as you maneuver through the game grid, avoiding collisions
                and strategically collecting fruit to gain an advantage. The player with the longest snake
                and the most points emerges victorious.
              </section>
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

      <EditorLine :indentation="2" />
      <EditorLine :indentation="1" />
      <EditorLine :indentation="0" />
      <EditorLine :indentation="0" />
    </Editor>
  </div>
</template>

<style scoped>

</style>