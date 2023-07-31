import { createApp } from 'vue';
import './style.css';
import 'boxicons'
import App from './App.vue';
import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';
import HomePage from "./pages/HomePage.vue";
import AboutMePage from "./pages/AboutMePage.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";
import ProdCalProject from "./pages/projects/ProdCalProject.vue";
import SnakeProject from "./pages/projects/SnakeProject.vue";

const routes: RouteRecordRaw[] = [
    { path: "/", component: HomePage },
    { path: "/about", component: AboutMePage },
    { path: "/projects", component: ProjectsPage },
    { path: "/projects/prodcal", component: ProdCalProject },
    { path: "/projects/snake", component: SnakeProject },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

const createdApp = createApp(App);

createdApp.use(router);
createdApp.mount('#app');

