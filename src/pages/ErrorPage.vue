<script setup lang="ts">
import Editor from "../components/Editor.vue";

</script>

<template>
  <Editor>
    <div class="content-wrapper">
      <div>
        <p class="not-found-code">
          404
        </p>
        <p class="not-found-message">
          &lt;PAGE-NOT-FOUND/&gt;
        </p>
      </div>
    </div>
  </Editor>
</template>

<style scoped>
.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}
.not-found-code {
  color: #8f1e1e;
  font-size: 80px;
  font-weight: 700;
}
.not-found-message {
  font-size: 32px;
  font-weight: 600;
}
</style>