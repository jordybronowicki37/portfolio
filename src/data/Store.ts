import {reactive} from "vue";

export const HIDE_ONBOARDING_KEY = "HIDE_ONBOARDING";

export enum Themes {
  "default" = "default",
  "dark-blue" = "dark-blue",
  "light" = "light",
}
export const LightThemes = [Themes.light];
export const DarkThemes = [Themes.default, Themes["dark-blue"]];

export type StoreTypes = {
  theme: Themes,
  startOnboarding: boolean
}
export const store = reactive<StoreTypes>({
  theme: Themes.default,
  startOnboarding: localStorage.getItem(HIDE_ONBOARDING_KEY) !== "true",
})
