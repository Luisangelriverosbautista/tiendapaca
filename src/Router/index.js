import { createRouter, createWebHistory } from 'vue-router'

import Principal from '../components/Pages/Principal.vue';
import IniciarS from '../components/Pages/IniciarS.vue';

const routes = [
  {
    path: '/',
    name: 'principal',
    component: Principal
  },
  {
    path: '/iniciarS',
    name: 'IniciarS',
    component: () => import('@/components/Pages/IniciarS.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/components/Pages/Login.vue')
  },

] 

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
