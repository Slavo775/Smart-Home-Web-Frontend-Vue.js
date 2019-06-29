import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/pridaj-zariadenie',
      name: 'pridaj-zariadenie',
      component: () => import('./views/pridaj-zariadenie.vue'),
    },
    {
      path: '/pridaj-izbu',
      name: 'pridaj-izbu',
      component: () => import('./views/add-room.vue'),
    },
  ],
});
