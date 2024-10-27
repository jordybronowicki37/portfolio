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
        <h2>Project: Mining Game - Map Generation</h2>
      </EditorLine>
      <EditorLine :indentation="1">
        <div class="tags-wrapper">
          <ProjectProperties
            :frameworks="['wpf']"
            :languages="['c#']"
            :integrations="['unity']"
            type="group"
            :group-size="5"
            status="in progress"
          />
        </div>
      </EditorLine>

      <section>
        <EditorLine :indentation="2" />
        <EditorLine :indentation="2">
          <h3 class="text-only-section">
            Project intentions
          </h3>
        </EditorLine>
        <EditorLine :indentation="2">
          <p class="text-only-section">
            Me and my friend group wanted to create a fun game in which you would compete in mining for resources.
            My task was to create the procedural map generation. This is a small overview of the development process
            behind this task. First I created a simplified representation using WPF and then ported the generation
            logic to the game engine Unity.
          </p>
        </EditorLine>
      </section>

      <section>
        <EditorLine :indentation="2" />
        <EditorLine :indentation="2">
          <ImageTextCombinedView
            image-title="Mining game first iteration of cave generation"
            image-description="A 2D overview of the cave generation"
          >
            <template #text>
              <div>
                <h3>First iteration of cave generation</h3>
                <p>
                  This is the first iteration of the cave generation.
                  Here you can see that in the center of the map a treasure room is located and in each of the corners is a base located.
                  From each of the four bases, I draw a random path towards the center of the map.
                  During the generation of the path, the algorithm uses weights that guide it towards a certain goal.
                  In this case the goal would be to reach the center of the map.
                  But as you can see not all the paths reach the center of the map.
                  This is because we wanted to add dead-ends. To achieve this we added a randomized limit to the path length.
                  Some paths are also colored red with a symbol inside of it.
                  This represents mine cart tracks.
                  The symbol visualizes the type of track and its orientation.
                  The track types are: Straight, Curve, Switch, Intersection and End.
                </p>
              </div>
            </template>
            <template #image>
              <img
                src="/mining-game-map-gen-flat-1.png"
                alt="Mining game map generation topdown overview"
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
            image-title="Mining game cave generation with added resources"
            image-description="A 2D overview of the cave generation with added resources."
          >
            <template #text>
              <div>
                <h3>Added resources to cave generation</h3>
                <p>
                  In this second iteration of the cave generation, I have added resource generation.
                  There are 5 different resources: Coal, Copper, Iron, Gold and Uranium.
                  The rarity of a resource is also in this order, with the Coal being the most common and the Uranium being the most rare.
                  Rare resources can only spawn far from each base while common resources can spawn pretty close.
                </p>
              </div>
            </template>
            <template #image>
              <img
                src="/mining-game-map-gen-flat-2.png"
                alt="Mining game map generation topdown overview with resource generation"
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
            image-title="Mining game cave generation with 3D blocks"
            image-description="A basic 3D overview of the cave generation."
          >
            <template #text>
              <div>
                <h3>The first adaptation of the map generation with 3D blocks</h3>
                <p>
                  This is my first attempt at translating the 2D generation to becoming 3D.
                  We simply removed the 2D WPF interface and moved the generation logic to the Unity game engine in
                  which we place the relevant blocks in a grid.
                </p>
              </div>
            </template>
            <template #image>
              <img
                src="/mining-game-map-gen-3d-1.png"
                alt="Mining game map generation topdown overview with 3D blocks"
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
            image-title="Mining game cave generation with 3D blocks"
            image-description="A 3D overview of the cave generation."
          >
            <template #text>
              <div>
                <h3>The second iteration of the map generation with 3D blocks</h3>
                <p>
                  The generation now includes a large floor tile, no spacing between blocks and a border around the map.
                  Also the bases are added with a distinguishable floor tile color.
                </p>
              </div>
            </template>
            <template #image>
              <img
                src="/mining-game-map-gen-3d-2.png"
                alt="Mining game map generation topdown overview with 3D blocks"
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
            image-title="Mining game cave generation with 3D blocks and the first tracks"
            image-description="A 3D overview of the cave and tracks generation."
          >
            <template #text>
              <div>
                <h3>The mine cart tracks are in!</h3>
                <p>
                  This version now has mine cart tracks implemented.
                  For the time being these are only decorational, but in the future we will make them functional.
                </p>
              </div>
            </template>
            <template #image>
              <img
                src="/mining-game-map-gen-tracks-1.png"
                alt="Mining game map generation topdown overview with 3D blocks and tracks"
                class="project-image"
              >
            </template>
          </ImageTextCombinedView>
        </EditorLine>
      </section>

      <EditorLine :indentation="2" />
      <EditorLine :indentation="2">
        <p class="to-be-expanded">
          To be expanded!
        </p>
      </EditorLine>

      <EditorLine :indentation="2" />
      <EditorLine :indentation="1" />
      <EditorLine :indentation="0" />
      <EditorLine :indentation="0" />
    </Editor>
  </div>
</template>

<style scoped>
.to-be-expanded {
  text-align: center;
}
</style>