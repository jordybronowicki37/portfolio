<script setup lang="ts">

</script>

<template>
  <div class="quote">
    <div class="quote-start-transition"/>
    <div class="quote-content">
      <q>The only way to do great work is to love what you do.</q>
      <p>- Steve Jobs</p>
    </div>
    <div class="quote-end-transition"/>
  </div>
</template>

<style scoped>
.quote {
  --quote-color: #705499;
}

.quote-content {
  padding: 5rem 0;
  text-align: center;
  background-color: var(--quote-color);
}

.quote-start-transition {
  height: 5rem;
  background: linear-gradient(0deg, var(--quote-color), #0000);
}

.quote-end-transition {
  height: 5rem;
  background: linear-gradient(180deg, var(--quote-color), #0000);
}
</style>