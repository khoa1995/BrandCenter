import Vue from 'vue'
import Vuex from 'vuex'
import config from './modules/config'
import toast from './modules/toast'
import downloadbox from './modules/downloadbox'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    config,
    toast,
    downloadbox
  }
})
