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
    path: '/todoslosproductos',
    name: 'Todoslosproductos',
    component: () => import('@/components/Todoslosproductos.vue') 
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
},
{
  path: '/camisa',
  name: 'Camisa',
  component: () => import('@/components/productos/CamisaFormal.vue')
},
{
  path: '/chaqueta',
  name: 'Chaqueta',
  component: () => import('@/components/productos/ChaquetadeCuero.vue')
},
{
  path: '/sueter',
  name: 'Sueter',
  component: () => import('@/components/productos/SueterNavideño.vue')
},
{
  path: '/zapatosC',
  name: 'ZapatosC',
  component: () => import('@/components/productos/ZapatosCasuales.vue')
},
{
  path: '/jeans',
  name: 'Jeans',
  component: () => import('@/components/productos/JeansSlimFit.vue')
},
{
  path: '/abrigo',
  name: 'Abrigo',
  component: () => import('@/components/productos/AbrigodeInvierno.vue')
},
{
  path: '/vestido',
  name: 'Vestido',
  component: () => import('@/components/productos/Vestido.vue')
},
{
  path: '/pijama',
  name: 'Pijama',
  component: () => import('@/components/productos/Pijama.vue')
},
{
  path: '/conjuntoN',
  name: 'ConjuntoN',
  component: () => import('@/components/productos/ConjuntoNino.vue')
},
{
  path: '/accesorios',
  name: 'Accesorios',
  component: () => import('@/components/categoria/Accesorios.vue')
},
{
  path: '/hombre',
  name: 'Hombre',
  component: () => import('@/components/categoria/Hombre.vue')
},
{
  path: '/mujer',
  name: 'Mujer',
  component: () => import('@/components/categoria/Mujer.vue')
},
{
  path: '/ninos',
  name: 'Ninos',
  component: () => import('@/components/categoria/Ninos.vue')
},
];



const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
