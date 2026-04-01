import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // We will add the /dish/:id route later for the Detail View [cite: 22, 28]
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;