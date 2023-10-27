import { createApp } from 'vue';
import './style.css';
import 'boxicons'
import App from './App.vue';
import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';
import HomePage from "./pages/HomePage.vue";
import AboutMePage from "./pages/AboutMePage.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";
import ProdCalProject from "./pages/projects/ProdCalProjectPage.vue";
import SnakeProject from "./pages/projects/SnakeProjectPage.vue";
import PortfolioProject from "./pages/projects/PortfolioProjectPage.vue";
import NeerslagRadarProject from "./pages/projects/NeerslagRadarProjectPage.vue";
import TaskManagerProject from "./pages/projects/TaskManagerProjectPage.vue";
import ErrorPage from "./pages/ErrorPage.vue";

const routes: RouteRecordRaw[] = [
    { path: "/", component: HomePage },
    { path: "/about", component: AboutMePage },
    { path: "/projects", component: ProjectsPage },
    { path: "/projects/production-calculator", component: ProdCalProject },
    { path: "/projects/snake-game", component: SnakeProject },
    { path: "/projects/portfolio", component: PortfolioProject },
    { path: "/projects/task-manager", component: TaskManagerProject },
    { path: "/projects/neerslag-radar", component: NeerslagRadarProject },
    { path: "/:pathMatch(.*)*", component: ErrorPage },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

const createdApp = createApp(App);

createdApp.use(router);
createdApp.mount('#app');

