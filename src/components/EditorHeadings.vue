<script setup lang="ts">
import {useRoute} from "vue-router";

const route = useRoute();
const headings = document.querySelectorAll('#editor-lines-wrapper h1,#editor-lines-wrapper h2,#editor-lines-wrapper h3,#editor-lines-wrapper h4');

type headerItem = {
  id: string;
  text: string;
  element: Element;
  prefixes: ('  ' | 'I ' | ' L' | 'IL')[]
}

const headerItems: headerItem[] = []
for (let i = 0; i < headings.length; i++) {
  const element = headings[headings.length - i - 1];
  const headingIndex = parseInt(element.nodeName[1]);
  const previousElement = headings[headings.length - i] ?? null;
  const previousHeadingIndex = previousElement ? parseInt(previousElement.nodeName[1]) : null;
  const hasHigherElementAfter = [...headings.values()].splice(headings.length - i).find(n => headingIndex > parseInt(n.nodeName[1])) !== undefined;
  const hasSameElementAfter = [...headings.values()].splice(headings.length - i).find(n => element.nodeName === n.nodeName) !== undefined;

  console.log({
    selectedElements: [...headings.values()].splice(headings.length - i),
    element,
    headingIndex,
    previousHeadingIndex,
  });

  let prefixes: headerItem['prefixes'] = [];
  if (headingIndex === 2) {
    if (previousHeadingIndex === 2 || hasSameElementAfter) {
      prefixes = ['IL']
    } else {
      prefixes = [' L']
    }
  } else if (headingIndex === 3) {
    const passThroughPrefix = hasHigherElementAfter ? 'I ' : '  '
    if (previousHeadingIndex === 3) {
      prefixes = [passThroughPrefix, 'IL']
    } else {
      prefixes = [passThroughPrefix, ' L']
    }
  }

  headerItems.push({
    id: element.id,
    text: element.textContent?.replace(/^\s*#+\s/, '') ?? 'UNKNOWN',
    element,
    prefixes
  });
}
headerItems.reverse();
</script>

<template>
  <div class="editor-headings">
    <div
      class="editor-heading-entry"
      v-for="heading in headerItems"
      :key="heading.text"
    >
      <div
        v-for="prefix in heading.prefixes"
        class="heading-prefix"
      >
        <div :class="{ 'active': prefix[0] === 'I' }" class="straight-prefix"></div>
        <div :class="{ 'active': prefix[1] === 'L' }" class="curve-prefix"></div>
      </div>
      <router-link
        :to="`${route.path}#${heading.id}`"
      >
        {{ heading.text }}
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.editor-headings {
  --editor-heading-size: 2ch;
  display: flex;
  flex-direction: column;
  a {
    white-space: nowrap;
    font-size: var(--editor-heading-size);
    margin-left: 4px;
  }
  .heading-H1 {
  }
  .heading-H2 {
  }
  .heading-H3 {
  }
  .heading-H4 {
  }
  .editor-heading-entry {
    display: flex;
  }
  .heading-prefix {
    width: var(--editor-heading-size);
    height: var(--editor-heading-size);
    position: relative;
    flex-shrink: 0;
  }
  .straight-prefix {
    width: calc(var(--editor-heading-size)/2);
    height: calc(var(--editor-heading-size) + 3px);
    position: absolute;
    top: 0;
    left: 0;
    &.active {
      border-right: 1px solid var(--secondary-color);
    }
  }
  .curve-prefix {
    width: calc(var(--editor-heading-size)/2);
    height: calc(var(--editor-heading-size)/2);
    position: absolute;
    top: 0;
    right: -1px;
    &.active {
      border-left: 1px solid var(--secondary-color);
      border-bottom: 1px solid var(--secondary-color);
      border-bottom-left-radius: 5px;
    }
  }
}
</style>
