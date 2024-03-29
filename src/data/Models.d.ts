export type ProjectCardProps = {
  title: string,
  imageSrc: string,
  imageAlt: string,
  tags: string[],
  externalLinks: string[],
  pageLink: string,
  description:string
}

export type PillDataType = {
  type: string;
  bgColor: string;
}

export type NotificationTypes = "INFO" | "WARNING" | "ERROR";
