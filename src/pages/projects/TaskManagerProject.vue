<script setup lang="ts">
import Editor from "../../components/Editor.vue";
import EditorLine from "../../components/EditorLine.vue";
import ImageTextCombinedView from "../../components/ImageTextCombinedView.vue";
import TechPillContainer from "../../components/TechPillContainer.vue";
</script>

<template>
  <Editor>
    <EditorLine :indentation="0"/>
    <EditorLine :indentation="0"/>
    <EditorLine :indentation="1">
      <h2>Project: Task Manager</h2>
    </EditorLine>
    <EditorLine :indentation="1">
      <TechPillContainer
          :types="['java', 'spring', 'postgresql', 'aws', 'react', 'typescript', 'sass', 'school']"/>
    </EditorLine>

    <EditorLine :indentation="2"/>
    <EditorLine :indentation="2">
      <ImageTextCombinedView>
        <template #left>
          <div class="text-section">
            <h3>Manage task inside of a board</h3>
            <section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos illo quae quaerat rerum. Ea nihil suscipit vel voluptas? Accusamus ad architecto atque autem beatae culpa, delectus deserunt doloremque dolorum fuga incidunt laboriosam magni necessitatibus nisi officiis omnis quae quaerat qui quia quidem quo quos repudiandae soluta suscipit tenetur ullam voluptate.
            </section>
          </div>
        </template>
        <template #right>
          <img src="/tas-board.png" alt="Tasks inside of a board example" class="project-image">
        </template>
      </ImageTextCombinedView>
    </EditorLine>

    <EditorLine :indentation="2"/>
    <EditorLine :indentation="2"/>
    <EditorLine :indentation="2">
      <ImageTextCombinedView>
        <template #left>
          <img src="/tas-edit-task.png" alt="Edit task properties" class="project-image">
        </template>
        <template #right>
          <div class="text-section">
            <h3>Assign certain tags or users to organize tasks</h3>
            <section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos illo quae quaerat rerum. Ea nihil suscipit vel voluptas? Accusamus ad architecto atque autem beatae culpa, delectus deserunt doloremque dolorum fuga incidunt laboriosam magni necessitatibus nisi officiis omnis quae quaerat qui quia quidem quo quos repudiandae soluta suscipit tenetur ullam voluptate.
            </section>
          </div>
        </template>
      </ImageTextCombinedView>
    </EditorLine>

    <EditorLine :indentation="1"/>
    <EditorLine :indentation="0"/>
    <EditorLine :indentation="0"/>
  </Editor>
</template>

<style scoped>
.project-image {
  height: 15rem;
  width: 100%;
  object-fit: contain;
}

</style>