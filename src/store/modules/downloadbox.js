import {
  ADD_ITEM_TO_BOX,
  REMOVE_ITEM_FROM_BOX,
  SET_DOWNLOAD_BOX,
  MAKE_TOAST,
  SET_DOWNLOAD_BOX_FROM_CACHE
} from './../action-types'
import {
  DOWNLOAD_BOX
} from './../localforage-keys'
import localforage from 'localforage'
const state = {
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
  }
}

const actions = {
  async [SET_DOWNLOAD_BOX_FROM_CACHE] ({ commit }) {
    try {
      let cache = await localforage.getItem(DOWNLOAD_BOX)
      if (cache !== null) {
        commit(SET_DOWNLOAD_BOX, cache)
      }
    } catch (e) {
      console.log(e)
    }
  },

  [ADD_ITEM_TO_BOX] ({ dispatch, commit, rootState }, payload) {
    var index = state.addedItems.findIndex(x => x.id === payload.id && x.type === payload.type)
    if (index >= 0) {
      console.log('Item is added')
    } else {
      let selected = null
      if (payload.type === 'package') {
        selected = rootState.packages.packageList.find(x => x.Id === payload.id)
      } else {
        selected = rootState.files.recentFiles.find(x => x.BrandFileId === payload.id)
      }
      if (selected) {
        var item = {
          Id: selected.Id,
          Type: payload.type,
          Name: selected.Title,
          Size: selected.Size
        }
        commit(ADD_ITEM_TO_BOX, item)
        CacheDownloadBox()
        dispatch(`toast/${MAKE_TOAST}`, { title: 'Add item', variant: 'success' }, { root: true })
      }
    }
  },

  [REMOVE_ITEM_FROM_BOX] ({ commit }, payload) {
    var index = state.addedItems.findIndex(x => x.Id === payload)
    if (index >= 0) {
      commit(REMOVE_ITEM_FROM_BOX, index)
      CacheDownloadBox()
    } else {
      console.log('Item not found')
    }
  }
}

function CacheDownloadBox () {
  console.log('caching download box')
  localforage.setItem(DOWNLOAD_BOX, state.addedItems)
    .then(value => {})
    .catch(error => {
      // Make toast an error
      console.log(error)
    })
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
