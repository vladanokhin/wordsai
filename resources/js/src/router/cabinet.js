import user from "@src/router/middleware/user";
import auth from "@src/router/middleware/auth";

export default [
    {
        path: '/user',
        meta: { middleware: [user, auth] },
        component: () => import('@src/layouts/MainLayout.vue'),
        children: [
            {
                path: 'cabinet',
                name: 'user.cabinet',
                meta: {
                    tile: 'User Cabinet'
                },
                component: () => import('@src/views/user/CabinetView.vue')
            }
        ]

    }
];
