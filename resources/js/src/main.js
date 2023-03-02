import { createApp } from 'vue';
import MainLayout from "./layouts/MainLayout.vue";
import router from "./router/index";
import store from "./store";


createApp(MainLayout)
    .use(store)
    .use(router)
    .mount('#app');
