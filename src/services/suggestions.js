import api from './api'
import env from '@/utils/env'

const suggestionsAPI = {
  getSuggestions: `${env.API_SERVER}${env.API.GET_SUGGESTIONS}`
}

export const getSuggestions = payload => {
  return api.post({
    url: `${suggestionsAPI.getSuggestions}`,
    data: payload
  })
}
