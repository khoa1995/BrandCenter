import Vue from 'vue'
import Vuex from 'vuex'
import config from './modules/config'
import toast from './modules/toast'
import downloadbox from './modules/downloadbox'
import brand from './modules/brand'
import category from './modules/category'
import packages from './modules/packages'
import files from './modules/files'
import criteria from './modules/criteria'
import suggestions from './modules/suggestions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    config,
    toast,
    downloadbox,
    brand,
    category,
    packages,
    files,
    criteria,
    suggestions
  }
})
