import Vue from 'vue'
import 'todomvc-app-css/index.css'
import 'todomvc-common/base.css'
import 'todomvc-common/base'

import store from './store'

import App from './App'

Vue.config.productionTip = false
if (process.env.NODE_ENV === 'development') {
  Vue.config.debug = true
}
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
})
