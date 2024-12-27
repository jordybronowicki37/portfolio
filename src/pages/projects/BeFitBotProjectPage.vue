<script setup lang="ts">
import Editor from "../../components/Editor.vue";
import EditorLine from "../../components/EditorLine.vue";
import ImageTextCombinedView from "../../components/ImageTextCombinedView.vue";
import "./ProjectPage.css";
import ProjectProperties from "../../components/ProjectProperties.vue";

const githubURL = import.meta.env.VITE_BEFIT_GITHUB_URL;
</script>

<template>
  <div class="project-page">
    <Editor>
      <EditorLine :indentation="0" />
      <EditorLine :indentation="0" />
      <EditorLine :indentation="1">
        <h2>Project: BeFit bot</h2>
      </EditorLine>
      <EditorLine :indentation="1">
        <div class="tags-wrapper">
          <ProjectProperties
            :languages="['java']"
            :frameworks="['spring']"
            :integrations="['discord']"
            database="postgresql"
            type="personal"
            status="completed"
            :links="[githubURL]"
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
            I started this project because my friend group wanted to collectively start working out more, but there
            wasn't any good app in which we could create custom exercises, set goals, compare progress and send
            motivation quotes. We also wanted it to have discord integrations so that we could easily use it from within
            our server.
          </p>
        </EditorLine>
      </section>

      <section>
        <EditorLine :indentation="2" />
        <EditorLine :indentation="2">
          <ImageTextCombinedView
            image-title="Create exercise logs"
            image-description="See how you are progressing with this specific exercise."
          >
            <template #text>
              <div>
                <h3>Log your exercises</h3>
                <p>
                  By creating a exercise log you create a datapoint for keeping track of you progress. By doing this you
                  can later view extensive insights into the progress the you have made.
                </p>
              </div>
            </template>
            <template #image>
              <img
                src="/img/projects/befit-log.png"
                alt="An example of an exercise log"
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
            image-title="View exercise data"
            image-description=""
          >
            <template #text>
              <div>
                <h3>View detailed data on an exercise</h3>
                <p>
                  View detailed data on a single exercise, see your own statistics on the exercise and view the
                  exercise leaderboard.
                </p>
              </div>
            </template>
            <template #image>
              <img
                src="/img/projects/befit-exercise.png"
                alt="An example of a detailed exercise report"
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
            image-title="View leaderboard"
            image-description="The global leaderboard and information about your own position."
          >
            <template #text>
              <div>
                <h3>View the global leaderboard</h3>
                <p>
                  The global leaderboard takes in account all of the exercises you have participated in.
                  A score is calculated for each exercise by taking in account the total amount of participants
                  and your rank on that exercise. By adding up all of these scores, you get your total score for
                  the global leaderboard.
                </p>
              </div>
            </template>
            <template #image>
              <img
                src="/img/projects/befit-leaderboard.png"
                alt="An example of a leaderboard"
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
            image-title="A progress chart"
            image-description="View your and your friends progress on a specific exercise."
          >
            <template #text>
              <div>
                <h3>View your progress</h3>
                <p>
                  View your progress on a specific exercise on a line-chart. This can either represent the amount of
                  weight that you lifted, the sets that you completed, the time it took to reach a certain goal or the
                  distance that you traversed. You can see your own progress, but also the progress of your friends.
                </p>
              </div>
            </template>
            <template #image>
              <img
                src="/img/projects/befit-progress.png"
                alt="An example of a progress chart"
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
            image-title="A progress chart"
            image-description="View your user stats"
          >
            <template #text>
              <div>
                <h3>View your stats</h3>
                <p>
                  View a lot of statistics from your user account and try to improve those numbers!
                </p>
              </div>
            </template>
            <template #image>
              <img
                src="/img/projects/befit-stats.png"
                alt="An example of a user's stats"
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
            image-title="User achievements"
            image-description="View both your completed and locked achievements."
          >
            <template #text>
              <div>
                <h3>Achievements</h3>
                <p>
                  There are 20 unique achievements for you to complete. You must complete them all!
                </p>
              </div>
            </template>
            <template #image>
              <img
                src="/img/projects/befit-achievements.png"
                alt="An example of the achievements command"
                class="project-image"
              >
            </template>
          </ImageTextCombinedView>
        </EditorLine>
      </section>

      <section>
        <EditorLine :indentation="2" />
        <EditorLine :indentation="2">
          <h3 class="list-title">
            Features
          </h3>
        </EditorLine>
        <ul class="features-list">
          <EditorLine :indentation="2">
            <li>
              <h4>Add your own exercises</h4>
              <p>
                Have a specific exercise you have to track? No problem! You can add your own exercises to keep track of.
              </p>
            </li>
          </EditorLine>
          <EditorLine :indentation="2">
            <li>
              <h4>Log your exercises</h4>
              <p>
                By adding exercise logs you can get more insights in your personal progress.
              </p>
            </li>
          </EditorLine>
          <EditorLine :indentation="2">
            <li>
              <h4>View your progress</h4>
              <p>
                Get insights into your personal progress for each of your exercises.
              </p>
            </li>
          </EditorLine>
          <EditorLine :indentation="2">
            <li>
              <h4>Set goals for certain exercises</h4>
              <p>
                Set a personal goal for an exercise to work towards.
              </p>
            </li>
          </EditorLine>
          <EditorLine :indentation="2">
            <li>
              <h4>Compare your progress to others</h4>
              <p>
                Compare your progress with your friends and motivate each other to work towards a common goal.
              </p>
            </li>
          </EditorLine>
          <EditorLine :indentation="2">
            <li>
              <h4>Receive motivation</h4>
              <p>
                Receive and request motivational quotes that keep you working hard on achieving your goals.
              </p>
            </li>
          </EditorLine>
          <EditorLine :indentation="2">
            <li>
              <h4>And much much more...</h4>
              <p>View the GitHub repository for a full breakdown of all commands and functionalities.</p>
            </li>
          </EditorLine>
        </ul>
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