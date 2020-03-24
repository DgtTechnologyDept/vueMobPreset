import Vue from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css'
import './plugins/element.js'
import router from './router'
import store from './store'
import './icon' // icon

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
