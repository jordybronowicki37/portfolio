<script setup lang="ts">
import {ref} from "vue";
import {FOUND_BUGS_KEY, store} from "../data/Store.ts";

const { bugType, preview = false } = defineProps<{ bugType: number, preview?: boolean }>();
const completed = ref<boolean>(store.bugsCompleted.includes(bugType));
function complete(): void {
  if (!store.bugsCompleted.includes(bugType) && preview) {
    store.bugsCompleted.push(bugType);
    localStorage.setItem(FOUND_BUGS_KEY, JSON.stringify(store.bugsCompleted))
  }
  completed.value = true;
}
</script>

<template>
  <div
    v-if="bugType <= 10 && (preview || !completed)"
    class="bug-wrapper"
    :class="[`bug-${bugType}`]"
  >
    <div
      class="bug-distort-wrapper"
      @click="complete"
    >
      <box-icon
        type="solid"
        name="bug"
        color="var(--error-color)"
      />
    </div>
  </div>

  <div
    v-else-if="bugType > 10"
    class="eating-bug-wrapper"
    :class="[`bug-${bugType}`]"
  >
    <div
      v-if="preview || !completed"
      class="bug-wrapper eating-bug"
    >
      <div
        class="bug-distort-wrapper"
        @click="complete"
      >
        <box-icon
          type="solid"
          name="bug"
          color="var(--error-color)"
        />
      </div>
    </div>
    <div
      class="slot-wrapper"
      :class="[preview || !completed ? 'slot-distort-wrapper' : '']"
    >
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bug-wrapper {
  width: 20px;
  height: 30px;
  cursor: pointer;
  transform-origin: center;
}
.slot-wrapper {
  position: relative;
  z-index: 1;
}
.eating-bug-wrapper {
  position: relative;
  z-index: 0;
}
.eating-bug {
  position: absolute;
}

/* ========= Animations ========= */
/* Flying Patterns */
@keyframes hover {
  0%   { transform: translate(0,0) rotate(0deg); }
  20%  { transform: translate(15px,-5px) rotate(5deg); }
  40%  { transform: translate(-10px,10px) rotate(-5deg); }
  60%  { transform: translate(20px,5px) rotate(3deg); }
  80%  { transform: translate(-5px,-15px) rotate(-8deg); }
  100% { transform: translate(0,0) rotate(0deg); }
}
@keyframes zigzag {
  0%   { transform: translate(0,0) rotate(0deg); }
  25%  { transform: translate(20px,10px) rotate(10deg); }
  50%  { transform: translate(-15px,20px) rotate(-10deg); }
  75%  { transform: translate(25px,-10px) rotate(15deg); }
  100% { transform: translate(0,0) rotate(0deg); }
}
@keyframes loop {
  0%   { transform: translate(0,0) rotate(0deg); }
  25%  { transform: translate(15px,15px) rotate(90deg); }
  50%  { transform: translate(0,30px) rotate(180deg); }
  75%  { transform: translate(-15px,15px) rotate(270deg); }
  100% { transform: translate(0,0) rotate(360deg); }
}
@keyframes jittery {
  0%,100% { transform: translate(0,0); }
  25% { transform: translate(2px,-2px); }
  50% { transform: translate(-3px,1px); }
  75% { transform: translate(1px,3px); }
}

/* Glitch */
@keyframes glitch {
  0%, 96%, 100% { filter: none; }
  97% { filter: hue-rotate(180deg) brightness(2); }
  99% { filter: invert(1) contrast(2); }
}

/* Distort */
@keyframes distort {
  0%, 95%, 100% { transform: scale(1) skew(0deg,0deg); filter: none; }
  96% { transform: scale(1.1,0.9) skew(10deg,2deg); filter: blur(1px); }
  97% { transform: scale(0.9,1.1) skew(-10deg,-3deg); filter: contrast(2); }
  98% { transform: scale(1.05) skew(5deg,-5deg); filter: hue-rotate(180deg); }
  99% { transform: scale(1) skew(0deg,0deg); filter: none; }
}

/* Eating Animations */
@keyframes nibble {
  0%,100% { transform: scale(1) translateY(0); }
  30% { transform: scale(1.1) translateY(-2px); }
  60% { transform: scale(0.9) translateY(1px); }
}
@keyframes munch {
  0%,100% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(-5deg); }
  75% { transform: rotate(3deg); }
}

/* ========= Variants ========= */
.bug-1, .bug-2 {
  animation: hover 4s infinite ease-in-out, glitch 2.5s infinite steps(1);
  .bug-distort-wrapper {
    animation: distort 4.5s infinite steps(1);
  }
}

.bug-3, .bug-4 {
  animation: zigzag 5s infinite ease-in-out, glitch 3s infinite steps(1);
  .bug-distort-wrapper {
    animation: distort 3s infinite steps(1);
  }
}
.bug-5, .bug-6 {
  animation: loop 6s infinite linear, glitch 4.5s infinite steps(1);
  .bug-distort-wrapper {
    animation: distort 2s infinite steps(1);
  }
}

.bug-7, .bug-8 {
  animation: jittery 2s infinite linear, glitch 5s infinite steps(1);
  .bug-distort-wrapper {
    animation: distort 4s infinite steps(1);
  }
}

.bug-9, .bug-10 {
  animation: zigzag 7s infinite ease-in-out, glitch 2.5s infinite steps(1);
  .bug-distort-wrapper {
    animation: distort 5s infinite steps(1);
  }
}

.bug-11 {
  .eating-bug {
    left: 20%;
    top: -13px;
    rotate: -8deg;
    animation: nibble 1s infinite, glitch 1.5s infinite steps(1);
  }
  .bug-distort-wrapper {
    animation: distort 2.5s infinite steps(1);
  }
  .slot-distort-wrapper {
    animation: distort 5s infinite steps(1);
  }
}

.bug-12 {
  .eating-bug {
    left: -8px;
    top: -13px;
    rotate: -30deg;
    animation: munch 1.2s infinite, glitch 2.5s infinite steps(1);
  }
  .bug-distort-wrapper {
    animation: distort 5s infinite steps(1);
  }
  .slot-distort-wrapper {
    animation: distort 4s infinite steps(1);
  }
}

.bug-13, .bug-14 {
  .eating-bug {
    right: -8px;
    top: -13px;
    rotate: 30deg;
    animation: nibble 2s infinite, glitch 3.5s infinite steps(1);
  }
  .bug-distort-wrapper {
    animation: distort 5s infinite steps(1);
  }
  .slot-distort-wrapper {
    animation: distort 3.5s infinite steps(1);
  }
}

.bug-15 {
  .eating-bug {
    right: 30%;
    top: -15px;
    rotate: 10deg;
    animation: munch 1.5s infinite, glitch 4s infinite steps(1);
  }
  .bug-distort-wrapper {
    animation: distort 5s infinite steps(1);
  }
  .slot-distort-wrapper {
    animation: distort 4.5s infinite steps(1);
  }
}
</style>
