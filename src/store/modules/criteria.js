import {
  UPDATE_CATEGORY_CRITERIA,
  UPDATE_SEARCH_QUERY_CRITERIA
} from './../action-types'
import { isEmpty } from 'lodash'
import router from '@/router'

const state = {
  fromCategory: {},
  fromSearch: {},
  fromFilter: []
}

const getters = {
  criteriaList (state) {
    let res = []
    // Get from category
    if (!isEmpty(state.fromCategory)) {
      res.push({
        ...state.fromCategory,
        type: 'category'
      })
    }
    // Get from search query
    if (!isEmpty(state.fromSearch)) {
      res.push({
        ...state.fromSearch,
        type: 'search-query'
      })
    }
    // Get from filter
    res = res.concat(state.fromFilter)
    return res
  },
  urlQuery (state) {
    let res = {
      category: '',
      categoryId: '',
      searchQuery: ''
    }
    // Get from category
    if (!isEmpty(state.fromCategory)) {
      res.category = state.fromCategory.Label
      res.categoryId = state.fromCategory.Id
    }
    // Get from search query
    if (!isEmpty(state.fromSearch)) {
      res.searchQuery = state.fromSearch.Label
    }

    // Truncate empty value
    for (let x in res) {
      if (!res[x]) {
        delete res[x]
      }
    }
    return res
  }
}

const mutations = {
  [UPDATE_CATEGORY_CRITERIA] (state, payload) {
    state.fromCategory = payload
  },
  [UPDATE_SEARCH_QUERY_CRITERIA] (state, payload) {
    if (payload) {
      state.fromSearch = {
        Label: payload
      }
    } else {
      state.fromSearch = {}
    }
  }
}

const actions = {
  [UPDATE_CATEGORY_CRITERIA] ({ commit, getters }, payload) {
    if (payload.isFromOtherPage) {
      // Update store
      commit(UPDATE_CATEGORY_CRITERIA, {})
      // Update url
      router.replace({ query: getters.urlQuery })
    } else {
      // Update store
      commit(UPDATE_CATEGORY_CRITERIA, payload)
      // Update url
      router.replace({ name: 'search', query: getters.urlQuery })
    }
  },
  [UPDATE_SEARCH_QUERY_CRITERIA] ({ commit, getters }, payload) {
    // Update store
    commit(UPDATE_SEARCH_QUERY_CRITERIA, payload)
    // Update url
    router.replace({ name: 'search', query: getters.urlQuery })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
