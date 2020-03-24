import Vue from 'vue'
import {
  Button,
  Toast
} from 'vant'

Toast.setDefaultOptions('loading', { forbidClick: true, duration: 0 })
Toast.setDefaultOptions('success', { forbidClick: true, duration: 1500 })
Toast.setDefaultOptions('fail', { forbidClick: true, duration: 1500 })

Vue.use(Button)
Vue.use(Toast)
