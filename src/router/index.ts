import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DishDetailView from '../views/DishDetailView.vue'; // Import the new view

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dish/:id', // The :id acts as a variable
    name: 'dish-detail',
    component: DishDetailView
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;