import user from "@src/router/middleware/user";
import auth from "@src/router/middleware/auth";
import guest from "@src/router/middleware/guest";

export default [
    {
        path: '/user/auth',
        meta: { middleware: [guest] },
        component: () => import('@src/layouts/AuthLayout.vue'),
        children: [
            {
                path: 'login',
                name: 'user.auth.login',
                meta: { title: 'Login' },
                component: () => import('@src/views/user/auth/LoginView.vue')
            },
            {
                path: 'sign-up',
                name: 'user.auth.sign-up',
                meta: { title: 'Sign Up' },
                component: () => import('@src/views/user/auth/SignUpView.vue')
            }
        ]
    },
    {
        path: '/user',
        meta: { middleware: [user, auth] },
        component: () => import('@src/layouts/MainLayout.vue'),
        children: [
            {
                path: 'cabinet',
                name: 'user.dashboard',
                meta: { title: 'Dashboard' },
                component: () => import('@src/views/user/Dashboard.vue')
            },
            {
                path: 'lists',
                name: 'user.lists',
                meta: { title: 'Lists' },
                component: () => import('@src/views/user/ListView.vue')
            }
        ]

    }
];
