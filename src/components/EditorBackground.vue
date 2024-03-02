<script setup lang="ts">

</script>

<template>
  <div class="editor-background">
    <div class="icon-wrapper">
      <div class="polygon"/>
      <div class="strike-line"/>
      <div class="letter-j">J</div>
      <div class="letter-b">B</div>
    </div>
  </div>
</template>

<style scoped>
.editor-background {
  grid-column: 1;
  grid-row: 1;
  display: grid;
  place-content: center;
  overflow: hidden;
}
.icon-wrapper {
  height: 40vw;
  width: 40vw;
  position: relative;
  display: grid;
  place-content: center;
}
.polygon {
  width: inherit;
  height: inherit;
  background-color: var(--bg-color-700);
  clip-path: polygon(46% 6%, 99% 9%, 87% 76%, 50% 100%, 3% 77%, 9% 28%);
  position: absolute;
}
.strike-line {
  width: 60vw;
  height: 6vw;
  background-color: var(--bg-color-800);
  position: absolute;
  rotate: 115deg;
  top: 20vw;
  left: -12vw;
}
.letter-j, .letter-b {
  position: absolute;
  color: var(--bg-color-800);
  font-size: 23vw;
  font-weight: bold;
  font-family: sans-serif;
  user-select: none;
}
.letter-j {
  top: 3vw;
  left: 6vw;
}
.letter-b {
  top: 9vw;
  left: 18vw;
}
</style>