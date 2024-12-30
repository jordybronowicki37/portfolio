import {reactive} from "vue";

export const HIDE_ONBOARDING_KEY = "HIDE_ONBOARDING";

export enum Themes {
  "dark" = "dark",
  "blue" = "blue",
  "light" = "light",
}

export type StoreTypes = {
  theme: Themes,
  startOnboarding: boolean
  theme: string,
  startOnboarding: boolean,
}
export const store = reactive<StoreTypes>({
  theme: localStorage.getItem(CURRENT_THEME_KEY) || Themes.dark,
  startOnboarding: localStorage.getItem(HIDE_ONBOARDING_KEY) !== "true",
})
