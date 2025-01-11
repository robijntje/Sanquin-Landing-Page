import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Informatie from '@/views/Informatie.vue'
import MedicationView from '@/views/MedicationView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/informatie',
      name: 'informatie',
      component: Informatie,
    },

    {
      path: '/informatie/magikmetmijnmedicatiedoneren',
      name: 'medicatie',
      component: MedicationView,
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
