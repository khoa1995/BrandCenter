import {
  GET_PACKAGE_BY_BRAND,
  UPDATE_PACKAGE,
  MAKE_TOAST
} from './../action-types'
import { getPackageByBrand } from '@/services/packages'

const state = {
  packageList: []
}

const mutations = {
  [UPDATE_PACKAGE] (state, payload) {
    state.packageList = payload
  }
}

const actions = {
  async [GET_PACKAGE_BY_BRAND] ({ commit, dispatch }, brandId) {
    try {
      let response = await getPackageByBrand(brandId)

      if (response && response.data.Status) {
        // Update store
        commit(UPDATE_PACKAGE, response.data.Data)

        return Promise.resolve(response)
      } else {
        // Make toast an error
        dispatch(`toast/${MAKE_TOAST}`, {
          title: response.data.Message,
          variant: 'danger'
        }, { root: true })
        
        return Promise.reject(response.data.Message)
      }
    } catch (error) {
      // Make toast an error
      dispatch(`toast/${MAKE_TOAST}`, {
        title: error,
        variant: 'danger'
      }, { root: true })

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
