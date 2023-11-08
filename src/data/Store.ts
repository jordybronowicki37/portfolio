import {reactive} from "vue";

export enum Themes {
  "default" = "default",
  "dark-blue" = "dark-blue",
  "light" = "light",
}

export const store = reactive<{theme: Themes}>({
  theme: Themes.default
})
