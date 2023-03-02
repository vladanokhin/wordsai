import { createApp } from 'vue';
import MainLayout from "./layouts/MainLayout.vue";
import router from "./router/index";
import store from "./store";
import axios from 'axios';


// axios settings
axios.defaults.withCredentials = true
axios.defaults.baseURL = '/api';
axios.defaults.headers.common['Accept'] = 'application/json';


createApp(MainLayout)
    .use(store)
    .use(router)
    .mount('#app');
