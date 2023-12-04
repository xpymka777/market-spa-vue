import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/components/Login.vue";
import Products from "@/components/Products.vue";
import Registration from "@/components/Registration.vue";
import Cart from "@/components/Cart.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path:'/',
    //   name:'Products',
    //   component:Products
    // },
    {
      path: '/login',
      name: 'Login',
      component: Login
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
    }
  ]
})

export default router
