import {
  GET_BRAND_LIST,
  UPDATE_BRAND_LIST,
  UPDATE_SELECTED_BRAND,
  MAKE_TOAST
} from './../action-types'
import { getBrandList } from '@/services/brand'
import localforage from '@/services/storage'

const state = {
  brandList: []
}

const getters = {
  selectedBrand (state) {
    return state.brandList.find(x => x.IsDefault)
  },
  selectedBrandColor (state, getters) {
    return getters.selectedBrand ? getters.selectedBrand.BrandColor : ''
  }
}

const mutations = {
  [UPDATE_BRAND_LIST] (state, brandList) {
    state.brandList = brandList
  },
  [UPDATE_SELECTED_BRAND] (state, brandId) {
    state.brandList.forEach(brand => {
      brand.IsDefault = brand.BrandId === brandId
    })
  }
}

const actions = {
  async [GET_BRAND_LIST] ({ commit, dispatch, getters }) {
    try {
      let response = await getBrandList()

      if (response && response.data.Status) {
        // Update state
        commit(UPDATE_BRAND_LIST, response.data.Data)

        // Update storage
        localforage.setItem('defaultBrand', getters.selectedBrand)
          .then(value => {})
          .catch(error => {
            // Make toast an error
            dispatch(`toast/${MAKE_TOAST}`, {
              title: error,
              variant: 'danger'
            }, { root: true })
          })
      }
    } catch (error) {
      // Make toast an error
      dispatch(`toast/${MAKE_TOAST}`, {
        title: 'error',
        variant: 'danger'
      }, { root: true })

      // Reject an error
      return Promise.reject(error)
    }
  },
  [UPDATE_SELECTED_BRAND] ({ commit }, payload) {
    commit(UPDATE_SELECTED_BRAND, payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
