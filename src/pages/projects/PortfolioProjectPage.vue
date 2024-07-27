<script setup lang="ts">
import Editor from "../../components/Editor.vue";
import EditorLine from "../../components/EditorLine.vue";
import ImageTextCombinedView from "../../components/ImageTextCombinedView.vue";
import "./ProjectPage.css";
import ProjectProperties from "../../components/ProjectProperties.vue";

const deploymentURL = import.meta.env.VITE_PORTFOLIO_PRODUCTION_DEPLOYMENT_URL;
const githubURL = import.meta.env.VITE_PORTFOLIO_GITHUB_URL;
</script>

<template>
  <div class="project-page">
    <Editor>
      <EditorLine :indentation="0" />
      <EditorLine :indentation="0" />
      <EditorLine :indentation="1">
        <h2>Project: Portfolio</h2>
      </EditorLine>
      <EditorLine :indentation="1">
        <div class="tags-wrapper">
          <ProjectProperties
            :languages="['typescript', 'html', 'css']"
            :frameworks="['vue']"
            deployment="render"
            type="personal"
            status="completed"
            :links="[githubURL, deploymentURL]"
          />
        </div>
      </EditorLine>

      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <ImageTextCombinedView
          image-title="Portfolio homepage preview"
          image-description="A code editor inspired portfolio."
        >
          <template #text>
            <section>
              <h3>Code editor inspired</h3>
              <p>
                My personal portfolio website stands as a testament to my passion for coding and design.
                Designed to resemble a familiar code editor, this website serves as a digital canvas where I
                showcase my projects and skills.
              </p>
            </section>
          </template>
          <template #image>
            <img
              src="/portfolio-home.png"
              alt="Portfolio homepage preview"
              class="project-image"
            >
          </template>
        </ImageTextCombinedView>
      </EditorLine>

      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <h3 class="list-title">
          Features
        </h3>
      </EditorLine>
      <ul class="features-list">
        <EditorLine :indentation="2">
          <li>
            <h4>Immersive Code Editor Environment</h4>
            <p>
              Navigating my portfolio feels like exploring lines of code in a familiar editor, creating a
              comfortable space for fellow tech enthusiasts.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h4>Project Showcase</h4>
            <p>
              Dive into a variety of projects, each encapsulating my dedication to innovation. From coding
              experiments to fully developed applications, my work speaks volumes about my capabilities.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h4>Responsive Design</h4>
            <p>
              The website seamlessly adjusts to different devices, ensuring a smooth experience whether
              you're browsing on a desktop, tablet, or smartphone.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h4>Connection Opportunities</h4>
            <p>
              Interested in discussing collaborations, projects, or just exchanging ideas? Reach out via
              the contact section. I'm always eager to connect with fellow enthusiasts and professionals.
            </p>
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