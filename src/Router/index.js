import { createRouter, createWebHistory } from 'vue-router'
import Principal from '@/components/Pages/Principal.vue'


const routes = [
  {
    path: '/',
    name: 'principal',
    component: Principal
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/components/Pages/Login.vue')
  },
  {
    path: '/registrarseV',
    name: 'RegistrarseV',
    component: () => import('@/components/Pages/RegistrarseV.vue')
  },

] 

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
