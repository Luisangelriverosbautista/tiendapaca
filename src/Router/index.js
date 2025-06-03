import { createRouter, createWebHistory } from 'vue-router'
import Principal from '@/components/Pages/Principal.vue'


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
    {
    path: '/ofertas',
    name: 'Ofertas',
    component: () => import('@/components/Ofertas.vue') 
  },
  {
    path: '/zapatos',
    name: 'Zapatos',
    component: () => import('@/components/productos/Zapatos.vue')
   
  },
  {
    path: '/gorra',
    name: 'Gorra',
    component: () => import('@/components/productos/Gorra.vue')
  }, {

    path: '/chaleco',
    name: 'Chaleco',
    component: () => import('@/components/productos/Chaleco.vue')
  },
  {
  path: '/reloj',
  name: 'Reloj',
  component: () => import('@/components/productos/Reloj.vue')
},
{
  path: '/mochila',
  name: 'Mochila',
  component: () => import('@/components/productos/Mochila.vue')
},
{
  path: '/conjunto',
  name: 'Conjunto',
  component: () => import('@/components/productos/ConjuntoDeportivo.vue')
}


];



const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
