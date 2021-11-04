import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue';

const routes = [
  {
    path: '/',
    redirect: '/app',
  },
  {
    path: '/app',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/app/home',
      },
      {
        path: 'home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'about',
        component: () => import('@/views/About.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
