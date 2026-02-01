<script setup lang="ts">
import EditorLine from "../../components/EditorLine.vue";
import ImageTextCombinedView from "../../components/ImageTextCombinedView.vue";
import ProjectProperties from "../../components/ProjectProperties.vue";
import TextDocBlock from "../../components/TextDocBlock.vue";
import EditorProject from "./EditorProject.vue";
import Bug from "../../components/Bug.vue";
import {neerslagProjectCardData} from "../../data/ProjectCardsData.ts";
</script>

<template>
  <EditorProject>
    <EditorLine :indentation="0" />
    <EditorLine :indentation="0" />
    <EditorLine :indentation="1">
      <h1 id="project-neerslag-title">
        # Project: Neerslag Radar
      </h1>
    </EditorLine>

    <EditorLine :indentation="2" />
    <EditorLine :indentation="2">
      <TextDocBlock
        text="
          This project was part of a collaboration between a student group and an external client. We were tasked
          to develop an application that contained interactive weather animations. Raw weather data would be
          processed and plot onto a map or graph with which you can interact to compare weather patterns.
          "
      />
    </EditorLine>

    <section>
      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <ImageTextCombinedView
          image-title="Neerslag radar basic view"
          image-description="A basic dashboard that is used to compare two different views."
        >
          <template #text>
            <div>
              <h2 id="project-neerslag-data-insights">
                ## Data insights
              </h2>
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
              <h2 id="project-neerslag-dashboards">
                ## Create complex dashboards
              </h2>
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
              <Bug :bug-type="6" />
              <h2 id="project-neerslag-switch-dashboards">
                ## Easily switch between dashboards
              </h2>
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
        <h2
          id="project-neerslag-features"
          class="list-title"
        >
          ## Features
        </h2>
      </EditorLine>
      <ul class="features-list">
        <EditorLine :indentation="2">
          <li>
            <h3 id="project-neerslag-map-visualisation">
              View your data iteratively in the map visualisation
            </h3>
            <p>
              View every frame separately or play them as a video.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h3 id="project-neerslag-create-selections">
              Create selections
            </h3>
            <p>
              Make a selection of cells to only view the relevant information of a specific location.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h3 id="project-neerslag-graphs">
              View your data in a graph visualisation
            </h3>
            <p>
              View all the data of your selection in a graph.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h3 id="project-neerslag-partial-data">
              View partial data
            </h3>
            <p>
              Configure a timespan to only view a section of the dataset.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h3 id="project-neerslag-crud-dashboard-functions">
              Save, update and load dashboards as configurations
            </h3>
            <p>
              Dashboards are saved locally. They contain all of the added views with their selected settings.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h3 id="project-neerslag-fast">
              Fast load times
            </h3>
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

    <template #info>
      <ProjectProperties v-bind="neerslagProjectCardData" />
    </template>
  </EditorProject>
</template>

<style scoped>

</style>
