import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: 'home',
        alias: '',
        name: 'home',
        component: import('@/pages/HomePage.vue'),
      },
      {
        path: 'short',
        name: 'short',
        component: import('@/pages/ShortPage.vue'),
      },
      {
        path: 'subscription',
        name: 'subscription',
        component: import('@/pages/SubscriptionPage.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
