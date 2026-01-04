<script setup lang="ts">
import EditorLine from "../../components/EditorLine.vue";
import ProjectProperties from "../../components/ProjectProperties.vue";
import TextDocBlock from "../../components/TextDocBlock.vue";
import EditorProject from "./EditorProject.vue";
import ImageFocusModal from "../../components/ImageFocusModal.vue";

const githubURL = import.meta.env.VITE_PRO_PADDING_GITHUB_URL
const deploymentURL = import.meta.env.VITE_PRO_PADDING_DEPLOYMENT_URL
</script>

<template>
  <EditorProject>
    <EditorLine :indentation="0" />
    <EditorLine :indentation="0" />
    <EditorLine :indentation="1">
      <h1># Project: Pro-Padding</h1>
    </EditorLine>

    <EditorLine :indentation="2" />
    <EditorLine :indentation="2">
      <TextDocBlock
        text="
          I wanted to create a tool with which I could modernize and professionalize my screenshots before I share
          them with the world.
          "
      />
    </EditorLine>

    <section>
      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <h2>
          ## Examples
        </h2>
      </EditorLine>
      <EditorLine :indentation="2">
        <p>
          Here are some examples of what you can generate with this tool.
        </p>
      </EditorLine>
      <EditorLine :indentation="2">
        <div class="images-collection">
          <ImageFocusModal
            title="Dashboard example"
            description="A centralized dashboard view presenting key metrics, charts, and summaries in a clear, organized layout for quick insights and monitoring."
          >
            <img
              src="/img/projects/pro-padding-dashboard-example.png"
              alt="Pro-Padding dashboard example"
            >
          </ImageFocusModal>
          <ImageFocusModal
            title="Code example"
            description="A formatted code snippet with syntax highlighting, illustrating readable and well-structured source code."
          >
            <img
              src="/img/projects/pro-padding-code-example.png"
              alt="Pro-Padding code example"
            >
          </ImageFocusModal>
          <ImageFocusModal
            title="Data example"
            description="A structured table presenting rows and columns of data with clear headers and consistent spacing."
          >
            <img
              src="/img/projects/pro-padding-data-example.png"
              alt="Pro-Padding data example"
            >
          </ImageFocusModal>
          <ImageFocusModal
            title="Social example"
            description="A social media post layout featuring text content, user information, and engagement elements."
          >
            <img
              src="/img/projects/pro-padding-social-example.png"
              alt="Pro-Padding social example"
            >
          </ImageFocusModal>
          <ImageFocusModal
            title="Chart example"
            description="A data visualization displaying trends or comparisons using a clean, professional chart layout."
          >
            <img
              src="/img/projects/pro-padding-chart-example.png"
              alt="Pro-Padding chart example"
            >
          </ImageFocusModal>
        </div>
      </EditorLine>
    </section>

    <section>
      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <h2 class="list-title">
          ## Features
        </h2>
      </EditorLine>
      <ul class="features-list">
        <EditorLine :indentation="2">
          <li>
            <h3>Professional backgrounds</h3>
            <p>
              Add personally crafted backgrounds to your screenshots to professionalize them before sharing.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h3>Automatic cropping</h3>
            <p>
              The uploaded screenshot is automatically cropped if the borders are of an identical color. This way your
              screenshot will always be centered perfectly into the tool.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h3>Customize all dimensions</h3>
            <p>
              With the expansive options, you can customize almost everything within the tool.
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
      <ProjectProperties
        :languages="['typescript', 'html', 'css']"
        :frameworks="['svelte', 'tailwind']"
        deployment="render"
        type="personal"
        status="completed"
        :links="[githubURL, deploymentURL]"
      />
    </template>
  </EditorProject>
</template>

<style scoped>
.images-collection {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, max-content));
}
@container editor-line (width < 500px) {
  .images-collection {
    grid-template-columns: 100%;
  }
}

.images-collection img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
</style>
