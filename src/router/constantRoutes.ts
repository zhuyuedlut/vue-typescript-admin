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
        component: () => import(/* webpackChunkName: "redirect" */ '@/views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "guide" */ '@/views/login/index.vue'),
    meta: { hidden: true }
  },
  {
    path: '/auth-redirect',
    name: 'auth-redirect',
    component: () => import(/* webpackChunkName: "auth-redirect" */ '@/views/login/auth-redirect.vue'),
    meta: { hidden: true }
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '@/views/error-page/404.vue'),
    meta: { hidden: true }
  },
  {
    path: '401',
    name: '401',
    component: () => import(/* webpackName: "401" */ '@/views/error-page/401.vue'),
    meta: { hidden: true }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
      name: 'Dashboard',
      meta: {
        title: 'dashboard',
        icon: 'dashboard',
        affix: true
      }
    }]
  }
]

export default constantRoutes
