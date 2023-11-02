export type PillDataType = {
  type: string;
  bgColor: string;
  color?: string;
}

export function GetPillData(type: string): PillDataType {
  const data = PillData.find(v => v.type === type);
  if (data === undefined) return {
    type: "unknown",
    bgColor: "red"
  }
  return data;
}

export const ALL_BACKEND_TYPES = [".net", "c#", "java", "python", "signalr", "spring", "rabbitmq"];
export const ALL_FRONTEND_TYPES = ["angular", "css", "html", "javascript", "react", "redux", "sass", "typescript", "vue"];
export const ALL_PERSISTENCE_TYPES = ["postgresql", "mysql", "mongodb"];
export const ALL_DEPLOYMENT_TYPES = ["aws", "azure", "render", "docker"];
export const ALL_PROJECT_TYPES = ["personal", "school", "school/external"];

const PillData: PillDataType[] = [
  // Backend
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
    type: "signalr",
    bgColor: "#5EB6DA",
  },
  {
    type: "spring",
    bgColor: "#68BD45",
    color: "#393d48"
  },
  {
    type: "rabbitmq",
    bgColor: "#FF6600",
  },

  // Frontend
  {
    type: "angular",
    bgColor: "#DD0031",
  },
  {
    type: "css",
    bgColor: "#E44D26",
    color: "#393d48"
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
    color: "#393d48"
  },

  // Persistence
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

  // Deployment
  {
    type: "aws",
    bgColor: "#F7A80D",
    color: "#393d48"
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
    color: "#393d48"
  },
  {
    type: "docker",
    bgColor: "#019BC6",
  },

  // Project types
  {
    type: "school/external",
    bgColor: "#af5b5b",
  },
  {
    type: "personal",
    bgColor: "#ea6d30",
    color: "#393d48"
  },
  {
    type: "school",
    bgColor: "#705499"
  },

  // Project statuses
  {
    type: "completed",
    bgColor: "#20ca52",
    color: "#393d48"
  },
  {
    type: "in progress",
    bgColor: "#b28000",
    color: "#393d48"
  },
  {
    type: "abandoned",
    bgColor: "#646464",
    color: "#d42d1c",
  },
];
