import Vue from 'vue';
import Router from 'vue-router';
import MainPage from '../views/main-page';
import GamePage from '../views/game-page';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage,
    },
    {
      path: '/game',
      name: 'game',
      component: GamePage,
    },
  ],
});
