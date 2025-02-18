import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      component: () => import('@/views/Layout/Layout.vue'),
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: () => import('@/views/Home/Home.vue')
        },
        {
          path: '/about',
          component: () => import('@/views/About.vue')
        },
        {
          path: '/setting',
          component: () => import('@/views/Setting/Settings.vue')
        },
        {
          path: '/forPay',
          component: () => import('@/views/Setting/ForPay.vue')
        },
        {
          path: '/three',
          component: () => import('@/views/Three/ThreeTest.vue')
        },
        {
          path: '/customer',
          component: () => import('@/views/ListManagement/Layout.vue'),
          redirect: '/customer/list',
          children: [
            {
              path: '/customer/list',
              component: () => import('@/views/ListManagement/CustomerList.vue')
            }
          ]
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
