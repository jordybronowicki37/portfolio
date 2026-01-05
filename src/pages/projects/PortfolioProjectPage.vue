<script setup lang="ts">
import EditorLine from "../../components/EditorLine.vue";
import ImageTextCombinedView from "../../components/ImageTextCombinedView.vue";
import ProjectProperties from "../../components/ProjectProperties.vue";
import ImageFocusModal from "../../components/ImageFocusModal.vue";
import TextDocBlock from "../../components/TextDocBlock.vue";
import EditorProject from "./EditorProject.vue";
import Bug from "../../components/Bug.vue";

const deploymentURL = import.meta.env.VITE_PORTFOLIO_PRODUCTION_DEPLOYMENT_URL;
const githubURL = import.meta.env.VITE_PORTFOLIO_GITHUB_URL;
</script>

<template>
  <EditorProject>
    <EditorLine :indentation="0" />
    <EditorLine :indentation="0" />
    <EditorLine :indentation="1">
      <h1># Project: Portfolio</h1>
    </EditorLine>

    <EditorLine :indentation="2" />
    <EditorLine :indentation="2">
      <TextDocBlock
        text="
          For my portfolio website I wanted a place in which I could share my work. And with that I don't mean to just
          share my projects, but also my place of work. I did this by designing my portfolio as a code editor, my
          daily place of work.
          "
      />
    </EditorLine>

    <section>
      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <ImageTextCombinedView
          image-title="Portfolio homepage preview"
          image-description="A code editor inspired portfolio."
          image-on-the-left
        >
          <template #text>
            <div>
              <h2>## Code editor inspired</h2>
              <p>
                My personal portfolio website stands as a testament to my passion for coding and design.
                Designed to resemble a familiar code editor.
              </p>
            </div>
          </template>
          <template #image>
            <img
              src="/img/projects/portfolio-theme-1.jpeg"
              alt="Portfolio homepage preview"
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
          image-title="Portfolio homepage preview"
          image-description="A code editor inspired portfolio."
        >
          <template #text>
            <div>
              <h2>## Multiple projects</h2>
              <p>
                This website serves as a digital canvas where I showcase my projects and skills.
              </p>
            </div>
          </template>
          <template #image>
            <img
              src="/img/projects/portfolio-projects.jpeg"
              alt="Portfolio projects preview"
              class="project-image"
            >
          </template>
        </ImageTextCombinedView>
      </EditorLine>
    </section>

    <section>
      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <h2>
          ## Themes
        </h2>
      </EditorLine>
      <EditorLine :indentation="2">
        <p>
          The editor supports multiple different themes so that you can customize it however you like.
        </p>
      </EditorLine>
      <EditorLine :indentation="2">
        <div class="images-collection">
          <Bug :bug-type="15">
            <ImageFocusModal
              title="Dark theme"
              description=""
            >
              <img
                src="/img/projects/portfolio-theme-1.jpeg"
                alt="Portfolio theme"
              >
            </ImageFocusModal>
          </Bug>
          <ImageFocusModal
            title="Blue theme"
            description=""
          >
            <img
              src="/img/projects/portfolio-theme-2.jpeg"
              alt="Portfolio theme"
            >
          </ImageFocusModal>
          <ImageFocusModal
            title="Light theme"
            description=""
          >
            <img
              src="/img/projects/portfolio-theme-3.jpeg"
              alt="Portfolio theme"
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
            <h3>Immersive Code Editor Environment</h3>
            <p>
              Navigating my portfolio feels like exploring lines of code in a familiar editor, creating a
              comfortable space for fellow tech enthusiasts.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h3>Project Showcase</h3>
            <p>
              Dive into a variety of projects, each encapsulating my dedication to innovation. From coding
              experiments to fully developed applications, my work speaks volumes about my capabilities.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h3>Responsive Design</h3>
            <p>
              The website seamlessly adjusts to different devices, ensuring a smooth experience whether
              you're browsing on a desktop, tablet, or smartphone.
            </p>
          </li>
        </EditorLine>
        <EditorLine :indentation="2">
          <li>
            <h3>Connection Opportunities</h3>
            <p>
              Interested in discussing collaborations, projects, or just exchanging ideas? Reach out via
              the contact section. I'm always eager to connect with fellow enthusiasts and professionals.
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
        :frameworks="['vue']"
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
  object-fit: contain;
}
</style>
