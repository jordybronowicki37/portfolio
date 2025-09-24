<script setup lang="ts">
import Editor from "../components/Editor.vue";
import EditorLine from "../components/EditorLine.vue";
import {AWS_ICONS} from "../data/AWSIconData.ts";
import {ref} from "vue";
import AWSServiceCard from "../components/AWSServiceCard.vue";
import TechPillConfigured from "../components/TechPillConfigured.vue";
import {ALL_TECH_PILL_TYPES} from "../data/TechPillConfiguredData.ts";
import TechPillLink from "../components/TechPillLink.vue";
import TextDocBlock from "../components/TextDocBlock.vue";

const selectedAwsCard = ref<string>(Object.keys(AWS_ICONS)[0])
</script>

<template>
  <Editor>
    <EditorLine :indentation="0" />
    <EditorLine :indentation="0" />
    <EditorLine :indentation="0">
      <h1>Debugging page</h1>
    </EditorLine>
    <EditorLine :indentation="1">
      <p>
        This page is used for testing purposes and as a quick preview for all kinds of custom components and html elements.
      </p>
    </EditorLine>

    <EditorLine :indentation="1" />
    <EditorLine :indentation="1">
      <h2>AWS Service Card</h2>
      <h3>Options:</h3>
      <div class="aws-card-option-wrapper">
        <img
          v-for="(card, name) in AWS_ICONS"
          :key="name"
          class="aws-card-option"
          :src="card.icon"
          alt="AWS card logo selection preview"
          :title="name as string"
          height="30px"
          width="30px"
          @click="selectedAwsCard = name as string"
        >
      </div>
      <h3>Preview:</h3>
      <AWSServiceCard
        :key="selectedAwsCard"
        :name="selectedAwsCard"
      />
    </EditorLine>

    <EditorLine :indentation="1" />
    <EditorLine :indentation="1">
      <h2>Editor notifications</h2>
      <div class="editor-notification-buttons">
        <button class="info-button">
          INFO
        </button>
        <button class="warning-button">
          WARNING
        </button>
        <button class="error-button">
          ERROR
        </button>
      </div>
    </EditorLine>

    <EditorLine :indentation="1" />
    <EditorLine :indentation="1">
      <h2>Tech Pills</h2>
      <div class="tech-pills-wrapper">
        <TechPillConfigured
          v-for="value in ALL_TECH_PILL_TYPES"
          :key="value.type"
          :type="value.type"
        />
        <TechPillLink link="https://github.com" />
        <TechPillLink link="https://onrender.com" />
      </div>
    </EditorLine>

    <EditorLine :indentation="1" />
    <EditorLine :indentation="1">
      <h2>Text documentation block</h2>
      <TextDocBlock
        text="
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto corporis, cumque dicta dolore
      doloremque dolorum eos iure laudantium, modi molestias nemo non nulla odio praesentium provident quod, quos
      ratione recusandae sequi sint suscipit temporibus vel veniam voluptate! Consequatur cum doloremque hic magni
      maxime natus praesentium quo repellendus repudiandae sint."
      />
    </EditorLine>

    <EditorLine :indentation="1" />
    <EditorLine :indentation="1">
      <h2>Headings</h2>
      <div class="headings-wrapper">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
      </div>
    </EditorLine>

    <EditorLine :indentation="1" />
    <EditorLine :indentation="1">
      <h2>Bugs</h2>

    </EditorLine>

    <EditorLine :indentation="0" />
    <EditorLine :indentation="0" />
  </Editor>
</template>

<style scoped>
h3 {
  margin-top: 0.5rem;
}
.aws-card-option-wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 5px;
}
.aws-card-option {
  cursor: pointer;
}
.editor-notification-buttons {
  display: flex;
  gap: 5px;
}
.editor-notification-buttons button {
  padding: 3px 10px;
  border: none;
  cursor: pointer;
}
.info-button {
  background-color: #7185ef;
  color: black;
}
.warning-button {
  background-color: #efef59;
  color: black;
}
.error-button {
  background-color: #f35565;
  color: black;
}
.tech-pills-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.headings-wrapper * {
  margin: 0;
}
</style>
