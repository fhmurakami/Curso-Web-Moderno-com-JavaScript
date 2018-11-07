import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORÁRIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkZlbGlwZSBILiBNdXJha2FtaSIsImVtYWlsIjoiZmVsaXBlQGVtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE1NDE1OTc1ODQsImV4cCI6MTU0MTg1Njc4NH0.zC2YCE3l3nwPNCK642__1rjXLRZAbS42vaepOxDlhfI'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')