import {
  UPDATE_CONTENT_LAYOUT,
  UPDATE_SIDEBAR_STATE,
  UPDATE_APP_STATE
} from './../action-types'

const state = {
  contentLayout: 'grid',
  isSidebarOpen: false,
  isAppReady: false
}

const mutations = {
  [UPDATE_CONTENT_LAYOUT] (state, payload) {
    state.contentLayout = payload
  },
  [UPDATE_SIDEBAR_STATE] (state, payload) {
    state.isSidebarOpen = payload
  },
  [UPDATE_APP_STATE] (state, payload) {
    state.isAppReady = payload
  }
}

const actions = {
  [UPDATE_CONTENT_LAYOUT] ({ commit }, payload) {
    commit(UPDATE_CONTENT_LAYOUT, payload)
  },
  [UPDATE_SIDEBAR_STATE] ({ commit }, payload) {
    commit(UPDATE_SIDEBAR_STATE, payload)
  },
  [UPDATE_APP_STATE] ({ commit }, payload) {
    commit(UPDATE_APP_STATE, payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
