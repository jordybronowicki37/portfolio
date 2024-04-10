import {reactive} from "vue";

export enum Themes {
  "default" = "default",
  "dark-blue" = "dark-blue",
  "light" = "light",
}

export const LightThemes = [Themes.light];
export const DarkThemes = [Themes.default, Themes["dark-blue"]];

export const store = reactive<{theme: Themes}>({
  theme: Themes.default
})
