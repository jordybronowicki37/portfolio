export type PillDataType = {
    type: string;
    bgColor: string;
}

export function GetPillData(type: string): PillDataType {
    const data = PillData.find(v => v.type === type);
    if (data === undefined) return {
        type: "unknown",
        bgColor: "red"
    }
    return data;
}

export const ALLPROJECTTYPES = ["personal", "school", "school/external"];

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
    },
    {
        type: "azure",
        bgColor: "#035BDA",
    },
    {
        type: "render",
        bgColor: "#5AEDC5",
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
    },
    {
        type: "school",
        bgColor: "#705499",
    },
];
