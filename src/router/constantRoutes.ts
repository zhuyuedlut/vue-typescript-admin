import {RouteConfig} from "vue-router";


const constantRoutes: Array<RouteConfig> = [
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "guide" */ '@/views/login/index.vue')
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
    }

];

export default constantRoutes;