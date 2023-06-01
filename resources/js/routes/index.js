import Vue from 'vue'
import VueRouter from 'vue-router'

import { isLoggedIn } from "../helpers/authentication";

Vue.use(VueRouter);

const routes = [
    { path:'/dashboard', name:'dashboard', component: () => import('./../views/Dashboard'), beforeEnter: authGuard},

    // Products
    { path:'/product', name:'product.index', component: () => import('./../views/product/Index'), beforeEnter: authGuard},
    { path:'/product/create', name:'product.create', component: () => import('./../views/product/Create'), beforeEnter: authGuard},
    { path:'/product/:id/edit', name:'product.edit', component: () => import('./../views/product/Create'), beforeEnter: authGuard},
    { path:'/product/:id/view', name:'product.view', component: () => import('./../views/product/View'), beforeEnter: authGuard},

    // Purchase
    { path:'/purchase', name:'purchase.index', component: () => import('./../views/purchase/Index'), beforeEnter: authGuard},
    { path:'/purchase/create', name:'purchase.create', component: () => import('./../views/purchase/Create'), beforeEnter: authGuard},
    { path:'/purchase/:id/view', name:'purchase.view', component: () => import('./../views/purchase/View'), beforeEnter: authGuard},

    { path:'/stock', name:'stock.index', component: () => import('./../views/stock/Stock'), beforeEnter: authGuard},

    // Suppliers
    { path:'/supplier', name:'supplier.index', component: () => import('./../views/supplier/Index'), beforeEnter: authGuard},
    { path:'/supplier/create', name:'supplier.create', component: () => import('./../views/supplier/Create'), beforeEnter: authGuard},
    { path:'/supplier/:id/edit', name:'supplier.edit', component: () => import('./../views/supplier/Create'), beforeEnter: authGuard},
    { path:'/supplier/:id/view', name:'supplier.view', component: () => import('./../views/supplier/View'), beforeEnter: authGuard},
]
const router = new VueRouter({
    mode:'history',
    routes
})

// ==========check login or not==========
function authGuard(to, from, next) {
    if (isLoggedIn()){
        next();
    }else{
        next('/login')
    }
}
export default router
