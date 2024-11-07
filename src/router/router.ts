import { createWebHistory, createRouter } from 'vue-router';

const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../components/HomeVue.vue'),
    },
    {
      path: '/preview',
      name: 'Preview',
      component: () => import('../components/Preview.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Not found',
      component: () => import('../components/PageNotFound.vue'),
    },
  ],
  history: createWebHistory('/'),
});

export default router;
