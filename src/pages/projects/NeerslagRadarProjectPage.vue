<script setup lang="ts">
import Editor from "../../components/Editor.vue";
import EditorLine from "../../components/EditorLine.vue";
import ImageTextCombinedView from "../../components/ImageTextCombinedView.vue";
import "./ProjectPage.css";
import ProjectProperties from "../../components/ProjectProperties.vue";
</script>

<template>
  <div class="project-page">
    <Editor>
      <EditorLine :indentation="0" />
      <EditorLine :indentation="0" />
      <EditorLine :indentation="1">
        <h2>Project: Neerslag Radar</h2>
      </EditorLine>
      <EditorLine :indentation="1">
        <div class="tags-wrapper">
          <ProjectProperties
            :languages="['c#', 'typescript', 'html', 'css']"
            :frameworks="['.net', 'angular']"
            type="school/external"
            status="completed"
            :grade="8.5"
            :group-size="5"
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
            This project was part of a collaboration between a student group and an external client. We were tasked
            to develop an application that contained interactive weather animations. Raw weather data would be
            processed and plot onto a map or graph with which you can interact to compare weather patterns.
          </p>
        </EditorLine>
      </section>

      <section>
        <EditorLine :indentation="2" />
        <EditorLine :indentation="2">
          <ImageTextCombinedView
            image-title="Neerslag radar basic view"
            image-description="A basic dashboard that is used to compare two different views."
          >
            <template #text>
              <div>
                <h3>Data insights</h3>
                <p>
                  View the data in either a map or in a graph visualisation. The map visualisation animates through all
                  data slices in 5 minute intervals. The color gradient displays the rainfall intensity in mm/H. The graph
                  visualisation shows the average rainfall of the selected cells from the map above.
                </p>
              </div>
            </template>
            <template #image>
              <img
                src="/img/projects/neerslag-radar-basic-views.png"
                alt="Neerslag radar basic view"
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
            image-title="Neerslag radar complex view"
            image-description="A complex dashboard that shows multiple views."
          >
            <template #text>
              <div>
                <h3>Create complex dashboards</h3>
                <p>
                  Create complex dashboards by adding multiple views with differing insights. Compare the data between
                  different locations by placing the visualisations next to each other.
                </p>
              </div>
            </template>
            <template #image>
              <img
                src="/img/projects/neerslag-radar-complex-views.png"
                alt="Neerslag radar complex view"
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
            image-title="Neerslag radar configurations"
            image-description="The configurations overview page where you can load different kind of dashboards."
          >
            <template #text>
              <div>
                <h3>Easily switch between dashboards</h3>
                <p>
                  Create multiple dashboards so that you can easily switch between different insights or projects.
                </p>
              </div>
            </template>
            <template #image>
              <img
                src="/img/projects/neerslag-radar-configs.png"
                alt="Neerslag radar configurations"
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
              <h4>View your data iteratively in the map visualisation</h4>
              <p>
                View every frame separately or play them as a video.
              </p>
            </li>
          </EditorLine>
          <EditorLine :indentation="2">
            <li>
              <h4>Create selections</h4>
              <p>
                Make a selection of cells to only view the relevant information of a specific location.
              </p>
            </li>
          </EditorLine>
          <EditorLine :indentation="2">
            <li>
              <h4>View your data in a graph visualisation</h4>
              <p>
                View all the data of your selection in a graph.
              </p>
            </li>
          </EditorLine>
          <EditorLine :indentation="2">
            <li>
              <h4>View partial data</h4>
              <p>
                Configure a timespan to only view a section of the dataset.
              </p>
            </li>
          </EditorLine>
          <EditorLine :indentation="2">
            <li>
              <h4>Save, update and load dashboards as configurations</h4>
              <p>
                Dashboards are saved locally. They contain all of the added views with their selected settings.
              </p>
            </li>
          </EditorLine>
          <EditorLine :indentation="2">
            <li>
              <h4>Fast load times</h4>
              <p>
                By using data streaming, the load times for the dataset are extremely fast.
              </p>
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