import {ProjectCardProps} from "./Models";

export const aimasProjectCardData: ProjectCardProps = {
  title: "Aimas",
  imageSrc: "/img/projects/aimas-overview.png",
  imageAlt: "Aimas overview page preview",
  tags: {
    summary: ["python", "websocket", "sam", "dynamodb", "aws", "react", "typescript", "redux", "sass", "school", "completed"],
    languages: ['python', 'typescript', 'html', 'sass'],
    frameworks: ['sam', 'websocket', 'react', 'redux'],
    database: 'dynamodb',
    deployment: 'aws',
    type: 'school',
    grade: 7.8,
    groupSize: 2,
    status: 'completed',
  },
  externalLinks: [],
  pageLink: "/projects/aimas",
  description: "With the Accidents and Incidents Management System (AIMAS), you can get a live preview of all accidents and incidents that are occurring in the Netherlands.",
  startedAt: {
    year: 2023,
    month: 11
  }
}
export const befitProjectCardData: ProjectCardProps = {
  title: "BeFit-bot",
  imageSrc: "/img/projects/befit-progress.png",
  imageAlt: "A standard exercise progress report",
  tags: {
    summary: ["java", "spring", "postgresql", "discord", "personal", "completed"],
    languages: ['java'],
    frameworks: ['spring'],
    integrations: ['discord'],
    database: 'postgresql',
    type: 'personal',
    status: 'completed',
  },
  externalLinks: [
    import.meta.env.VITE_BEFIT_GITHUB_URL
  ],
  pageLink: "/projects/befit",
  description: "A discord bot that can track your gym progress and motivate you. You can specify your own exercises, set your own goals, compare your progress to others and also ask for motivational quotes.",
  startedAt: {
    year: 2024,
    month: 3
  }
}
export const miningGameProjectCardData: ProjectCardProps = {
  title: "Mining game - map generation",
  imageSrc: "/img/projects/mining-game-map-gen-3d-2.png",
  imageAlt: "A topdown preview of the map generation",
  tags: {
    summary: ["c#", "wpf", "unity", "group", "in progress"],
    languages: ['c#'],
    frameworks: ['wpf'],
    integrations: ['unity'],
    type: 'group',
    groupSize: 5,
    status: 'in progress',
  },
  externalLinks: [
    import.meta.env.VITE_MINING_GAME_GITHUB_URL
  ],
  pageLink: "/projects/mining-game",
  description: "Me and my friend group wanted to create a fun game in which you would compete in mining for resources. This is a small overview of the map generation that is to be used inside of the game.",
  startedAt: {
    year: 2024,
    month: 1
  }
}
export const mtgProjectCardData: ProjectCardProps = {
  title: "MTG collection manager",
  imageSrc: "/img/projects/mtg-card-overview.png",
  imageAlt: "A preview of a MTG-card",
  tags: {
    summary: ["python", "sam", "scala", "dynamodb", "aws", "vue", "typescript", "sass", "cypress", "scryfall", "school", "completed"],
    languages: ['python', 'scala', 'typescript', 'html', 'sass'],
    frameworks: ['sam', 'vue', 'cypress'],
    integrations: ['scryfall'],
    database: 'dynamodb',
    deployment: 'aws',
    type: 'school',
    grade: 7.7,
    groupSize: 6,
    status: 'completed',
  },
  externalLinks: [],
  pageLink: "/projects/mtg",
  description: "A system in which you can manage your MTG-cards collection. Additionally you can also create and manage playable decks for the commander game mode. If you would want a certain card for in your collection you could add it to your wishlist.",
  startedAt: {
    year: 2023,
    month: 12
  }
}
export const neerslagProjectCardData: ProjectCardProps = {
  title: "Neerslag radar",
  imageSrc: "/img/projects/neerslag-radar-basic-views.png",
  imageAlt: "Production calculator editor preview",
  tags: {
    summary: [".net", "c#", "angular", "typescript", "school/external", "completed"],
    languages: ['c#', 'typescript', 'html', 'css'],
    frameworks: ['.net', 'angular'],
    type: 'school/external',
    status: 'completed',
    grade: 8.5,
    groupSize: 5,
  },
  externalLinks: [],
  pageLink: "/projects/neerslag-radar",
  description: "This project was part of a collaboration between a student group and an external client. We were tasked to develop an application that contained interactive weather animations. Raw weather data would be processed and plot onto a map or graph with which you can interact to compare weather patterns.",
  startedAt: {
    year: 2022,
    month: 2
  }
}
export const portfolioProjectCardData: ProjectCardProps = {
  title: "Portfolio",
  imageSrc: "/img/projects/portfolio-projects.jpeg",
  imageAlt: "Portfolio home page screenshot",
  tags: {
    summary: ["vue", "typescript", "personal", "completed"],
    languages: ['typescript', 'html', 'css'],
    frameworks: ['vue'],
    deployment: 'render',
    type: 'personal',
    status: 'completed',
  },
  externalLinks: [
    import.meta.env.VITE_PORTFOLIO_GITHUB_URL,
    import.meta.env.VITE_PORTFOLIO_PRODUCTION_DEPLOYMENT_URL
  ],
  pageLink: "/projects/portfolio",
  description: "This is the project that you are looking at right now, my portfolio website. It previews and explains all of my current projects in a code editor inspired website.",
  startedAt: {
    year: 2023,
    month: 7
  }
}
export const prodCalProjectCardData: ProjectCardProps = {
  title: "Production Calculator",
  imageSrc: "/img/projects/prod-cal-editor.png",
  imageAlt: "Production calculator editor preview",
  tags: {
    summary: [".net", "c#", "mongodb", "react", "typescript", "redux", "sass", "personal", "in progress"],
    languages: ['c#', 'typescript', 'html', 'sass'],
    frameworks: ['.net', 'react', 'redux'],
    database: 'mongodb',
    type: 'personal',
    status: 'in progress',
  },
  externalLinks: [
    import.meta.env.VITE_PRODCAL_GITHUB_URL
  ],
  pageLink: "/projects/production-calculator",
  description: "The production calculator allows you to easily create new production chains or map out existing factories. Calculate product throughput, identify efficiency problems and compare recipe efficiency.",
  startedAt: {
    year: 2022,
    month: 4
  }
}
export const proPaddingProjectCardData: ProjectCardProps = {
  title: "Pro-Padding",
  imageSrc: "/img/projects/pro-padding-dashboard-example.png",
  imageAlt: "An edited screenshot example of an dashboard",
  tags: {
    summary: ["typescript", "svelte", "tailwind", "personal", "completed"],
    languages: ['typescript', 'html', 'css'],
    frameworks: ['svelte', 'tailwind'],
    deployment: 'render',
    type: 'personal',
    status: 'completed',
  },
  externalLinks: [
    import.meta.env.VITE_PRO_PADDING_GITHUB_URL,
    import.meta.env.VITE_PRO_PADDING_DEPLOYMENT_URL
  ],
  pageLink: "/projects/pro-padding",
  description: "With this browser-based utility, you can easily edit screenshots into professional sharable previews of for example: Social media posts, application components, dashboards, data tables, charts, code blocks and more...",
  startedAt: {
    year: 2025,
    month: 10
  }
}
export const snakeProjectCardData: ProjectCardProps = {
  title: "Snake Game",
  imageSrc: "/img/projects/snake-game.png",
  imageAlt: "Production calculator editor screenshot",
  tags: {
    summary: ["vue", "typescript", "personal", "in progress"],
    languages: ['typescript', 'html', 'css'],
    frameworks: ['vue'],
    deployment: 'render',
    type: 'personal',
    status: 'in progress',
  },
  externalLinks: [
    import.meta.env.VITE_SNAKE_GITHUB_URL,
    import.meta.env.VITE_SNAKE_DEPLOYMENT_URL
  ],
  pageLink: "/projects/snake-game",
  description: "Play a more exciting version of the classic game of snake. Complete with a collection of exciting levels, single-player challenges, strategic power-ups, custom skins and two fun multiplayer game-modes.",
  startedAt: {
    year: 2023,
    month: 6
  }
}
export const taskManagerProjectCardData: ProjectCardProps = {
  title: "Task manager",
  imageSrc: "/img/projects/tas-board.png",
  imageAlt: "Task manager board preview",
  tags: {
    summary: ["java", "spring", "postgresql", "aws", "react", "typescript", "redux", "sass", "school", "completed"],
    languages: ['java', 'typescript', 'html', 'sass'],
    frameworks: ['spring', 'react', 'redux'],
    database: 'postgresql',
    deployment: 'aws',
    type: 'school',
    grade: 8.1,
    groupSize: 2,
    status: 'completed',
  },
  externalLinks: [],
  pageLink: "/projects/task-manager",
  description: "With TAS you can manage your tasks efficiently. This school project is inspired by the popular issue management tool Trello and was created to learn microservices cloud deployment with AWS.",
  startedAt: {
    year: 2023,
    month: 10
  }
}

export const projectCardsData: ProjectCardProps[] = [
  aimasProjectCardData,
  befitProjectCardData,
  miningGameProjectCardData,
  mtgProjectCardData,
  neerslagProjectCardData,
  portfolioProjectCardData,
  prodCalProjectCardData,
  proPaddingProjectCardData,
  snakeProjectCardData,
  taskManagerProjectCardData,
]
