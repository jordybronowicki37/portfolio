<script setup lang="ts">
import EditorLine from "../../components/EditorLine.vue";
import Editor from "../../components/Editor.vue";
import ImageTextCombinedView from "../../components/ImageTextCombinedView.vue";
import TechPillContainer from "../../components/TechPillContainer.vue";
</script>

<template>
  <Editor>
    <EditorLine :indentation="0"/>
    <EditorLine :indentation="0"/>
    <EditorLine :indentation="1">
      <h2>Project: Snake game</h2>
    </EditorLine>
    <EditorLine :indentation="2">
      <TechPillContainer
          link="https://github.com/jordybronowicki37/vue-snake"
          :types="['vue', 'typescript', 'personal']"
          background-color="transparent"/>
    </EditorLine>

    <EditorLine :indentation="2"/>
    <EditorLine :indentation="2">
      <ImageTextCombinedView>
        <template #left>
          <h3>Play the famous game of snake</h3>
          <section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos illo quae quaerat rerum. Ea nihil suscipit vel voluptas? Accusamus ad architecto atque autem beatae culpa, delectus deserunt doloremque dolorum fuga incidunt laboriosam magni necessitatibus nisi officiis omnis quae quaerat qui quia quidem quo quos repudiandae soluta suscipit tenetur ullam voluptate.
          </section>
        </template>
        <template #right>
          <img src="/snake-game.png" alt="Snake single-player game preview" class="project-image">
        </template>
      </ImageTextCombinedView>
    </EditorLine>

    <EditorLine :indentation="2"/>
    <EditorLine :indentation="2"/>
    <EditorLine :indentation="2">
      <ImageTextCombinedView>
        <template #left>
          <img src="/snake-levels.png" alt="Snake levels preview" class="project-image">
        </template>
        <template #right>
          <h3>Choose out of a bunch of different levels</h3>
          <section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos illo quae quaerat rerum. Ea nihil suscipit vel voluptas? Accusamus ad architecto atque autem beatae culpa, delectus deserunt doloremque dolorum fuga incidunt laboriosam magni necessitatibus nisi officiis omnis quae quaerat qui quia quidem quo quos repudiandae soluta suscipit tenetur ullam voluptate.
          </section>
        </template>
      </ImageTextCombinedView>
    </EditorLine>

    <EditorLine :indentation="0"/>
    <EditorLine :indentation="0"/>
    <EditorLine :indentation="0"/>
  </Editor>
</template>

<style scoped>
.project-image {
  height: 15rem;
}
</style>