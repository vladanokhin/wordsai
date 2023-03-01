export default [
    {
        path: '/admin',
        children: [
            {
            path: 'dashboard',
            name: 'admin.dashboard',
            component: () => import('../views/admin/DashboardView.vue')
            },
            {
                path: 'list',
                name: 'admin.list',
                component: () => import('../views/admin/ListView.vue')
            }
        ]
    }
];
