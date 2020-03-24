import Vue from 'vue'
import App from './App.vue'
import 'normalize.css'
import 'amfe-flexible/index.js'
import './plugins/vant.js'
import router from './router'
import store from './store'
import './icon' // svg-icon

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
