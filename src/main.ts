import {createApp} from 'vue';
import './style.css';
import 'boxicons'
import App from './App.vue';
import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';
import HomePage from "./pages/HomePage.vue";
import AboutMePage from "./pages/AboutMePage.vue";
import ContactPage from "./pages/ContactPage.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";
import ProdCalProject from "./pages/projects/ProdCalProjectPage.vue";
import SnakeProject from "./pages/projects/SnakeProjectPage.vue";
import PortfolioProject from "./pages/projects/PortfolioProjectPage.vue";
import NeerslagRadarProject from "./pages/projects/NeerslagRadarProjectPage.vue";
import TaskManagerProject from "./pages/projects/TaskManagerProjectPage.vue";
import AimasProject from "./pages/projects/AimasProjectPage.vue";
import ErrorPage from "./pages/ErrorPage.vue";
import SkillsPage from "./pages/SkillsPage.vue";
import NoOpenedFilesPage from "./pages/NoOpenedFilesPage.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomePage
  },
  {
    path: "/about",
    name: "about-me",
    component: AboutMePage
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactPage
  },
  {
    path: "/skills",
    name: "skills",
    component: SkillsPage
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsPage
  },
  {
    path: "/projects/aimas",
    name: "aimas-project",
    component: AimasProject
  },
  {
    path: "/projects/neerslag-radar",
    name: "neerslag-radar-project",
    component: NeerslagRadarProject
  },
  {
    path: "/projects/production-calculator",
    name: "production-calculator-project",
    component: ProdCalProject
  },
  {
    path: "/projects/portfolio",
    name: "portfolio-project",
    component: PortfolioProject
  },
  {
    path: "/projects/snake-game",
    name: "snake-game-project",
    component: SnakeProject
  },
  {
    path: "/projects/task-manager",
    name: "task-manager-project",
    component: TaskManagerProject
  },
  {
    path: "/no-page",
    name: "no-page",
    component: NoOpenedFilesPage
  },
  {
    path: "/:pathMatch(.*)*",
    name: "unknown",
    component: ErrorPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

const createdApp = createApp(App);

createdApp.use(router);
createdApp.mount('#app');

