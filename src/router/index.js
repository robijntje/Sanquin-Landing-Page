import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Informatie from '@/views/Informatie.vue'
import MedicationView from '@/views/MedicationView.vue'
import SignUpView from '@/views/SignUpView.vue'
import StoryView from '@/views/StoryView.vue'
import Step1 from '@/views/Step1.vue'
import Step2 from '@/views/Step2.vue'
import Step3 from '@/views/Step3.vue'
import Step4 from '@/views/Step4.vue'


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
      path: '/informatie/hoemeldikmeaan',
      name: 'aanmelden',
      component: SignUpView,
    },

    {
      path: '/informatie/hoemeldikmeaan/stap1',
      name: 'stap1',
      component: Step1,
    },

    {
      path: '/informatie/hoemeldikmeaan/stap2',
      name: 'stap2',
      component: Step2,
    },

    {
      path: '/informatie/hoemeldikmeaan/stap3',
      name: 'stap3',
      component: Step3,
    },

    {
      path: '/informatie/hoemeldikmeaan/stap4',
      name: 'stap4',
      component: Step4,
    },

    {
      path: '/verhalen',
      name: 'verhalen',
      component: StoryView,
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
