<script setup lang="ts">
defineProps<{indentation: number}>()
</script>

<template>
  <div class="editor-line">
    <span class="line-number"/>
    <span class="line-indentation" :key="i" v-for="i in indentation"/>
    <div class="line-content">
      <slot/>
    </div>
  </div>
</template>

<style scoped>
.editor-line {
  display: flex;
}

#editor .editor-line:last-child {
  flex-grow: 2;
}

.line-number::before {
  counter-increment: line-number;
  content: counter(line-number);
  display: inline-block;
  text-align: right;
  color: #999;
  background: #333;
  border-right: 2px solid #555;
  height: 100%;
  width: 2em;
  padding-left: 0.2rem;
  padding-right: 0.5rem;
}

.line-indentation {
  border-right: 1px solid white;
  min-width: 10px;
  min-height: 1em;
}

.line-content {
  margin-left: 10px;
  padding-right: 1rem;
}
</style>