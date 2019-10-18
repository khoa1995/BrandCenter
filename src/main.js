import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Libs
import BootstrapVue from 'bootstrap-vue'

// Libs style
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './assets/scss/main.scss'
import './directives'
import './filters'
import './mixins'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
