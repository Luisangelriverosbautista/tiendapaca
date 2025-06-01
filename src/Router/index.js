import { createRouter, createWebHashHistory } from "vue-router";



import login from "/src/components/Pages/login.vue";
// import Registro from "../page/registro.vue";
import Principal from "/src/components/Pages/Principal.vue";

const routes = [
    {
        path: "/",
       
        component: Principal,

    },
    {
        path: "/login",
        name: "login",
        component: login,
    }
    // {
    //     path: "/horario",
    //     name: "horario",
    //     component: Horario,
    // },
    // {
    //     path: "/ciclos",
    //     name: "ciclos",
    //     component: HelloWorld,
    // },
    // {
    //     path: "/props",
    //     name: "props",
    //     component: Padre,
    // },
    //    {path: "/eventos",
    //     name: "eventos",
    //     component: eventos,
    // },
    // {path: "/registro",
    //     name: "registro",
    //     component: Registro,
    // },
    // {path: "/login",
    //     name: "login",
    //     component: Login,
    // },
    
    
]

const router = createRouter({ 
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;
