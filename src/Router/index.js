import { createRouter, createWebHashHistory } from "vue-router";



import registro from "/src/components/Pages/registrarseV.vue";
// import Registro from "../page/registro.vue";
import Principal from "/src/components/Pages/Principal.vue";

const routes = [
    {
        path: "/",
       
        component: Principal,

    },
    {
        path: "/registro",
        name: "registro",
        component: registro,
    }
   
    
]

const router = createRouter({ 
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;
