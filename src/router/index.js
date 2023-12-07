import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/components/Login.vue";
import Products from "@/components/Products.vue";
import Registration from "@/components/Registration.vue";
import Cart from "@/components/Cart.vue";
import CompletedOrders from "@/components/CompletedOrders.vue"
import Order from "@/components/Order.vue"
import Logout from "@/components/Logout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'Products',
      component:Products
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
     },
    {
      path:'/logout',
      name:'Logout',
      component:Logout,
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path:'/registration',
      name:'Registration',
      component:Registration,
    },
    {
      path:'/cart',
      name:'Cart',
      component:Cart,
    },
    {
      path:'/order',
      name:'Order',
      component: Order,
    },
    {
      path:'/my-orders',
      name:'Completed-Orders',
      component: CompletedOrders,
    }
  ]
})

export default router
