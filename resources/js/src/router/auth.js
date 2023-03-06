import guest from "@src/router/middleware/guest";

export default [
    {
        path: '/user/auth',
        meta: {
            middleware: [guest]
        },
        component: () => import('@src/layouts/AuthLayout.vue'),
        children: [
            {
                path: 'login',
                name: 'auth.login',
                meta: {
                    title: 'Login'
                },
                component: () => import('@src/views/user/LoginView.vue')
            }
        ]
    }
]
