import { createRouter, createWebHistory } from 'vue-router';
import admin from "./admin";
import auth from "./auth";
import cabinet from "./cabinet";
import store from "@src/store";


const router = createRouter({
    linkActiveClass: 'active',
    base: import.meta.env.BASE_URL,
    history: createWebHistory(),
    routes: [
        ...auth,
        ...admin,
        ...cabinet,
        ...[
            {
                path: '/',
                redirect: {'name': 'admin.dashboard'}
            },
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
    console.log(routes)
    if(middlewares.length) {
        for(const middleware of middlewares) {
            await middleware({ to, from, next })
        }
    }

    // All required data loaded
    // await store.dispatch('loaded')

    return next()
})

// Redirect all request that need authentication to login page
// router.beforeResolve((to, from, next) => {
//     const isAuthenticated = store.getters['isUserAuthenticated'];
//
//     if (to.meta.requiresAuth && !isAuthenticated)
//         next({ name: 'auth.login' });
//     else
//         next();
// });

// router.beforeResolve((to, from, next) => {
//     const isAuthenticated = store.getters['isUserAuthenticated'];
//
//     if (isAuthenticated && ['auth.login', 'auth.register'].includes(to.name))
//         next({'name': 'user.cabinet'})
//     else
//         next();
// });


// Redirect all request to 403 if page is for admin users
// router.beforeResolve((to, from, next) => {
//     const isAdmin = store.getters['getUserData']('is_admin', false);
//
//     if (to.meta.requiresAdmin) {
//         if (isAdmin)
//             next();
//
//         // https://stackoverflow.com/questions/51124463/custom-handling-forward-slashes-in-vue-router-ids
//         const path = to.path.split('/').filter(el => !!el);
//         // TODO create 403 view
//         next({ name: 'error.404', params: {path} });
//     } else {
//         next();
//     }
// });

// Change title on page
router.beforeEach((to, from) => {
    const defaultTitle = 'WordAI'
    document.title = to.meta.title || defaultTitle;

});

export default router
