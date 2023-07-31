<script setup lang="ts">
import Editor from "../components/Editor.vue";
import EditorLine from "../components/EditorLine.vue";
</script>

<template>
  <Editor>
    <EditorLine :indentation="0"/>
    <EditorLine :indentation="0"/>
    <EditorLine :indentation="0"/>
    <EditorLine :indentation="0"/>
    <EditorLine :indentation="1"/>
    <EditorLine :indentation="2"/>
    <EditorLine :indentation="3"/>
    <EditorLine :indentation="3">
      <h1>Hello there</h1>
    </EditorLine>
    <EditorLine :indentation="3">
      <p>Welcome to my portfolio website.</p>
    </EditorLine>
    <EditorLine :indentation="3">
      <p>With the design of this website I want to show non programmers what the world of programming looks like.</p>
    </EditorLine>
    <EditorLine :indentation="3"/>
    <EditorLine :indentation="3"/>
    <EditorLine :indentation="2"/>
    <EditorLine :indentation="1"/>
    <EditorLine :indentation="0"/>
    <EditorLine :indentation="0"/>
    <EditorLine :indentation="0"/>
    <EditorLine :indentation="0"/>
  </Editor>
</template>

<style scoped>

</style>