export default [
    {
        path: '/cabinet',
        name: 'user.cabinet',
        meta: {
            requiresAuth: false,
            title: 'Cabinet'
        },
        component: () => import('../views/user/CabinetView.vue')
    }
];
