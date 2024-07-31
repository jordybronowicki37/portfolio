import {createApp} from 'vue';
import './style.css';
import 'boxicons'
import App from './App.vue';
import {router} from "./router.ts";

const createdApp = createApp(App);

createdApp.use(router);
createdApp.mount('#app');
