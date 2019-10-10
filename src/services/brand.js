import api from './api'
import env from '@/utils/env'

const brandAPI = {
  getBrandListUrl: process.env.NODE_ENV === 'production' ? `${env.API_SERVER}${env.API.GET_BRAND}` : 'http://localhost:3000/dogs'
}

export const getBrandList = () => {
  return api.get({
    url: brandAPI.getBrandListUrl
  }).then(response => Promise.resolve(response))
    .catch(error => Promise.reject(error))
}
