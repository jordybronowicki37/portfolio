<script setup lang="ts">
import Editor from "../../components/Editor.vue";
import EditorLine from "../../components/EditorLine.vue";
import ImageTextCombinedView from "../../components/ImageTextCombinedView.vue";
import "./ProjectPage.css";
import ProjectProperties from "../../components/ProjectProperties.vue";
</script>

<template>
  <div class="project-page">
    <Editor>
      <EditorLine :indentation="0" />
      <EditorLine :indentation="0" />
      <EditorLine :indentation="1">
        <h2>Project: Neerslag Radar</h2>
      </EditorLine>
      <EditorLine :indentation="1">
        <div class="tags-wrapper">
          <ProjectProperties
            :languages="['c#', 'typescript', 'html', 'css']"
            :frameworks="['.net', 'angular']"
            type="school/external"
            status="completed"
            :links="[]"
          />
        </div>
      </EditorLine>

      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <ImageTextCombinedView>
          <template #text>
            <div>
              <h3>Make some simple comparisons</h3>
              <section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos illo quae quaerat rerum. Ea nihil suscipit vel voluptas? Accusamus ad architecto atque autem beatae culpa, delectus deserunt doloremque dolorum fuga incidunt laboriosam magni necessitatibus nisi officiis omnis quae quaerat qui quia quidem quo quos repudiandae soluta suscipit tenetur ullam voluptate.
              </section>
            </div>
          </template>
          <template #image>
            <img
              src="/neerslag-radar-basic-views.png"
              alt="Neerslag radar basic view"
              class="project-image"
            >
          </template>
        </ImageTextCombinedView>
      </EditorLine>

      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <ImageTextCombinedView image-on-the-left>
          <template #text>
            <div>
              <h3>Or have a lot of complex views</h3>
              <section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos illo quae quaerat rerum. Ea nihil suscipit vel voluptas? Accusamus ad architecto atque autem beatae culpa, delectus deserunt doloremque dolorum fuga incidunt laboriosam magni necessitatibus nisi officiis omnis quae quaerat qui quia quidem quo quos repudiandae soluta suscipit tenetur ullam voluptate.
              </section>
            </div>
          </template>
          <template #image>
            <img
              src="/neerslag-radar-complex-views.png"
              alt="Neerslag radar complex view"
              class="project-image"
            >
          </template>
        </ImageTextCombinedView>
      </EditorLine>

      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <ImageTextCombinedView>
          <template #text>
            <div>
              <h3>Save multiple configurations</h3>
              <section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos illo quae quaerat rerum. Ea nihil suscipit vel voluptas? Accusamus ad architecto atque autem beatae culpa, delectus deserunt doloremque dolorum fuga incidunt laboriosam magni necessitatibus nisi officiis omnis quae quaerat qui quia quidem quo quos repudiandae soluta suscipit tenetur ullam voluptate.
              </section>
            </div>
          </template>
          <template #image>
            <img
              src="/neerslag-radar-configs.png"
              alt="Neerslag radar configurations"
              class="project-image"
            >
          </template>
        </ImageTextCombinedView>
      </EditorLine>

      <EditorLine :indentation="2" />
      <EditorLine :indentation="1" />
      <EditorLine :indentation="0" />
      <EditorLine :indentation="0" />
    </Editor>
  </div>
</template>

<style scoped>

</style>