import {
  GET_CATEGORY_LIST,
  UPDATE_CATEGORY_LIST,
  HANDLE_SECONDARY_CATEGORY,
  HANDLE_THIRD_CATEGORY,
  MAKE_TOAST
} from './../action-types'

import {
  getCategoryList
} from '@/services/category'

const state = {
  categoryList: []
}

const mutations = {
  [UPDATE_CATEGORY_LIST] (state, categoryList) {
    state.categoryList = categoryList
  },
  [HANDLE_SECONDARY_CATEGORY] (state, category) {
    let index = state.categoryList.findIndex(x => x.Id === category.Id)
    state.categoryList[index].IsDropdown = !state.categoryList[index].IsDropdown
  },
  [HANDLE_THIRD_CATEGORY] (state, payload) {
    let selectedCategorySub = payload.parentCategory.SubCategories.find(x => x.Id === payload.category.Id)
    selectedCategorySub.IsDropdown = !selectedCategorySub.IsDropdown
  }
}

const actions = {
  async [GET_CATEGORY_LIST] ({ commit, dispatch, getters }) {
    try {
      let response = await getCategoryList()
      if (response && response.data.Status) {
        commit(UPDATE_CATEGORY_LIST, response.data.Data)
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
  [HANDLE_SECONDARY_CATEGORY] ({ commit }, category) {
    commit(HANDLE_SECONDARY_CATEGORY, category)
  },
  [HANDLE_THIRD_CATEGORY] ({ commit }, payload) {
    commit(HANDLE_THIRD_CATEGORY, payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
