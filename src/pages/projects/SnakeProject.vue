<script setup lang="ts">
import EditorLine from "../../components/EditorLine.vue";
import Editor from "../../components/Editor.vue";
</script>

<template>
  <Editor>
    <EditorLine :indentation="0"/>
    <EditorLine :indentation="0"/>
    <EditorLine :indentation="1">
      <h1>Snake game</h1>
    </EditorLine>
    <EditorLine :indentation="2"/>
    <EditorLine :indentation="0"/>
    <EditorLine :indentation="0"/>
    <EditorLine :indentation="0"/>
  </Editor>
</template>

<style scoped>
h1 {
  margin: 0;
}
p {
  margin: 0;
}
</style>