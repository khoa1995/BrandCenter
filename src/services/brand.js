import api from './api'
import env from '@/utils/env'

const brandAPI = {
  getBrandListUrl: `${env.API_SERVER}${env.API.GET_BRANDS}`,
  getBrandIdBySlug: `${env.API_SERVER}${env.API.GET_BRAND_ID_BY_SLUG}`
}

export const getBrandList = () => {
  return api.get({
    url: brandAPI.getBrandListUrl
  })
}

export const getBrandIdBySlug = slug => {
  return api.get({
    url: `${brandAPI.getBrandIdBySlug}/${slug}`
  })
}
