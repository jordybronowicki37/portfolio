<script setup lang="ts">
import EditorLine from "../../components/EditorLine.vue";
import ImageTextCombinedView from "../../components/ImageTextCombinedView.vue";
import ProjectProperties from "../../components/ProjectProperties.vue";
import TextDocBlock from "../../components/TextDocBlock.vue";
import EditorProject from "./EditorProject.vue";
import Bug from "../../components/Bug.vue";

const githubURL = import.meta.env.VITE_PRODCAL_GITHUB_URL
</script>

<template>
  <EditorProject>
    <EditorLine :indentation="0" />
    <EditorLine :indentation="0" />
    <EditorLine :indentation="1">
      <h1 id="project-prodcal-title"># Project: Production Calculator</h1>
    </EditorLine>

    <EditorLine :indentation="2" />
    <EditorLine :indentation="2">
      <TextDocBlock
        text="
          I like to play factory building games. The satisfaction of automating basic tasks and watching your
          factory grow is just amazing. But sometimes it can get quite complicated to calculate the required product
          throughput for a certain production process. So I wanted to create a tool which can help with the
          complicated mess of calculations that you get when planning a factory.
          "
      />
    </EditorLine>

    <section>
      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <ImageTextCombinedView
          image-title="Production calculator projects preview"
          image-description="An overview of all your projects."
        >
          <template #text>
            <div>
              <h2 id="project-prodcal-multiple-projects">## Multiple different projects</h2>
              <p>
                With the Production Calculator, you can handle an array of projects tailored to your manufacturing
                needs. From optimizing existing production lines to creating innovative setups, our tool supports
                diverse industrial ventures. Select from a range of presets to kickstart your project, enabling
                seamless exploration and analysis of various factory configurations.
              </p>
            </div>
          </template>
          <template #image>
            <img
              src="/img/projects/prod-cal-projects.png"
              alt="Production calculator projects preview"
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
          image-title="Production calculator editor preview"
          image-description="A preview of the editor."
        >
          <template #text>
            <div>
              <h2 id="project-prodcal-editor">## Editor</h2>
              <p>
                Our intuitive editor provides a visual representation of your entire production process.
                Utilizing flow chart-based mapping, you can design, modify, and analyze production lines
                with ease. The editor acts as your digital blueprint, offering a clear overview of nodes,
                connections, and configurations. Dive deep into your projects, track efficiency, and refine
                your manufacturing strategies.
              </p>
            </div>
          </template>
          <template #image>
            <Bug :bug-type="14">
              <img
                src="/img/projects/prod-cal-editor.png"
                alt="Production calculator editor preview"
                class="project-image"
              >
            </Bug>
          </template>
        </ImageTextCombinedView>
      </EditorLine>
    </section>

    <section>
      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <h2 id="project-prodcal-connections-nodes" class="list-title">
          ## Connections and nodes
        </h2>
      </EditorLine>
      <ul class="features-list">
        <EditorLine :indentation="2">
          <li>
            <h3 id="project-prodcal-connections">Connections</h3>
            <p>
              Link nodes by specifying the product traveling along the connection. The connection can represent
              any type of transportation.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h3 id="project-prodcal-start-node">Start-node</h3>
            <p>
              Initiates the production process by creating new products. This can represent a resource collector
              like a mine, pump or other extractor.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h3 id="project-prodcal-production-node">Production-node</h3>
            <p>
              Requires a recipes to transform products into different types. This can represent any machine that
              has an input and an output.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h3 id="project-prodcal-end-node">End-node</h3>
            <p>
              Consumes, destroys or discards products marking the completion of the production cycle.
            </p>
          </li>
          <li>
            <h3 id="project-prodcal-input-node">Input-node</h3>
            <p>
              This marks the input of a worksheet. It can represent any imported product for a factory. The parent
              worksheet must provide these products to the worksheet-node.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h3 id="project-prodcal-worksheet-node">Worksheet-node</h3>
            <p>
              With this node a worksheet can be reused inside of another worksheet. This can be useful for
              creating an entire map of all the factories that have connections to each other.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h3 id="project-prodcal-output-node">Output-node</h3>
            <p>
              This node represents an output product of a worksheet, this product can then be used inside of the
              parent worksheet for further processing.
            </p>
          </li>
        </EditorLine>
      </ul>
    </section>

    <section>
      <EditorLine :indentation="2">
        <Bug :bug-type="7" />
      </EditorLine>
      <EditorLine :indentation="2">
        <h2 id="project-prodcal-features" class="list-title">
          ## Features
        </h2>
      </EditorLine>
      <ul class="features-list">
        <EditorLine :indentation="2">
          <li>
            <h3 id="project-prodcal-projects">Projects</h3>
            <p>With a project you can group all the necessary elements of your game-save together.</p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h3 id="project-prodcal-entity-collections">Entity collection presets</h3>
            <p>
              Choose from diverse presets tailored to different factory building games for your project.
              This collection contains all the products, recipes and machines that are available in that game.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h3 id="project-prodcal-separate-worksheets">Separate into Worksheets</h3>
            <p>
              Create multiple worksheets within a project for the separation of different factories or production lines.
              You can reuse these worksheets inside of other worksheets by using the worksheet-node.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h3 id="project-prodcal-flow-chart">Flow Chart Representation</h3>
            <p>Visualize production lines and/or factories by using the intuitive flow chart based editor.</p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h3 id="project-prodcal-production-targets">Production Targets</h3>
            <p>Set minimum, maximum, or exact product requirements for nodes, ensuring accurate calculations.</p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h3 id="project-prodcal-efficiency-analysis">Efficiency Analysis</h3>
            <p>Calculate throughput and efficiency to optimize production processes.</p>
          </li>
        </EditorLine>
      </ul>
    </section>

    <EditorLine :indentation="2" />
    <EditorLine :indentation="1" />
    <EditorLine :indentation="0" />
    <EditorLine :indentation="0" />

    <template #info>
      <ProjectProperties
        :languages="['c#', 'typescript', 'html', 'sass']"
        :frameworks="['.net', 'react', 'redux']"
        database="mongodb"
        type="personal"
        status="in progress"
        :links="[githubURL]"
      />
    </template>
  </EditorProject>
</template>

<style scoped>

</style>
