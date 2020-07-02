import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element'
import './plugins/svg'
import './permission'

import i18n from '@/lang'

import '@/icons/components'

import 'normalize.css'
import '@/styles/index.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
