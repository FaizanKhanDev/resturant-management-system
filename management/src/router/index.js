import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/signup',
      name:'SignUp',
      component: () => import('../views/SignupView.vue')

    },
    {
      path:'/login',
      name:'Login',
      component: () => import('../views/Login.vue')
    }

  ]
})

export default router
