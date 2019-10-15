import {
  GET_RECENT_FILES,
  UPDATE_RECENT_FILES
} from './../action-types'
import { getRecentFiles } from '@/services/files'

const state = {
  recentFiles: []
}

const mutations = {
  [UPDATE_RECENT_FILES] (state, payload) {
    state.recentFiles = payload
  }
}

const actions = {
  async [GET_RECENT_FILES] ({ commit, dispatch }, brandId) {
    try {
      let response = await getRecentFiles(brandId)

      if (response && response.data.Status) {
        // Update store
        commit(UPDATE_RECENT_FILES, response.data.Data)

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
