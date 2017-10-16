// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import ProductData from '@/mocks/data'

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    ProductData,
    cart: [],
    vouchers: [
      {code: 'ABC', value: 5.00, msg: 'off your order'},
      {code: '123', value: 10.00, min: 50.00, msg: '£10.00 off when you spend over £50.00'},
      {code: 'XYZ', value: 15.00, min: 75.00, category: 'footwear', msg: 'off your order'}
    ]
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
