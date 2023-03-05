export default [
    {
        path: '/admin',
        name: 'admin.dashboard',
        meta: {
            requiresAuth: true,
            title: 'Admin dashboard'
        },
        component: () => import('../views/admin/DashboardView.vue'),
        children: [
            {
                path: 'list',
                name: 'admin.list',
                mete: {
                    title: 'Admin list'
                },
                component: () => import('../views/admin/ListView.vue')
            }
        ]
    }
];
