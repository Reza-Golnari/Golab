import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/product/:id',
      name: 'singleProduct',
      component: () => import('@/views/SingleProduct/ProductPage.vue'),
    },
  ]
})

export default router
