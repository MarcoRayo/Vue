import VueRouter from "vue-router"
import Vue from 'vue'
Vue.use(VueRouter);
const routes = [
    {
        //La ruta base
        path: '/',
        redirect: '/Inicio'
    },
    //Las rutas asociadas a los componentes
    {
        path: "/",
        component: {
            render(c) {
                return c("router-view")
            }
        },
        children: [
            {
                path: '/Inicio',
                name: 'Inicio',
                component: () => import("../components/Inicio.vue")
            },            
            {
                path: '/TuEspacio',
                name: 'TuEspacio',
                component: () => import("../components/RentaTuEspacio.vue")
            },
            {
                path: '/RentaEspacio',
                name: 'RentaEspacio',
                component: () => import("../components/RentarEspacio.vue")
            },            
            {
                path: '/Informacion',
                name: 'Informacion',
                component: () => import("../components/InformacionEspacio.vue")
            },
            {
                path: '/Oferta',
                name: 'Oferta',
                component: () => import("../components/OfertarEspacio.vue")
            },            
            {
                path: '/Catalogo',
                name: 'Catalogo',
                component: () => import("../components/CatalogoEspacio.vue")
            },            
            {
                path: '/Detalle',
                name: 'Detalle',
                component: () => import("../components/DetalleEspacio.vue")
            },
        ],


    }
]

const router = new VueRouter({ routes });
export default router;