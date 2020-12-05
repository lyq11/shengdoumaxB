// 引入全局的样式文件
import './assets/css/global.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './utils/ws.js'

Vue.config.productionTip = false

// Vue.prototype.$http = axios
Vue.prototype.$echarts = window.echarts

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
