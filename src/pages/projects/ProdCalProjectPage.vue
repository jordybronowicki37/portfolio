<script setup lang="ts">
import Editor from "../../components/Editor.vue";
import EditorLine from "../../components/EditorLine.vue";
import ImageTextCombinedView from "../../components/ImageTextCombinedView.vue";
import "./ProjectPage.css";
import ProjectProperties from "../../components/ProjectProperties.vue";

const githubURL = import.meta.env.VITE_PRODCAL_GITHUB_URL
</script>

<template>
  <div class="project-page">
    <Editor>
      <EditorLine :indentation="0" />
      <EditorLine :indentation="0" />
      <EditorLine :indentation="1">
        <h2>Project: Production Calculator</h2>
      </EditorLine>
      <EditorLine :indentation="1">
        <div class="tags-wrapper">
          <ProjectProperties
            :languages="['c#', 'typescript', 'html', 'sass']"
            :frameworks="['.net', 'react', 'redux']"
            database="mongodb"
            type="personal"
            status="in progress"
            :links="[githubURL]"
          />
        </div>
      </EditorLine>

      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <h3>Project intentions</h3>
        <section>
          I like to play factory building games. The satisfaction of automating basic tasks and watching your
          factory grow is just amazing. But sometimes it can get quite complicated to calculate the required product
          throughput for a certain production process. So I wanted to create a tool which can help with the
          complicated mess of calculations that you get when planning a factory.
        </section>
      </EditorLine>

      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <ImageTextCombinedView
          image-title="Production calculator projects preview"
          image-description="An overview of all your projects."
        >
          <template #text>
            <div>
              <h3>Multiple different projects</h3>
              <section>
                With the Production Calculator, you can handle an array of projects tailored to your manufacturing
                needs. From optimizing existing production lines to creating innovative setups, our tool supports
                diverse industrial ventures. Select from a range of presets to kickstart your project, enabling
                seamless exploration and analysis of various factory configurations.
              </section>
            </div>
          </template>
          <template #image>
            <img
              src="/prod-cal-projects.png"
              alt="Production calculator projects preview"
              class="project-image"
            >
          </template>
        </ImageTextCombinedView>
      </EditorLine>

      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <ImageTextCombinedView
          image-on-the-left
          image-title="Production calculator editor preview"
          image-description="A preview of the editor."
        >
          <template #text>
            <div>
              <h3>Editor</h3>
              <section>
                Our intuitive editor provides a visual representation of your entire production process.
                Utilizing flow chart-based mapping, you can design, modify, and analyze production lines
                with ease. The editor acts as your digital blueprint, offering a clear overview of nodes,
                connections, and configurations. Dive deep into your projects, track efficiency, and refine
                your manufacturing strategies.
              </section>
            </div>
          </template>
          <template #image>
            <img
              src="/prod-cal-editor.png"
              alt="Production calculator editor preview"
              class="project-image"
            >
          </template>
        </ImageTextCombinedView>
      </EditorLine>

      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <h3 class="list-title">
          Connections and nodes
        </h3>
      </EditorLine>
      <ul class="features-list">
        <EditorLine :indentation="2">
          <li>
            <h4>Connections</h4>
            <p>
              Link nodes by specifying the product traveling along the connection. The connection can represent
              any type of transportation.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h4>Start-node</h4>
            <p>
              Initiates the production process by creating new products. This can represent a resource collector
              like a mine, pump or other extractor.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h4>Production-node</h4>
            <p>
              Requires a recipes to transform products into different types. This can represent any machine that
              has an input and an output.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h4>End-node</h4>
            <p>
              Consumes, destroys or discards products marking the completion of the production cycle.
            </p>
          </li>
          <li>
            <h4>Input-node</h4>
            <p>
              This marks the input of a worksheet. It can represent any imported product for a factory. The parent
              worksheet must provide these products to the worksheet-node.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h4>Worksheet-node</h4>
            <p>
              With this node a worksheet can be reused inside of another worksheet. This can be useful for
              creating an entire map of all the factories that have connections to each other.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h4>Output-node</h4>
            <p>
              This node represents an output product of a worksheet, this product can then be used inside of the
              parent worksheet for further processing.
            </p>
          </li>
        </EditorLine>
      </ul>

      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <h3 class="list-title">
          Features
        </h3>
      </EditorLine>
      <ul class="features-list">
        <EditorLine :indentation="2">
          <li>
            <h4>Projects</h4>
            <p>With a project you can group all the necessary elements of your game-save together.</p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h4>Entity collection presets</h4>
            <p>
              Choose from diverse presets tailored to different factory building games for your project.
              This collection contains all the products, recipes and machines that are available in that game.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h4>Separate into Worksheets</h4>
            <p>
              Create multiple worksheets within a project for the separation of different factories or production lines.
              You can reuse these worksheets inside of other worksheets by using the worksheet-node.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h4>Flow Chart Representation</h4>
            <p>Visualize production lines and/or factories by using the intuitive flow chart based editor.</p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h4>Production Targets</h4>
            <p>Set minimum, maximum, or exact product requirements for nodes, ensuring accurate calculations.</p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h4>Efficiency Analysis</h4>
            <p>Calculate throughput and efficiency to optimize production processes.</p>
          </li>
        </EditorLine>
      </ul>

      <EditorLine :indentation="2" />
      <EditorLine :indentation="1" />
      <EditorLine :indentation="0" />
      <EditorLine :indentation="0" />
    </Editor>
  </div>
</template>

<style scoped>

</style>