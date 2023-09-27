<script setup lang="ts">
import Editor from "../components/Editor.vue";
import EditorLine from "../components/EditorLine.vue";
import TechPillContainer from "../components/TechPillContainer.vue";
import TechPillGithub from "../components/TechPillGithub.vue";
</script>

<template>
  <Editor>
    <EditorLine :indentation="0"/>
    <EditorLine :indentation="0">
      <h1>Projects</h1>
    </EditorLine>
    <EditorLine :indentation="1">
      <p>Projects intro</p>
    </EditorLine>
    <EditorLine :indentation="1"/>

    <!--Production Calculator-->
    <EditorLine :indentation="1">
      <div class="title-tech-container">
        <h2>Production Calculator</h2>
        <TechPillContainer :types="['.net', 'c#', 'mongodb', 'react', 'typescript', 'sass', 'personal']">
          <TechPillGithub link="https://github.com/jordybronowicki37/production-calculator"/>
        </TechPillContainer>
      </div>
    </EditorLine>
    <EditorLine :indentation="2">
      <div>
        <img class="screenshot" src="/prod-cal-editor.png" alt="Production calculator editor preview">
      </div>
    </EditorLine>
    <EditorLine :indentation="1"/>

    <!--Vue Snake-->
    <EditorLine :indentation="1">
      <div class="title-tech-container">
        <h2>Snake Game</h2>
        <TechPillContainer :types="['vue', 'typescript', 'personal']">
          <TechPillGithub link="https://github.com/jordybronowicki37/vue-snake"/>
        </TechPillContainer>
      </div>
    </EditorLine>
    <EditorLine :indentation="2">
      <p>Project intro</p>
    </EditorLine>
    <EditorLine :indentation="1"/>

    <!--Portfolio-->
    <EditorLine :indentation="1">
      <div class="title-tech-container">
        <h2>Portfolio</h2>
        <TechPillContainer :types="['vue', 'typescript', 'personal']">
          <TechPillGithub link="https://github.com/jordybronowicki37/portfolio"/>
        </TechPillContainer>
      </div>
    </EditorLine>
    <EditorLine :indentation="2">
      <p>Project intro</p>
    </EditorLine>
    <EditorLine :indentation="1"/>

    <!--Neerslag radar-->
    <EditorLine :indentation="1">
      <div class="title-tech-container">
        <h2>Neerslag radar</h2>
        <TechPillContainer :types="['.net', 'c#', 'angular', 'typescript', 'external']"/>
      </div>
    </EditorLine>
    <EditorLine :indentation="2">
      <p>Project intro</p>
    </EditorLine>
    <EditorLine :indentation="1"/>

    <!--Rooster/absentie tool-->
    <EditorLine :indentation="1">
      <div class="title-tech-container">
        <h2>Rooster tool</h2>
        <TechPillContainer :types="['java', 'azure', 'school']"/>
      </div>
    </EditorLine>
    <EditorLine :indentation="2">
      <p>Project intro</p>
    </EditorLine>
    <EditorLine :indentation="1"/>

    <!--Tetris-->
    <EditorLine :indentation="1">
      <div class="title-tech-container">
        <h2>Tetris</h2>
        <TechPillContainer :types="['c#', 'signalr', 'school']"/>
      </div>
    </EditorLine>
    <EditorLine :indentation="2">
      <p>Project intro</p>
    </EditorLine>
    <EditorLine :indentation="1"/>

    <!--Chat-->
    <EditorLine :indentation="1">
      <div class="title-tech-container">
        <h2>Chat</h2>
        <TechPillContainer :types="['java', 'azure', 'javascript', 'html', 'css', 'personal']"/>
      </div>
    </EditorLine>
    <EditorLine :indentation="2">
      <p>Project intro</p>
    </EditorLine>
    <EditorLine :indentation="1"/>
    <EditorLine :indentation="0"/>
  </Editor>
</template>

<style scoped>
.title-tech-container {
  display: flex;
  gap: 1rem;
}
.screenshot {
  width: 100%;
}
</style>