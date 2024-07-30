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
    skillLevel: 65,
  },
  {
    type: "c#",
    bgColor: "#68217A",
    skillLevel: 76,
  },
  {
    type: "graphql",
    bgColor: "#e63bae",
    skillLevel: 30,
  },
  {
    type: "java",
    bgColor: "#EC2025",
    skillLevel: 93,
  },
  {
    type: "python",
    bgColor: "#CCC267",
    skillLevel: 67,
  },
  {
    type: "sam",
    bgColor: "#ffc60b",
    skillLevel: 63,
  },
  {
    type: "scala",
    bgColor: "#f72f1b",
    skillLevel: 25,
  },
  {
    type: "signalr",
    bgColor: "#5EB6DA",
    skillLevel: 54,
  },
  {
    type: "spring",
    bgColor: "#68BD45",
    skillLevel: 83,
  },
  {
    type: "rabbitmq",
    bgColor: "#FF6600",
    skillLevel: 55,
  },
];
export const ALL_FRONTEND_TYPES: PillDataType[] = [
  {
    type: "angular",
    bgColor: "#DD0031",
    skillLevel: 34,
  },
  {
    type: "css",
    bgColor: "#E44D26",
    skillLevel: 87,
  },
  {
    type: "html",
    bgColor: "#1572B6",
    skillLevel: 73,
  },
  {
    type: "javascript",
    bgColor: "#cebb45",
    skillLevel: 85,
  },
  {
    type: "react",
    bgColor: "#149ECA",
    skillLevel: 64,
  },
  {
    type: "redux",
    bgColor: "#764ABC",
    skillLevel: 68,
  },
  {
    type: "sass",
    bgColor: "#CB6699",
    skillLevel: 69,
  },
  {
    type: "typescript",
    bgColor: "#007ACC",
    skillLevel: 77,
  },
  {
    type: "vue",
    bgColor: "#41B883",
    skillLevel: 71,
  },
  {
    type: "websocket",
    bgColor: "#f22008",
    skillLevel: 40,
  },
];
export const ALL_PERSISTENCE_TYPES: PillDataType[] = [
  {
    type: "dgraph",
    bgColor: "#ff1e08",
    skillLevel: 25,
  },
  {
    type: "dynamodb",
    bgColor: "#3e43c6",
    skillLevel: 45,
  },
  {
    type: "mongodb",
    bgColor: "#439934",
    skillLevel: 60,
  },
  {
    type: "mysql",
    bgColor: "#E48E00",
    skillLevel: 72,
  },
  {
    type: "postgresql",
    bgColor: "#316192",
    skillLevel: 80,
  },
];
export const ALL_DEPLOYMENT_TYPES: PillDataType[] = [
  {
    type: "aws",
    bgColor: "#F7A80D",
    skillLevel: 70,
  },
  {
    type: "azure",
    bgColor: "#035BDA",
    skillLevel: 20,
  },
  {
    type: "discord",
    bgColor: "#5F64DC",
  },
  {
    type: "github",
    bgColor: "#555",
    skillLevel: 60,
  },
  {
    type: "render",
    bgColor: "#5AEDC5",
    skillLevel: 58,
  },
  {
    type: "docker",
    bgColor: "#019BC6",
    skillLevel: 46,
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
