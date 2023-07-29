<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="grid">
      <div class="title centered-content">
        <h2>Production Calculator</h2>
      </div>

      <div class="screen1">
        <img src="/prod-cal-editor.png" alt="Flow-chart editor preview">
      </div>

      <div class="screen2">
        <img src="/prod-cal-projects.png" alt="Projects page preview">
      </div>

      <div class="tag1 centered-content">
        <box-icon type='logo' name='react' color="#ffffffde" size="6rem"/>
      </div>

      <div class="tag2 centered-content">

      </div>

      <div class="tag3 centered-content">
        <a href="https://github.com/jordybronowicki37/productionCalculator">
          <box-icon type="logo" name="github" color="#ffffffde" size="6rem"/>
        </a>
      </div>
      <div class="extra">

      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 8rem 3rem;
  background-blend-mode: multiply;
  background-image:
      radial-gradient(circle at center center, #705499, #242424),
      repeating-radial-gradient(circle at center center, #705499, #705499 0, transparent 20px, transparent 10px);
}

.grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
      'title title title title screen1 screen1 screen1'
      'tag1 screen2 screen2 screen2 screen1 screen1 screen1'
      'tag2 screen2 screen2 screen2 tag3 extra extra';
  aspect-ratio: 7 / 3;
}

.grid div {
  background: #444;
  border-radius: 1rem;
  margin: 0.5rem;
  overflow: hidden;
}

.title {
  grid-area: title;
  font-size: 1.7rem;
}

.title h2 {
  margin: 0;
}

.screen1 {
  grid-area: screen1;
}

.screen2 {
  grid-area: screen2;
}

.tag1 {
  grid-area: tag1;

}

.tag2 {
  grid-area: tag2;

}

.tag3 {
  grid-area: tag3;
}

.extra {
  grid-area: extra;
}

.extra a {
  color: inherit;
}

.centered-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  object-fit: cover;
  width: 100%;
}
</style>