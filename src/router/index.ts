import { createRouter, createWebHistory } from 'vue-router'
import SignupView from '@/views/SignupView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Signup',
      component: SignupView
    },
  ]
})

export default router
