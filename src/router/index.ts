import Vue from 'vue'
import Route from 'vue-router'
import constantRoutes from '@/router/constantRoutes'

Vue.use(Route)

const createRouter = () => new Route({
    base: process.env.VUE_APP_BASE_API, // 应用的基本路径，设定整个应用在某个应用之下
    routes: constantRoutes,
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter();
    (router as any).matcher = (newRouter as any).matcher
}

export default router;