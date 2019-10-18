import {
  GET_RECENT_FILES,
  SET_RECENT_FILES_LOADING,
  UPDATE_RECENT_FILES,
  SEARCH_FILES,
  UPDATE_SEARCH_FILES,
  MAKE_TOAST
} from './../action-types'
import {
  getRecentFiles,
  searchFiles
} from '@/services/files'

const state = {
  isRecentFilesLoading: false,
  recentFiles: [],
  searchedFiles: {}
}

const mutations = {
  [SET_RECENT_FILES_LOADING] (state, payload) {
    state.isRecentFilesLoading = payload
  },
  [UPDATE_RECENT_FILES] (state, payload) {
    state.recentFiles = payload
  },
  [UPDATE_SEARCH_FILES] (state, payload) {
    state.searchedFiles = payload
  }
}

const actions = {
  async [GET_RECENT_FILES] ({ commit, dispatch }, brandId) {
    commit(SET_RECENT_FILES_LOADING, true)
    try {
      let response = await getRecentFiles(brandId)

      if (response && response.data.Status) {
        // Update store
        commit(UPDATE_RECENT_FILES, response.data.Data)
        setTimeout(function () { commit(SET_RECENT_FILES_LOADING, false) }, 2000) // Remember to remove setTimeout in PROD env
        return Promise.resolve(response)
      } else {
        commit(SET_RECENT_FILES_LOADING, false)
        // Make toast an error
        dispatch(`toast/${MAKE_TOAST}`, {
          title: response.data.Message,
          variant: 'danger'
        }, { root: true })

        return Promise.reject(response.data.Message)
      }
    } catch (error) {
      commit(SET_RECENT_FILES_LOADING, false)
      // Make toast an error
      dispatch(`toast/${MAKE_TOAST}`, {
        title: error,
        variant: 'danger'
      }, { root: true })
      // Reject an error
      return Promise.reject(error)
    }
  },
  async [SEARCH_FILES] ({ commit, dispatch }, payload) {
    try {
      let response = await searchFiles(payload)

      if (response && response.data.Status) {
        // Update store
        commit(UPDATE_SEARCH_FILES, response.data.Data)

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
