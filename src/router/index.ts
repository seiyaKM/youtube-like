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
        component: import('@/pages/Home.vue'),
      },
      {
        path: 'short',
        name: 'short',
        component: import('@/pages/Short.vue'),
      },
      {
        path: 'subscription',
        name: 'subscription',
        component: import('@/pages/Subscription.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
