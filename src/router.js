import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import MoviesNew from './views/Movies/New.vue';
import MoviesShow from './views/Movies/Show.vue';
import MoviesIndex from './views/Movies/Index.vue';
import MoviesEdit from './views/Movies/Edit.vue';
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, 
    {
      path: '/movies/new',
      name: 'movies-new',
      component: MoviesNew
    }, 
    {
      path: '/movies', 
      name: 'movies-index', 
      component: MoviesIndex
    },
    {
      path: '/movies/:id', 
      name: 'movies-show', 
      component: MoviesShow
    }, 
    {
      path: '/movies/:id/edit', 
      name: 'movies-edit', 
      component: MoviesEdit
    }, 
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/login', 
      name: 'login', 
      component: Login 
    },
    { path: "/logout",
      name: "logout",
      component: Logout }
  ]
});
