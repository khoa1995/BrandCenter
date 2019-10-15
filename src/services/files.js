import api from './api'
import env from '@/utils/env'

const fileAPI = {
  getRecentFiles: `${env.API_SERVER}${env.API.GET_RECENT_FILES}`
}

export const getRecentFiles = brandId => {
  return api.get({
    url: `${fileAPI.getRecentFiles}/${brandId}`
  })
}
