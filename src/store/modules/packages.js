import {
  GET_PACKAGE_BY_BRAND,
  UPDATE_PACKAGE,
  SET_PACKAGE_LOADING,
  MAKE_TOAST
} from './../action-types'
import { getPackageByBrand } from '@/services/packages'

const state = {
  isLoading: false,
  packageList: []
}

const mutations = {
  [UPDATE_PACKAGE] (state, payload) {
    state.packageList = payload
  },
  [SET_PACKAGE_LOADING] (state, payload) {
    state.isLoading = payload
  }
}

const actions = {
  async [GET_PACKAGE_BY_BRAND] ({ commit, dispatch }, brandId) {
    // Show loading
    commit(SET_PACKAGE_LOADING, true)
    // Clear package component before reload the new one.
    commit(UPDATE_PACKAGE, [])

    try {
      let response = await getPackageByBrand(brandId)

      if (response && response.data.Status) {
        // Update store
        commit(UPDATE_PACKAGE, response.data.Data)

        setTimeout(function () { commit(SET_PACKAGE_LOADING, false) }, 2000) // Remember to remove setTimeout in PROD env

        return Promise.resolve(response)
      } else {
        // Make toast an error
        dispatch(`toast/${MAKE_TOAST}`, {
          title: response.data.Message,
          variant: 'danger'
        }, { root: true })

        commit(SET_PACKAGE_LOADING, false)

        return Promise.reject(response.data.Message)
      }
    } catch (error) {
      // Make toast an error
      dispatch(`toast/${MAKE_TOAST}`, {
        title: error,
        variant: 'danger'
      }, { root: true })

      commit(SET_PACKAGE_LOADING, false)
      // Reject an error
      return Promise.reject(error)
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
