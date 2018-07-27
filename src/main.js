import Vue from 'vue'
import App from './App.vue'

import './assets/css/basic.scss';

import VueResource from 'vue-resource';
Vue.use(VueResource);

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

import router from './router/router.js'



//4.挂载路由
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

//5 <router-view></router-view> 放在 App.vue
