import api from './api'
import env from '@/utils/env'

const packageAPI = {
  getPackageByBrand: `${env.API_SERVER}${env.API.GET_PACKAGE_BY_BRAND}`
}

export const getPackageByBrand = brandId => {
  return api.get({
    url: `${packageAPI.getPackageByBrand}/${brandId}`
  })
}
