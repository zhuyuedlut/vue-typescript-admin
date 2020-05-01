import {RouteConfig} from "vue-router";


const constantRoutes: Array<RouteConfig> = [
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "guide" */ '@/views/login/index.vue')
    },
];

export default constantRoutes;