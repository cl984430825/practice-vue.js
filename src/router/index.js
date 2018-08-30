import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import shopPrice from '@/pages/shopPrice'

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
    }
  ]
})
