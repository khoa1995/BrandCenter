import {
  GET_BRAND_LIST,
  UPDATE_BRAND_LIST,
  UPDATE_SELECTED_BRAND,
  GET_BRAND_ID_BY_SLUG,
  UPDATE_BRAND_SLUG_STATE,
  MAKE_TOAST
} from './../action-types'
import {
  getBrandList,
  getBrandIdBySlug
} from '@/services/brand'

const state = {
  brandList: [],
  isBrandSlugValid: false
}

const getters = {
  selectedBrand (state) {
    return state.brandList.find(x => x.IsSelected)
  },
  selectedBrandId (state, getters) {
    return getters.selectedBrand ? getters.selectedBrand.BrandId : ''
  },
  selectedBrandName (state, getters) {
    return getters.selectedBrand ? getters.selectedBrand.Name : ''
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
      brand.IsSelected = brand.BrandId === brandId
    })
  },
  [UPDATE_BRAND_SLUG_STATE] (state, payload) {
    state.isBrandSlugValid = payload
  }
}

const actions = {
  async [GET_BRAND_LIST] ({ commit, dispatch, getters }) {
    try {
      let response = await getBrandList()

      if (response && response.data.Status) {
        return Promise.resolve(response)
      } else {
        // Reject an error
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
  },
  [UPDATE_BRAND_LIST] ({ commit, getters }, payload) {
    let brandList = payload.data.Data
    // Append isSelected property
    let localBrandList = brandList.map(brand => ({
      ...brand,
      IsSelected: brand.IsDefault
    }))

    // Update state
    commit(UPDATE_BRAND_LIST, localBrandList)
  },
  [UPDATE_SELECTED_BRAND] ({ commit }, brandId) {
    commit(UPDATE_SELECTED_BRAND, brandId)
  },
  async [GET_BRAND_ID_BY_SLUG] ({ dispatch }, slug) {
    try {
      let response = await getBrandIdBySlug(slug)
      if (response && response.data.Status) {
        return Promise.resolve(response)
      } else {
        // Make toast an error
        dispatch(`toast/${MAKE_TOAST}`, {
          title: response.data.Status,
          variant: 'danger'
        }, { root: true })
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
  },
  [UPDATE_BRAND_SLUG_STATE] ({ commit }, payload) {
    commit(UPDATE_BRAND_SLUG_STATE, payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
