import {reactive} from "vue";
import {CustomTheme, EditorTab, ProjectCardProps, ProjectFilters} from "./Models";

export const MAX_AMOUNT_OF_BUGS = 15
export const CURRENT_THEME_KEY = "THEME";
export const CUSTOM_THEMES_KEY = "CUSTOM_THEMES";
export const FOUND_BUGS_KEY = "FOUND_BUGS";
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
  tabHistory: EditorTab[],
  bugsCompleted: number[],
  projectFilters: ProjectFilters,
  projectsFiltered: ProjectCardProps[],
}
export const store = reactive<StoreTypes>({
  theme: localStorage.getItem(CURRENT_THEME_KEY) || Themes.dark,
  startOnboarding: localStorage.getItem(HIDE_ONBOARDING_KEY) !== "true",
  customThemes: JSON.parse(localStorage.getItem(CUSTOM_THEMES_KEY) || "[]"),
  bugsCompleted: JSON.parse(localStorage.getItem(FOUND_BUGS_KEY) || "[]"),
  tabHistory: [],
  projectFilters: { name: '', tags: [], sort: 'name', direction: 'asc' },
  projectsFiltered: [],
})
