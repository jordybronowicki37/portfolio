import {PillDataType} from "./Models";

export function GetPillData(type: string): PillDataType {
  const data = ALL_TECH_PILL_TYPES.find(v => v.type === type);
  if (data === undefined) return {
    type: "unknown",
    category: "unknown",
    description: "",
    bgColor: "#f00"
  }
  return data;
}

export const ALL_BACKEND_TYPES: PillDataType[] = [
  {
    type: ".net",
    category: "backend",
    description: "A versatile and widely-used framework developed by Microsoft for building and running applications on Windows, macOS, and Linux.",
    links: [
      {
        name: "Documentation",
        url: "https://dotnet.microsoft.com/",
      },
    ],
    bgColor: "#116AB1",
    skillLevel: 65,
  },
  {
    type: "c#",
    category: "backend",
    description: "A modern, object-oriented programming language developed by Microsoft, commonly used in enterprise applications and game development.",
    links: [
      {
        name: "Documentation",
        url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
      },
    ],
    bgColor: "#68217A",
    skillLevel: 76,
  },
  {
    type: "graphql",
    category: "backend",
    description: "A query language for APIs that allows clients to request only the data they need, improving efficiency and flexibility in data fetching.",
    links: [
      {
        name: "Product page",
        url: "https://graphql.org/",
      },
    ],
    bgColor: "#e63bae",
    skillLevel: 30,
  },
  {
    type: "java",
    category: "backend",
    description: "A robust, high-performance programming language used for building cross-platform applications, from enterprise systems to mobile apps.",
    links: [
      {
        name: "Product page",
        url: "https://www.oracle.com/nl/java/",
      },
      {
        name: "Documentation",
        url: "https://dev.java/",
      },
    ],
    bgColor: "#EC2025",
    skillLevel: 93,
  },
  {
    type: "python",
    category: "backend",
    description: "A powerful and easy-to-learn programming language with a strong ecosystem, widely used in web development, data analysis, and automation.",
    links: [
      {
        name: "Product page",
        url: "https://www.python.org/",
      },
      {
        name: "Documentation",
        url: "https://www.python.org/doc/",
      },
    ],
    bgColor: "#CCC267",
    skillLevel: 67,
  },
  {
    type: "sam",
    category: "backend",
    description: "AWS Serverless Application Model (SAM) is an open-source framework for building serverless applications on AWS, focusing on deployment and management.",
    links: [
      {
        name: "Documentation",
        url: "https://aws.amazon.com/serverless/sam/",
      },
    ],
    bgColor: "#ffc60b",
    skillLevel: 63,
  },
  {
    type: "scala",
    category: "backend",
    description: "A scalable programming language combining functional and object-oriented programming, often used in data-intensive and distributed systems.",
    links: [
      {
        name: "Product page",
        url: "https://www.scala-lang.org/",
      },
      {
        name: "Documentation",
        url: "https://docs.scala-lang.org/",
      },
    ],
    bgColor: "#f72f1b",
    skillLevel: 25,
  },
  {
    type: "signalr",
    category: "backend",
    description: "A Microsoft library for adding real-time web functionality to applications, enabling bi-directional communication between server and client.",
    links: [
      {
        name: "Documentation",
        url: "https://dotnet.microsoft.com/en-us/apps/aspnet/signalr",
      },
    ],
    bgColor: "#5EB6DA",
    skillLevel: 54,
  },
  {
    type: "spring",
    category: "backend",
    description: "A comprehensive framework for building Java-based enterprise applications, known for its dependency injection and aspect-oriented programming features.",
    links: [
      {
        name: "Product page",
        url: "https://spring.io/",
      },
    ],
    bgColor: "#68BD45",
    skillLevel: 83,
  },
  {
    type: "rabbitmq",
    category: "backend",
    description: "A popular message broker that enables asynchronous communication between different services, enhancing scalability and fault tolerance.",
    links: [
      {
        name: "Product page",
        url: "https://www.rabbitmq.com/",
      },
      {
        name: "Documentation",
        url: "https://www.rabbitmq.com/docs",
      },
    ],
    bgColor: "#FF6600",
    skillLevel: 55,
  },
];
export const ALL_FRONTEND_TYPES: PillDataType[] = [
  {
    type: "angular",
    category: "frontend",
    description: "A powerful framework developed by Google for building dynamic, single-page web applications using TypeScript and component-based architecture.",
    links: [
      {
        name: "Product page",
        url: "https://angular.dev/",
      },
      {
        name: "Documentation",
        url: "https://angular.dev/overview",
      },
    ],
    bgColor: "#DD0031",
    skillLevel: 34,
  },
  {
    type: "css",
    category: "frontend",
    description: "A stylesheet language used to control the presentation of web pages, allowing for rich, responsive, and visually appealing designs.",
    bgColor: "#E44D26",
    skillLevel: 87,
  },
  {
    type: "cypress",
    category: "frontend",
    description: "An end-to-end testing framework for web applications, providing fast and reliable testing for frontend code with real-time feedback.",
    links: [
      {
        name: "Product page",
        url: "https://www.cypress.io/",
      },
      {
        name: "Documentation",
        url: "https://docs.cypress.io/guides/overview/why-cypress",
      },
    ],
    bgColor: "#5c9f93",
    skillLevel: 33,
  },
  {
    type: "html",
    category: "frontend",
    description: "The standard markup language used to structure and present content on the web, forming the backbone of all websites.",
    bgColor: "#1572B6",
    skillLevel: 73,
  },
  {
    type: "javascript",
    category: "frontend",
    description: "A versatile scripting language used to create dynamic and interactive web content, supported by all modern browsers.",
    bgColor: "#cebb45",
    skillLevel: 85,
  },
  {
    type: "react",
    category: "frontend",
    description: "A popular JavaScript library developed by Facebook for building user interfaces, particularly single-page applications with a component-based architecture.",
    links: [
      {
        name: "Product page",
        url: "https://react.dev/",
      },
      {
        name: "Documentation",
        url: "https://react.dev/learn",
      },
    ],
    bgColor: "#149ECA",
    skillLevel: 64,
  },
  {
    type: "redux",
    category: "frontend",
    description: "A state management library for JavaScript applications, commonly used with React to manage and centralize application state.",
    links: [
      {
        name: "Product page",
        url: "https://redux.js.org/",
      },
      {
        name: "Documentation",
        url: "https://redux.js.org/introduction/getting-started",
      },
    ],
    bgColor: "#764ABC",
    skillLevel: 68,
  },
  {
    type: "sass",
    category: "frontend",
    description: "A preprocessor scripting language that extends CSS, offering features like variables, nested rules, and mixins for more efficient styling.",
    links: [
      {
        name: "Product page",
        url: "https://sass-lang.com/",
      },
      {
        name: "Documentation",
        url: "https://sass-lang.com/documentation/",
      },
    ],
    bgColor: "#CB6699",
    skillLevel: 69,
  },
  {
    type: "typescript",
    category: "frontend",
    description: "A typed superset of JavaScript that compiles to plain JavaScript, enabling developers to write more robust and maintainable code.",
    links: [
      {
        name: "Product page",
        url: "https://www.typescriptlang.org/",
      },
      {
        name: "Documentation",
        url: "https://www.typescriptlang.org/docs/",
      },
    ],
    bgColor: "#007ACC",
    skillLevel: 77,
  },
  {
    type: "vue",
    category: "frontend",
    description: "A progressive JavaScript framework for building user interfaces, known for its simplicity and flexibility in creating web applications.",
    links: [
      {
        name: "Product page",
        url: "https://vuejs.org/",
      },
      {
        name: "Documentation",
        url: "https://vuejs.org/guide/introduction.html",
      },
    ],
    bgColor: "#41B883",
    skillLevel: 71,
  },
  {
    type: "websocket",
    category: "frontend",
    description: "A protocol providing full-duplex communication channels over a single TCP connection, enabling real-time data exchange between client and server.",
    bgColor: "#f22008",
    skillLevel: 40,
  },
  {
    type: "wpf",
    category: "frontend",
    description: "Windows Presentation Foundation (WPF) is a UI framework for building Windows desktop applications with rich graphical interfaces.",
    links: [
      {
        name: "Documentation",
        url: "https://learn.microsoft.com/en-us/dotnet/desktop/wpf/?view=netdesktop-8.0",
      },
    ],
    bgColor: "#0d518d",
    skillLevel: 50,
  },
];
export const ALL_PERSISTENCE_TYPES: PillDataType[] = [
  {
    type: "dgraph",
    category: "persistence",
    description: "A native GraphQL database designed for building modern applications that need highly performant, real-time data processing capabilities.",
    links: [
      {
        name: "Product page",
        url: "https://dgraph.io/",
      },
      {
        name: "Documentation",
        url: "https://dgraph.io/docs/",
      },
    ],
    bgColor: "#ff1e08",
    skillLevel: 25,
  },
  {
    type: "dynamodb",
    category: "persistence",
    description: "A fully managed NoSQL database service provided by AWS, known for its high availability, scalability, and seamless integration with other AWS services.",
    links: [
      {
        name: "Product page",
        url: "https://aws.amazon.com/dynamodb/",
      },
    ],
    bgColor: "#3e43c6",
    skillLevel: 45,
  },
  {
    type: "mongodb",
    category: "persistence",
    description: "A popular NoSQL database known for its flexibility in handling unstructured data, high performance, and scalability in distributed environments.",
    links: [
      {
        name: "Product page",
        url: "https://www.mongodb.com/",
      },
      {
        name: "Documentation",
        url: "https://www.mongodb.com/docs/",
      },
    ],
    bgColor: "#439934",
    skillLevel: 60,
  },
  {
    type: "mysql",
    category: "persistence",
    description: "A widely-used open-source relational database management system known for its reliability, performance, and ease of use.",
    links: [
      {
        name: "Product page",
        url: "https://www.mysql.com/",
      },
      {
        name: "Documentation",
        url: "https://dev.mysql.com/doc/",
      },
    ],
    bgColor: "#E48E00",
    skillLevel: 72,
  },
  {
    type: "postgresql",
    category: "persistence",
    description: "An advanced, open-source relational database known for its strong standards compliance, extensibility, and support for complex queries.",
    links: [
      {
        name: "Product page",
        url: "https://www.postgresql.org/",
      },
      {
        name: "Documentation",
        url: "https://www.postgresql.org/docs/",
      },
    ],
    bgColor: "#316192",
    skillLevel: 80,
  },
];
export const ALL_DEPLOYMENT_TYPES: PillDataType[] = [
  {
    type: "aws",
    category: "deployment",
    description: "Amazon Web Services (AWS) is a comprehensive cloud computing platform offering a wide range of services for deployment, storage, and computing.",
    links: [
      {
        name: "Product page",
        url: "https://aws.amazon.com/",
      },
    ],
    bgColor: "#F7A80D",
    skillLevel: 70,
  },
  {
    type: "azure",
    category: "deployment",
    description: "Microsoft Azure is a cloud computing service providing a range of services for building, deploying, and managing applications through Microsoft-managed data centers.",
    links: [
      {
        name: "Product page",
        url: "https://azure.microsoft.com",
      },
    ],
    bgColor: "#035BDA",
    skillLevel: 20,
  },
  {
    type: "github",
    category: "deployment",
    description: "A platform for version control and collaboration, GitHub also offers cloud-hosted solutions for deploying and managing applications through GitHub Actions.",
    links: [
      {
        name: "Product page",
        url: "https://github.com/",
      },
    ],
    bgColor: "#555",
    skillLevel: 60,
  },
  {
    type: "render",
    category: "deployment",
    description: "A cloud platform for hosting web applications, APIs, static sites, and more, offering simplicity and automated deployment workflows.",
    links: [
      {
        name: "Product page",
        url: "https://render.com/",
      },
      {
        name: "Documentation",
        url: "https://docs.render.com/",
      },
    ],
    bgColor: "#5AEDC5",
    skillLevel: 58,
  },
  {
    type: "docker",
    category: "deployment",
    description: "A platform for developing, shipping, and running applications inside lightweight containers, enabling consistent environments across development and production.",
    links: [
      {
        name: "Product page",
        url: "https://www.docker.com/",
      },
      {
        name: "Documentation",
        url: "https://docs.docker.com/",
      },
    ],
    bgColor: "#019BC6",
    skillLevel: 46,
  },
];
export const ALL_INTEGRATION_TYPES: PillDataType[] = [
  {
    type: "discord",
    category: "integration",
    description: "A platform offering real-time chat and voice communication, often used for integrating bots and other services to automate interactions.",
    links: [
      {
        name: "Product page",
        url: "https://discord.com/",
      },
      {
        name: "Developer Platform Documentation",
        url: "https://discord.com/developers/docs/intro",
      },
    ],
    bgColor: "#5F64DC",
  },
  {
    type: "scryfall",
    category: "integration",
    description: "An API providing access to a large database of Magic: The Gathering cards, commonly used for integration in applications related to card games.",
    links: [
      {
        name: "Documentation",
        url: "https://scryfall.com/docs/api",
      },
    ],
    bgColor: "#a4819a",
  },
  {
    type: "unity",
    category: "integration",
    description: "A cross-platform game engine widely used for developing video games and simulations, offering extensive integration capabilities with other services and tools.",
    links: [
      {
        name: "Product page",
        url: "https://unity.com/",
      },
      {
        name: "Documentation",
        url: "https://docs.unity.com/",
      },
    ],
    bgColor: "#4c4c4c",
  },
];
export const ALL_PROJECT_TYPES: PillDataType[] = [
  {
    type: "group",
    category: "project-type",
    noDetails: true,
    bgColor: "#a33097",
  },
  {
    type: "personal",
    category: "project-type",
    noDetails: true,
    bgColor: "#ea6d30",
  },
  {
    type: "school",
    category: "project-type",
    noDetails: true,
    bgColor: "#705499"
  },
  {
    type: "school/external",
    category: "project-type",
    noDetails: true,
    bgColor: "#af5b5b",
  },
];
export const ALL_PROJECT_STATUSES: PillDataType[] = [
  {
    type: "completed",
    category: "project-status",
    noDetails: true,
    bgColor: "#20ca52",
  },
  {
    type: "in progress",
    category: "project-status",
    noDetails: true,
    bgColor: "#b28000",
  },
  {
    type: "abandoned",
    category: "project-status",
    noDetails: true,
    bgColor: "#646464",
  },
];
export const ALL_PROJECT_VISIBILITY: PillDataType[] = [
  {
    type: "open source",
    category: "project-visibility",
    noDetails: true,
    bgColor: "#20ca52",
  },
  {
    type: "closed source",
    category: "project-visibility",
    noDetails: true,
    bgColor: "#a10f36",
  },
];
export const ALL_TECH_PILL_TYPES: PillDataType[] = [
  ...ALL_BACKEND_TYPES,
  ...ALL_FRONTEND_TYPES,
  ...ALL_PERSISTENCE_TYPES,
  ...ALL_DEPLOYMENT_TYPES,
  ...ALL_INTEGRATION_TYPES,
  ...ALL_PROJECT_TYPES,
  ...ALL_PROJECT_STATUSES,
  ...ALL_PROJECT_VISIBILITY,
]
