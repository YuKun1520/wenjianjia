import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './scripts/router.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.css'
import './scripts/directive.js'
import 'babel-polyfill' //解决IE浏览器ES6的问题 npm install babel-polyfill

Vue.config.productionTip = false
// Vue.prototype.$http = axios 
Vue.use(VueRouter)
Vue.use(ElementUI);
Vue.use(VueAxios, axios)

new Vue({
  el:"#app",
  router,
  render: h => h(App),
})
