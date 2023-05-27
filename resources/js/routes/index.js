import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    { path:'/', name:'dashboard', component: () => import('./../views/Dashboard')},

    // Products
    { path:'/product', name:'product.index', component: () => import('./../views/product/Index')},
    { path:'/product/create', name:'product.create', component: () => import('./../views/product/Create')},
    { path:'/product/:id/view', name:'product.view', component: () => import('./../views/product/View')},

    // Purchase
    { path:'/product', name:'product.index', component: () => import('./../views/product/Index')},
    { path:'/product/create', name:'product.create', component: () => import('./../views/product/Create')},
    { path:'/product/:id/view', name:'product.view', component: () => import('./../views/product/View')},
]
const router = new VueRouter({
    mode:'history',
    routes
})

export default router
