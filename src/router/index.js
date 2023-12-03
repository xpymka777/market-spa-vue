import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/components/Login.vue";
import Products from "@/components/Products.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
     },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
  ]
})

export default router
