import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import Projeto1 from './pages/Projeto1.vue';
import Projeto2 from './pages/Projeto2.vue';

const routes = [
  { path: '/', component: Home },

  { path: '/projeto1', component: Projeto1 },
  { path: '/projeto2', component: Projeto2 }
];

export default createRouter({
  history: createWebHistory(),
  routes
});