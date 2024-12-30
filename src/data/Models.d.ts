export type ProjectCardProps = {
  title: string,
  imageSrc: string,
  imageAlt: string,
  tags: string[],
  externalLinks: string[],
  pageLink?: string,
  description:string,
}

export type PillDataCategories = "backend" | "frontend" | "persistence" | "deployment" | "integration" | "project-type" | "project-status" | "project-visibility" | "unknown";

export type PillDataLink = {
  name: string,
  url: string,
}

export type PillDataType = {
  type: string,
  category: PillDataCategories,
  noDetails?: true,
  description?: string,
  links?: PillDataLink[],
  bgColor: string,
  skillLevel?: number,
}

export type NotificationTypes = "INFO" | "WARNING" | "ERROR";

export type CustomTheme = {
  id: number,
  displayName: string,
  colors: CustomThemeColors,
}

export type CustomThemeColors = {
  titleColor: string,
  textColor: string,
  subTextColor: string,
  backgroundFarColor: string,
  backgroundMidColor: string,
  backgroundNearColor: string,
  foregroundColor: string,
  secondaryColor: string,
  accentColor: string,
  errorColor: string,
}
