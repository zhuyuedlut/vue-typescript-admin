import Vue from 'vue';
import Route from 'vue-router';
import constantRoutes from "@/router/constantRoutes";

Vue.use(Route);

const createRoute = () => new Route({
    base: process.env.VUE_APP_BASE_API, // 应用的基本路径，设定整个应用在某个应用之下
    routes: constantRoutes,
})

const router = createRoute();

export default router;