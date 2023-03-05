export default [
    {
        path: '/login',
        name: 'auth.login',
        meta: {
            title: 'Login',
            layout: 'AuthLayout'
        },
        component: () => import('@src/views/user/LoginView.vue')
    }
]
