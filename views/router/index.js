import Vue from 'vue'
import Router from 'vue-router'

import UsersPage from '../pages/Users.vue'
import HomePage from '../pages/Home.vue'

Vue.use(Router)

const router = new Router ({
  root: '/',
  routes: 
  [
    { path: '/users', name: 'users', component: UsersPage },
    { path: '/', name: 'home', component: HomePage },
    { path: '/', redirect: '/' }
  ]
})

export default router