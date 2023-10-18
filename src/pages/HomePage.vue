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
      <h2>Hello there</h2>
    </EditorLine>
    <EditorLine :indentation="4">
      <p>Welcome to my portfolio website.</p>
    </EditorLine>

    <EditorLine :indentation="3"/>
    <EditorLine :indentation="3">
      <h3>Project intentions</h3>
    </EditorLine>
    <EditorLine :indentation="4">
      <p>
        The intention behind my portfolio project is to show non-programmers what the world of programming looks like.
        This is achieved by designing the entire project around a <b>code editor</b>. The <b>code editor</b> is one
        of the most important tools inside of a programmer's arsenal. Every page of my portfolio is designed to look
        like a file. All pages can be found by using the file explorer on the left of the editor.
      </p>
    </EditorLine>
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
h2 {
  font-size: xx-large;
}
</style>