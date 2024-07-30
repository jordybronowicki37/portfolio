import {ProjectCardProps} from "../data/Models";

export const projectCardsData: ProjectCardProps[] = [
  {
    "title": "Production Calculator",
    "imageSrc": "/prod-cal-editor.png",
    "imageAlt": "Production calculator editor preview",
    "tags": [
      ".net", "c#", "mongodb", "react", "typescript", "redux", "sass", "personal", "in progress"
    ],
    "externalLinks": [import.meta.env.VITE_PRODCAL_GITHUB_URL],
    "pageLink": "/projects/production-calculator",
    "description": "The production calculator allows you to easily create new production chains or map out existing factories. Calculate product throughput, identify efficiency problems and compare recipe efficiency."
  },
  {
    "title": "Portfolio",
    "imageSrc": "/portfolio-home.png",
    "imageAlt": "Portfolio home page screenshot",
    "tags": [
      "vue", "typescript", "personal", "completed"
    ],
    "externalLinks": [
      import.meta.env.VITE_PORTFOLIO_GITHUB_URL,
      import.meta.env.VITE_PORTFOLIO_PRODUCTION_DEPLOYMENT_URL
    ],
    "pageLink": "/projects/portfolio",
    "description": "This is the project that you are looking at right now, my portfolio website. It previews and explains all of my current projects in a code editor inspired website."
  },
  {
    "title": "Snake Game",
    "imageSrc": "/snake-game.png",
    "imageAlt": "Production calculator editor screenshot",
    "tags": ["vue", "typescript", "personal", "in progress"],
    "externalLinks": [
      import.meta.env.VITE_SNAKE_GITHUB_URL,
      import.meta.env.VITE_SNAKE_DEPLOYMENT_URL
    ],
    "pageLink": "/projects/snake-game",
    "description": "Play a more exciting version of the classic game of snake. Complete with a collection of exciting levels, single-player challenges, strategic power-ups, custom skins and two fun multiplayer game-modes."
  },
  {
    "title": "Task manager",
    "imageSrc": "/tas-board.png",
    "imageAlt": "Task manager board preview",
    "tags": ["java", "spring", "postgresql", "aws", "react", "typescript", "redux", "sass", "school", "completed"],
    "externalLinks": [],
    "pageLink": "/projects/task-manager",
    "description": "With TAS you can manage your tasks efficiently. This school project is inspired by the popular issue management tool Trello and was created to learn microservices cloud deployment with AWS."
  },
  {
    "title": "Neerslag radar",
    "imageSrc": "/neerslag-radar-basic-views.png",
    "imageAlt": "Production calculator editor preview",
    "tags": [
      ".net", "c#", "angular", "typescript", "school/external", "completed"
    ],
    "externalLinks": [],
    "pageLink": "/projects/neerslag-radar",
    "description": "This project was part of a collaboration between a student group and an external client. We were tasked to develop an application that contained interactive weather animations. Raw weather data would be processed and plot onto a map or graph with which you can interact to compare weather patterns."
  },
  {
    "title": "Aimas",
    "imageSrc": "/aimas-overview.png",
    "imageAlt": "Aimas overview page preview",
    "tags": ["python", "websocket", "sam", "dynamodb", "aws", "react", "typescript", "redux", "sass", "school", "completed"],
    "externalLinks": [],
    "pageLink": "/projects/aimas",
    "description": "With the Accidents and Incidents Management System (AIMAS), you can get a live preview of all accidents and incidents that are occurring in the Netherlands."
  },
  {
    "title": "BeFit-bot",
    "imageSrc": "/befit-exercise-progress.png",
    "imageAlt": "A standard exercise progress report",
    "tags": ["java", "spring", "postgresql", "discord", "personal", "in progress"],
    "externalLinks": ["https://github.com/jordybronowicki37/befit-bot"],
    "pageLink": "",
    "description": "A discord bot that can track your gym progress and motivate you. You can specify your own exercises, set your own goals, compare your progress to others and also ask for motivational quotes.",
  },
  {
    "title": "MTG collection manager",
    "imageSrc": "/mtg-card-overview.png",
    "imageAlt": "A preview of a MTG-card",
    "tags": ["python", "sam", "scala", "dynamodb", "aws", "vue", "typescript", "cypress", "scryfall", "school", "completed"],
    "externalLinks": [],
    "pageLink": "",
    "description": "A system in which you can manage your MTG-cards collection. Additionally you can also create and manage playable decks for the commander game mode. If you would want a certain card for in your collection you could add it to your wishlist.",
  }
]