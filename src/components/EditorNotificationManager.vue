<script setup lang="ts">
import EditorNotification from "./EditorNotification.vue";

const uri = location.hostname;
</script>

<template>
  <EditorNotification
    v-if="uri.includes('-dev') || uri.includes('localhost')"
    type="WARNING"
  >
    <div id="test-build-message">
      <p>
        You are currently visiting a test build.
      </p>
      <a href="https://jordy-bronowicki-portfolio.onrender.com/">
        production build
      </a>
    </div>
  </EditorNotification>
</template>

<style scoped>
#test-build-message {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
}
#test-build-message p {
  color: #000;
}
#test-build-message a {
  color: #3574f0;
}
#test-build-message a:hover {
  color: #9c58fc;
}
</style>