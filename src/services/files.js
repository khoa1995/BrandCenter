import api from './api'
import env from '@/utils/env'

const fileAPI = {
  getRecentFiles: `${env.API_SERVER}${env.API.GET_RECENT_FILES}`,
  searchFiles: `${env.API_SERVER}${env.API.SEARCH_FILES}`
}

export const getRecentFiles = brandId => {
  return api.get({
    url: `${fileAPI.getRecentFiles}/${brandId}`
  })
}

export const searchFiles = payload => {
  return api.post({
    url: `${fileAPI.searchFiles}`,
    data: payload
  })
}
