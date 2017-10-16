import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Products from '@/components/Products'
import Cart from '@/components/cart'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Products',
      component: Products
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})
