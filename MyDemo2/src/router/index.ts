import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      component: () => import('@/views/MyHome.vue'),
      children: [
        {
          path: '/about',
          component: () => import('@/components/About.vue')
        },
        {
          path: '/setting',
          component: () => import('@/components/Setting.vue')
        },
        {
          path: '/three',
          component: () => import('@/views/Three/ThreeTest.vue')
        },
      ]
    },
    {
      path: '/customer',
      component: () => import('@/views/ListManagement/Layout.vue'),
      children: [
        {
          path: '/customer/list',
          component: () => import('@/views/ListManagement/CustomerList.vue')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/Member/Login.vue')
    }
  ]
})

export default router
