import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import './scss/bootstrap.scss'

//Create the App with the router
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
