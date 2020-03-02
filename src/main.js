import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 使用element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 使用axios
import axios from 'axios';
Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
}).$mount('#app')