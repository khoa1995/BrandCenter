import {
  LOAD_FILES,
  LOAD_PACKAGES,
  ADD_ITEM_TO_BOX,
  REMOVE_ITEM_FROM_BOX,
  SET_DOWNLOAD_BOX,
  MAKE_TOAST
} from './../action-types'

const state = {
  files: [],
  packages: [],
  addedItems: []
}

const mutations = {
  [ADD_ITEM_TO_BOX] (state, payload) {
    state.addedItems = [...state.addedItems, payload]
  },

  [REMOVE_ITEM_FROM_BOX] (state, payload) {
    state.addedItems.splice(payload, 1)
  },

  [SET_DOWNLOAD_BOX] (state, payload) {
    state.addedItems = payload
  },

  [LOAD_FILES] (state, payload) {
    state.files = payload
  },

  [LOAD_PACKAGES] (state, payload) {
    state.packages = payload
  }
}

const actions = {
  [LOAD_FILES] ({ commit }, payload) {
    commit(LOAD_FILES, payload)
  },

  [LOAD_PACKAGES] ({ commit }, payload) {
    commit(LOAD_PACKAGES, payload)
  },

  [SET_DOWNLOAD_BOX] ({ commit }, payload) {
    commit(SET_DOWNLOAD_BOX, payload)
  },

  [ADD_ITEM_TO_BOX] ({ dispatch, commit }, payload) {
    var index = state.addedItems.findIndex(x => x.id === payload.id && x.type === payload.type)
    if (index >= 0) {
      console.log('Item is added')
    } else {
      let selected = null
      if (payload.type === 'package') {
        selected = state.packages.find(x => x.id === payload.id)
      } else {
        selected = state.files.find(x => x.id === payload.id)
      }
      if (selected !== null) {
        var item = {
          id: selected.id,
          type: selected.type,
          name: selected.title,
          size: selected.size
        }
        commit(ADD_ITEM_TO_BOX, item)
        dispatch(`toast/${MAKE_TOAST}`, { title: 'Add item', variant: 'success' }, { root: true })
      }
    }
  },

  [REMOVE_ITEM_FROM_BOX] ({ commit }, payload) {
    var index = state.addedItems.findIndex(x => x.id === payload)
    if (index >= 0) {
      commit(REMOVE_ITEM_FROM_BOX, index)
    } else {
      console.log('Item not found')
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
