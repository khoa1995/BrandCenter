import api from './api'
import env from '@/utils/env'

const categoryAPI = {
  getCategoryListUrl: `${env.API_SERVER}${env.API.GET_CATEGORIES}`
}

export const getCategoryList = () => {
  return api.get({
    url: categoryAPI.getCategoryListUrl
  })
}
