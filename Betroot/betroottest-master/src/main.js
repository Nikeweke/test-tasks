import Vue from 'vue'
import app from './app'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let router = new VueRouter()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<app/>',
  components: { app }
})
