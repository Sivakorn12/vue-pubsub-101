// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import pubsub from 'pubsub-js'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import './assets/css/main.css'

Vue.use(Buefy)

Vue.config.productionTip = false
Vue.prototype.$pubsub = pubsub

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
