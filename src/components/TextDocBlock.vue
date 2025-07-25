<script setup lang="ts">
defineProps<{text: string}>()
</script>

<template>
  <section>
    <div>/**</div>
    <div class="text-wrapper">
      <div class="star-decoration-wrapper">
        <div
          v-for="i in 20"
          :key="i"
        >
          &nbsp;*&nbsp;
        </div>
      </div>
      <p>{{ text }}</p>
    </div>
    <div>&nbsp;*/</div>
  </section>
</template>

<style scoped>
div, p, span {
  color: #5c7e67;
  font-family: monospace;
}
p {
  font-style: italic;
  flex-grow: 1;
}
.text-wrapper {
  display: flex;
  overflow: hidden;
}
.star-decoration-wrapper {
  display: flex;
  flex-direction: column;
  width: max-content;
  height: 1em;
}
</style>
