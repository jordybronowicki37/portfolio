import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("./pages/HomePage.vue")
  },
  {
    path: "/about",
    name: "about-me",
    component: () => import("./pages/AboutMePage.vue")
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("./pages/ContactPage.vue")
  },
  {
    path: "/skills",
    name: "skills",
    component: () => import("./pages/SkillsPage.vue")
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("./pages/ProjectsPage.vue")
  },
  {
    path: "/projects/aimas",
    name: "aimas-project",
    component: () => import("./pages/projects/AimasProjectPage.vue")
  },
  {
    path: "/projects/befit",
    name: "befit-bot",
    component: () => import("./pages/projects/BeFitBotProjectPage.vue")
  },
  {
    path: "/projects/mtg",
    name: "mtg-collection-manager",
    component: () => import("./pages/projects/MTGProjectPage.vue")
  },
  {
    path: "/projects/neerslag-radar",
    name: "neerslag-radar-project",
    component: () => import("./pages/projects/NeerslagRadarProjectPage.vue")
  },
  {
    path: "/projects/production-calculator",
    name: "production-calculator-project",
    component: () => import("./pages/projects/ProdCalProjectPage.vue")
  },
  {
    path: "/projects/portfolio",
    name: "portfolio-project",
    component: () => import("./pages/projects/PortfolioProjectPage.vue")
  },
  {
    path: "/projects/snake-game",
    name: "snake-game-project",
    component: () => import("./pages/projects/SnakeProjectPage.vue")
  },
  {
    path: "/projects/task-manager",
    name: "task-manager-project",
    component: () => import("./pages/projects/TaskManagerProjectPage.vue")
  },
  {
    path: "/no-page",
    name: "no-page",
    component: () => import("./pages/NoOpenedFilesPage.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "unknown",
    component: () => import("./pages/ErrorPage.vue")
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
});
