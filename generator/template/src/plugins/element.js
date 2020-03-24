import Vue from 'vue'
import {
  Button,
  MessageBox,
  Loading,
  Message,
  Notification
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Button)
Vue.use(Loading.directive)

Vue.prototype.$loading = ({ lock = true, text = '加载中', background = 'rgba(0, 0, 0, 0.7)' } = {}) => Loading.service({ lock, text, background})
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
