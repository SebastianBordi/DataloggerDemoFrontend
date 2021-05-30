import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/sensors',
    name: 'Sensors',
    component: () => import(/* webpackChunkName: "sensors" */ '../views/Sensors.vue')
  },
  {
    path: '/measurements',
    name: 'Measurenments',
    component: () => import(/* webpackChunkName: "Measurenments" */ '../views/Measurements.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
