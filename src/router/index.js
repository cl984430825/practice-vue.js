import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import shopPrice from '@/pages/shopPrice'
import todoList from '@/pages/todoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/shopPrice',
      name: 'shopPrice',
      component: shopPrice
    },
    {
      path: '/todoList',
      name: 'todoList',
      component: todoList
    }
  ]
})
