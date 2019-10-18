import {
  GET_SUGGESTIONS,
  UPDATE_SUGGESTIONS,
  UPDATE_VISIBLE_STATE,
  MAKE_TOAST
} from './../action-types'
import { getSuggestions } from '@/services/suggestions'

const state = {
  suggestionsList: [],
  isVisible: false
}

const getters = {
  suggestionCategoryList (state) {
    return state.suggestionsList.filter(x => x.Type === 'Category')
  },
  suggestionFileList (state) {
    return state.suggestionsList.filter(x => x.Type === 'File')
  },
  suggestionExtensionList (state) {
    return state.suggestionsList.filter(x => x.Type === 'Extension')
  }
}

const mutations = {
  [UPDATE_SUGGESTIONS] (state, payload) {
    state.suggestionsList = payload
  },
  [UPDATE_VISIBLE_STATE] (state, payload) {
    state.isVisible = payload
  }
}

const actions = {
  async [GET_SUGGESTIONS] ({ commit, dispatch }, payload) {
    try {
      let response = await getSuggestions(payload)

      if (response && response.data.Status) {
        // Update store
        dispatch(UPDATE_SUGGESTIONS, response.data.Data)

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
  },
  [UPDATE_SUGGESTIONS] ({ commit }, payload) {
    commit(UPDATE_SUGGESTIONS, payload)
  },
  [UPDATE_VISIBLE_STATE] ({ commit }, payload) {
    commit(UPDATE_VISIBLE_STATE, payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
