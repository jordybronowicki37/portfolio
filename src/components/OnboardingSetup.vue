<script setup lang="ts">
import {StepEntity, useVOnboarding, VOnboardingWrapper} from "v-onboarding";
import {onMounted, ref} from "vue";
import 'v-onboarding/dist/style.css'
import {bottom, right} from "@popperjs/core";
import {useRoute, useRouter} from "vue-router";

const HIDE_ONBOARDING_KEY = "HIDE_ONBOARDING";
const popperDefaultOptions = {
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 10],
      },
    },
  ],
}
const steps: StepEntity[] = [
  {
    attachTo: {element: '#onboarding-view-home'},
    content: {
      title: "The editor",
      description: "This is the code editor. It shows the content of the individual pages. Each part of the page is located on a separate line as shown with it's line number on the left."
    },
    options: {
      popper: {
        ...popperDefaultOptions,
        placement: bottom,
      }
    }
  },
  {
    attachTo: {element: '#onboarding-view-side-bar'},
    content: {
      title: "File explorer",
      description: "This is where you can find all of the different pages of this website. It follows a file like structure similar to the storage system of a computer."
    },
    options: {
      popper: {
        ...popperDefaultOptions,
        placement: right,
      }
    }
  },
  {
    attachTo: {element: '#onboarding-view-side-bar .folder-item-projects'},
    content: {
      title: "My projects",
      description: "Here you can find my projects. Feel free to explore the folder however you want!"
    },
    on: {
      async afterStep(options) {
        if (!options || options.isBackward) return;
        await router.push({name: "projects"});
      },
    },
    options: {
      popper: {
        ...popperDefaultOptions,
        placement: "right-start",
      }
    }
  },
  {
    attachTo: {element: '#onboarding-view-projects'},
    content: {
      title: "Filter projects",
      description: "Here you can filter and search in my collection of projects. Some of them are personal while others I have worked on during my education. Have fun exploring!"
    },
    on: {
      afterStep(options) {
        if (!options || options.isForward) return;
        router.back();
      },
    },
    options: {
      popper: {
        ...popperDefaultOptions,
        placement: bottom,
      }
    }
  },
  {
    attachTo: {element: '#tabs-container'},
    content: {
      title: "Recently opened files",
      description: "Want to revisit a previous page? Here you can quickly access your most recently visited pages."
    },
    options: {
      popper: {
        ...popperDefaultOptions,
        placement: bottom,
      }
    }
  },
  {
    attachTo: {element: '#editor-settings-button'},
    content: {
      title: "Editor settings",
      description: "Here you can customize the editor with a different theme, create your own theme or revisit this tutorial."
    },
    options: {
      popper: {
        ...popperDefaultOptions,
        placement: 'top-end',
      }
    }
  },
]
const router = useRouter();
const route = useRoute();
const dialog = ref<HTMLDialogElement>();
const wrapper = ref(null);
const {start} = useVOnboarding(wrapper);

async function StartOnboarding() {
  localStorage.setItem(HIDE_ONBOARDING_KEY, "true");
  if (!dialog.value) return;
  dialog.value.close();
  if (route.name !== "home") await router.replace({name: "home"});
  start();
}

function SkipOnboarding() {
  localStorage.setItem(HIDE_ONBOARDING_KEY, "true");
  if (!dialog.value) return;
  dialog.value.close();
}

onMounted(() => {
  if (localStorage.getItem(HIDE_ONBOARDING_KEY) === "true") return;
  if (!dialog.value) return;
  dialog.value.showModal();
});
</script>

<template>
  <VOnboardingWrapper
    ref="wrapper"
    :steps="steps"
    :options="{}"
  />
  <dialog
    ref="dialog"
    class="onboarding-starting-dialog"
  >
    <header>Welcome!</header>
    <section>
      <p>It looks like this is your first time visiting. Would you like to get a tour of this website?</p>
    </section>
    <footer>
      <button
        class="skip-btn"
        @click="SkipOnboarding"
      >
        Skip
      </button>
      <button
        class="start-btn"
        @click="StartOnboarding"
      >
        Start
      </button>
    </footer>
  </dialog>
  <slot />
</template>

<style scoped>
.onboarding-starting-dialog {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--bg-color-600);
  border: none;
  border-radius: .375rem;
  padding: 1rem;
  width: 20rem;
}
.onboarding-starting-dialog:focus-visible {
  outline: none;
}
.onboarding-starting-dialog::backdrop {
  background-color: #00000080;
}
.onboarding-starting-dialog header {
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.5;
}
.onboarding-starting-dialog section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.onboarding-starting-dialog section p {
  font-size: .875rem;
  color: var(--font-color-400);
}
.onboarding-starting-dialog footer {
  display: flex;
  gap: 1rem;
}
.onboarding-starting-dialog button {
  box-shadow: 0 1px 2px #0000000d;
  padding: .5rem 1.25rem;
  border-radius: 9999px;
  cursor: pointer;
  flex-grow: 1;
}
.skip-btn {
  background-color: transparent;
  border: 1px solid var(--font-color-200);
}
.skip-btn:hover {
  background-color: var(--bg-color-800);
  opacity: 0.8;
}
.start-btn {
  background-color: var(--accent-color);
  border: transparent;
}
.start-btn:hover {
  opacity: 0.7;
}
</style>

<!--suppress CssUnusedSymbol -->
<style>
[data-v-onboarding-wrapper] {
  --v-onboarding-step-arrow-background: var(--bg-color-600);
}
.v-onboarding-item {
  background-color: var(--bg-color-600) !important;
}
.v-onboarding-btn-primary {
  background-color: var(--accent-color) !important;
  color: var(--font-color-200) !important;
}
.v-onboarding-btn-primary:hover {
  opacity: 0.7;
}
.v-onboarding-btn-secondary {
  color: var(--font-color-200) !important;
}
.v-onboarding-btn-secondary:hover {
  background-color: var(--bg-color-800) !important;
  opacity: 0.8;
}
.v-onboarding-item__description {
  color: var(--font-color-400) !important;
}
.v-onboarding-item__header-close {
  border: 1px solid var(--font-color-200) !important;
  color: var(--font-color-200) !important;
  background-color: var(--bg-color-600) !important;
  cursor: pointer;
}
.v-onboarding-item__header-close:hover {
  background-color: var(--bg-color-700) !important;
}
</style>