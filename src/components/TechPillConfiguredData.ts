import {PillDataType} from "../data/Models";

export function GetPillData(type: string): PillDataType {
  const data = ALL_TECH_PILL_TYPES.find(v => v.type === type);
  if (data === undefined) return {
    type: "unknown",
    bgColor: "#f00"
  }
  return data;
}

export const ALL_BACKEND_TYPES: PillDataType[] = [
  {
    type: ".net",
    bgColor: "#116AB1",
  },
  {
    type: "c#",
    bgColor: "#68217A",
  },
  {
    type: "java",
    bgColor: "#EC2025",
  },
  {
    type: "python",
    bgColor: "#CCC267",
  },
  {
    type: "sam",
    bgColor: "#ffc60b",
  },
  {
    type: "scala",
    bgColor: "#f72f1b",
  },
  {
    type: "signalr",
    bgColor: "#5EB6DA",
  },
  {
    type: "spring",
    bgColor: "#68BD45",
  },
  {
    type: "rabbitmq",
    bgColor: "#FF6600",
  },
];
export const ALL_FRONTEND_TYPES: PillDataType[] = [
  {
    type: "angular",
    bgColor: "#DD0031",
  },
  {
    type: "css",
    bgColor: "#E44D26",
  },
  {
    type: "html",
    bgColor: "#1572B6",
  },
  {
    type: "javascript",
    bgColor: "#cebb45",
  },
  {
    type: "react",
    bgColor: "#149ECA",
  },
  {
    type: "redux",
    bgColor: "#764ABC",
  },
  {
    type: "sass",
    bgColor: "#CB6699",
  },
  {
    type: "typescript",
    bgColor: "#007ACC",
  },
  {
    type: "vue",
    bgColor: "#41B883",
  },
  {
    type: "websocket",
    bgColor: "#f22008",
  },
];
export const ALL_PERSISTENCE_TYPES: PillDataType[] = [
  {
    type: "postgresql",
    bgColor: "#316192",
  },
  {
    type: "mysql",
    bgColor: "#E48E00",
  },
  {
    type: "mongodb",
    bgColor: "#439934",
  },
  {
    type: "dynamodb",
    bgColor: "#3e43c6",
  },
];
export const ALL_DEPLOYMENT_TYPES: PillDataType[] = [
  {
    type: "aws",
    bgColor: "#F7A80D",
  },
  {
    type: "azure",
    bgColor: "#035BDA",
  },
  {
    type: "github",
    bgColor: "#555",
  },
  {
    type: "render",
    bgColor: "#5AEDC5",
  },
  {
    type: "docker",
    bgColor: "#019BC6",
  },
];
export const ALL_PROJECT_TYPES: PillDataType[] = [
  {
    type: "school/external",
    bgColor: "#af5b5b",
  },
  {
    type: "personal",
    bgColor: "#ea6d30",
  },
  {
    type: "school",
    bgColor: "#705499"
  },
];
export const ALL_PROJECT_STATUSES: PillDataType[] = [
  {
    type: "completed",
    bgColor: "#20ca52",
  },
  {
    type: "in progress",
    bgColor: "#b28000",
  },
  {
    type: "abandoned",
    bgColor: "#646464",
  },
];
export const ALL_PROJECT_VISIBILITY: PillDataType[] = [
  {
    type: "open source",
    bgColor: "#20ca52",
  },
  {
    type: "closed source",
    bgColor: "#a10f36",
  },
];
export const ALL_TECH_PILL_TYPES: PillDataType[] = [
  ...ALL_BACKEND_TYPES,
  ...ALL_FRONTEND_TYPES,
  ...ALL_PERSISTENCE_TYPES,
  ...ALL_DEPLOYMENT_TYPES,
  ...ALL_PROJECT_TYPES,
  ...ALL_PROJECT_STATUSES,
  ...ALL_PROJECT_VISIBILITY,
]
