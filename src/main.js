import Vue from 'vue'
import App from './App.vue'

import './assets/css/basic.scss';   

import VueResource from 'vue-resource';
Vue.use(VueResource);



import VueRouter from 'vue-router'
Vue.use(VueRouter)

//1.创建组件

import Home from './components/Home.vue';

import News from './components/News.vue';

import Content from './components/Content.vue';

//2.配置路由   注意：名字
const routes = [
  { path: '/home', component: Home },
  { path: '/news', component: News },

  { path: '/content/:aid', component: Content },   /*动态路由*/

  { path: '*', redirect: '/home' }   /*默认跳转路由*/
]

//3.实例化VueRouter  注意：名字
const router = new VueRouter({
	mode:"history",
  routes // （缩写）相当于 routes: routes
})

//4.挂载路由
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

//5 <router-view></router-view> 放在 App.vue