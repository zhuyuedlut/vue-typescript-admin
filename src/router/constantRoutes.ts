import { RouteConfig } from 'vue-router'

import Layout from '@/layout/index.vue'


const constantRoutes: Array<RouteConfig> = [
    {
        path: '/redirect',
        component: Layout,
        meta: {
            hidden: true
        },
        children: [
            {
                path: '/redirect/:path(.*)',
                component: () => import(/* webpackChunkName: "redirect" */ '@/views/redirect/index.vue'),
            }
        ],
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "guide" */ '@/views/login/index.vue'),
        meta: { hidden: true }
    },
    {
        path: '/404',
        name: '404',
        component: () => import(/* webpackChunkName: "404" */ '@/views/error-page/404.vue')
    },
];

export default constantRoutes;