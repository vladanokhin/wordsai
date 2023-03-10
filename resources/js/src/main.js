import { createApp } from 'vue';
import App from "./layouts/App.vue";
import router from "./router/index";
import store from "./store";
import VueSweetalert2 from 'vue-sweetalert2';

createApp(App)
    .use(store)
    .use(VueSweetalert2)
    .use(router)
    .mount('#app');
