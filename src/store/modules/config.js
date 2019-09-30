import {
  UPDATE_CONTENT_LAYOUT,
  UPDATE_SIDEBAR_STATE
} from './../action-types'

const state = {
  contentLayout: 'grid',
  isSidebarOpen: false
}

const mutations = {
  [UPDATE_CONTENT_LAYOUT] (state, payload) {
    state.contentLayout = payload
  },
  [UPDATE_SIDEBAR_STATE] (state, payload) {
    state.isSidebarOpen = payload
  }
}

const actions = {
  [UPDATE_CONTENT_LAYOUT] ({ commit }, payload) {
    commit(UPDATE_CONTENT_LAYOUT, payload)
  },
  [UPDATE_SIDEBAR_STATE] ({ commit }, payload) {
    commit(UPDATE_SIDEBAR_STATE, payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
