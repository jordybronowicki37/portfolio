import {reactive} from "vue";
import {CustomTheme} from "./Models";

export const CURRENT_THEME_KEY = "THEME";
export const CUSTOM_THEMES_KEY = "CUSTOM_THEMES";
export const HIDE_ONBOARDING_KEY = "HIDE_ONBOARDING";

export enum Themes {
  "dark" = "dark-theme",
  "blue" = "blue-theme",
  "light" = "light-theme",
}

export type StoreTypes = {
  theme: string,
  startOnboarding: boolean,
  customThemes: CustomTheme[],
}
export const store = reactive<StoreTypes>({
  theme: localStorage.getItem(CURRENT_THEME_KEY) || Themes.dark,
  startOnboarding: localStorage.getItem(HIDE_ONBOARDING_KEY) !== "true",
  customThemes: JSON.parse(localStorage.getItem(CUSTOM_THEMES_KEY) || "[]"),
})
