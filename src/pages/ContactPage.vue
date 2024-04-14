<script setup lang="ts">

import Editor from "../components/Editor.vue";
import EditorLine from "../components/EditorLine.vue";
</script>

<template>
  <Editor>
    <EditorLine :indentation="0" />
    <EditorLine :indentation="0" />
    <EditorLine :indentation="0">
      <h2>Contact</h2>
    </EditorLine>
    <EditorLine :indentation="1">
      Reach out and let's build something cool.
    </EditorLine>
    <EditorLine :indentation="2" />

    <EditorLine :indentation="2">
      <div class="contact-info-line">
        <div class="contact-item-icon-wrapper">
          <box-icon
            color="var(--font-color-200)"
            size="2em"
            type="solid"
            name="map"
          />
        </div>
        <p>Netherlands</p>
      </div>
    </EditorLine>
    <EditorLine :indentation="2">
      <div class="contact-info-line">
        <div class="contact-item-icon-wrapper">
          <box-icon
            color="var(--font-color-200)"
            size="2em"
            type="logo"
            name="linkedin-square"
          />
        </div>
        <a
          href="https://www.linkedin.com/in/jordy-bronowicki/"
          target="_blank"
        >jordy-bronowicki</a>
      </div>
    </EditorLine>
    <EditorLine :indentation="2">
      <div class="contact-info-line">
        <div class="contact-item-icon-wrapper">
          <box-icon
            color="var(--font-color-200)"
            size="2em"
            type="logo"
            name="github"
          />
        </div>
        <a
          href="https://github.com/jordybronowicki37"
          target="_blank"
        >jordybronowicki37</a>
      </div>
    </EditorLine>
    <EditorLine :indentation="2">
      <div class="contact-info-line">
        <div class="contact-item-icon-wrapper">
          <box-icon
            color="var(--font-color-200)"
            size="2em"
            type="solid"
            name="envelope"
          />
        </div>
        <a
          href="mailto:jordybronowicki37@gmail.com"
          target="_blank"
        >jordybronowicki37@gmail.com</a>
      </div>
    </EditorLine>
    <EditorLine :indentation="2" />

    <EditorLine :indentation="1" />
    <EditorLine :indentation="0" />
  </Editor>
</template>

<style scoped>
.contact-info-line {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.3rem 0;
}

.contact-item-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

a {
  font-size: 1em;
}
</style>