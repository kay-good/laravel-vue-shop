import { createRouter, createWebHistory } from 'vue-router';
import Home from '../Pages/Home.vue';
import Cart from '../Pages/Cart.vue';
import Order from '../Pages/Order.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
