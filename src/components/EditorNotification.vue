<script setup lang="ts">
import {NotificationTypes} from "../data/Models";
import {ref} from "vue";

defineProps<{
  type: NotificationTypes
}>();
const visible = ref(true);
</script>

<template>
  <div
    v-if="visible"
    class="editor-notification"
    :class="`editor-notification-type-${type}`"
  >
    <div class="editor-notification-icon">
      <box-icon
        v-if="type === 'INFO'"
        name="info-circle"
        title="Info"
        size="1em"
        color="#000"
      />
      <box-icon
        v-if="type === 'WARNING'"
        name="error"
        title="Warning"
        size="1em"
        color="#000"
      />
      <box-icon
        v-if="type === 'ERROR'"
        name="error-circle"
        title="Error"
        size="1em"
        color="#000"
      />
    </div>

    <div class="editor-notification-content">
      <slot />
    </div>

    <div
      class="editor-notification-close-button"
      title="Close notification"
      @click="visible = false"
    >
      <box-icon
        name="x"
        size="1em"
        color="#000"
      />
    </div>
  </div>
</template>

<style scoped>
.editor-notification {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem;
  border-top: 2px solid;
  border-bottom: 2px solid;
  z-index: 1;
}
.editor-notification-icon {
  height: 1em;
}
.editor-notification-content {
  color: #000;
  flex-grow: 1;
}
.editor-notification-close-button {
  height: 1em;
  cursor: pointer;
}
/*noinspection CssUnusedSymbol*/
.editor-notification-type-INFO {
  background-color: #7185ef;
  border-color: #0522be;
}
/*noinspection CssUnusedSymbol*/
.editor-notification-type-WARNING {
  background-color: #efef59;
  border-color: #6c6c04;
}
/*noinspection CssUnusedSymbol*/
.editor-notification-type-ERROR {
  background-color: #f35565;
  border-color: #af0518;
}
</style>