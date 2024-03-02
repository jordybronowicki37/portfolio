<script setup lang="ts">
defineProps<{indentation: number}>();
</script>

<template>
  <div class="editor-line">
    <span class="line-number" />
    <span
      v-for="i in indentation"
      :key="i"
      class="line-indentation"
    />
    <div class="line-content">
      <slot />
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
  color: var(--secondary-color);
  background: var(--bg-color-600);
  border-right: 1px solid var(--secondary-color);
  height: 100%;
  width: 2em;
  padding-left: 0.2rem;
  padding-right: 0.5rem;
}

.line-indentation {
  border-right: 1px solid var(--secondary-color);
  min-width: 10px;
  min-height: 1em;
}

.line-content {
  padding-left: 10px;
  padding-right: 10px;
  flex-grow: 1;
}

@media screen and (max-width: 600px) {
  .line-number::before {
    width: 1em;
  }
  .line-indentation {
    min-width: 5px;
  }
  .line-content {
    padding-left: 5px;
    padding-right: 5px;
  }
}
</style>