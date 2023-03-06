import { createRouter, createWebHistory } from 'vue-router';
import admin from "./adminRouter";
import user from "./userRouter";
import store from "@src/store";


const router = createRouter({
    linkActiveClass: 'active',
    base: import.meta.env.BASE_URL,
    history: createWebHistory(),
    routes: [
        ...user,
        ...admin,
        ...[
            {
                path: '/:pathMatch(.*)*',
                name: 'error.404',
                component: () => import('../views/NotFoundView.vue'),
            }
        ]
    ],
});

router.beforeResolve( async (to, from, next) => {
    const routes = [].concat(to.matched)

    const middlewares = routes.reduce((middlewares, route) => {
        return route.meta?.middleware ? middlewares.concat(route.meta.middleware) : middlewares;
    }, []);

    if(middlewares.length) {
        for(const middleware of middlewares) {
            await middleware({ to, from, next })
        }
    }

    // All required data loaded
    // await store.dispatch('loaded')

    return next()
})

// Change title on page
router.beforeEach((to, from) => {
    const defaultTitle = 'WordAI'
    document.title = to.meta.title || defaultTitle;

});

export default router
