import { createRouter, createWebHistory } from 'vue-router';
import admin from "./admin";
import auth from "./auth";


const router = createRouter({
    linkActiveClass: 'active',
    base: import.meta.env.BASE_URL,
    history: createWebHistory(),
    routes: [
        ...admin,
        ...auth,
        ...[
            {
                path: '/',
                redirect: {'name': 'admin.dashboard'}
            }
        ]
    ],
});

export default router
