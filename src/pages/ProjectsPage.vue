<script setup lang="ts">
import Editor from "../components/Editor.vue";
import EditorLine from "../components/EditorLine.vue";
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
    <EditorLine :indentation="1">
      <h2>Production Calculator</h2>
    </EditorLine>
    <EditorLine :indentation="2">
      <p>Project intro</p>
    </EditorLine>
    <EditorLine :indentation="1"/>
    <EditorLine :indentation="1">
      <h2>Snake game</h2>
    </EditorLine>
    <EditorLine :indentation="2">
      <p>Project intro</p>
    </EditorLine>
    <EditorLine :indentation="1"/>
    <EditorLine :indentation="0"/>
  </Editor>
</template>

<style scoped>

</style>