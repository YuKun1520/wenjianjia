import Vue from 'vue'
import App from './App.vue'
import router from './scripts/router.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(VueAxios,axios)
Vue.use(ElementUI)
Vue.axios.defaults.baseURL = 'http://yukun1520.gz01.bdysite.com/api/';

let objectTostring = function(data){
  let arr = [];
  for (const key in data){
    if (data.hasOwnProperty(key)){
      const element = data[key];
      arr.push(key+'='+element)
    }
  }
  return arr.join('&');
}

Vue.prototype.$parseString = objectTostring

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')