import { createApp } from 'vue';
import MainLayout from "./layouts/MainLayout.vue";
import router from "./router/index";


createApp(MainLayout)
    .use(router)
    .mount('#app');
