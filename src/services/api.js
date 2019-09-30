import Vue from 'vue'
import axios from 'axios'
import { env } from './config'

const config = {
  withCredentials: true,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}

let _generateParams = obj => {
  return Object.keys(obj).map(key => {
    return key + '=' + encodeURIComponent(obj[key])
  }).join('&')
}

let _combineHeader = headers => {
  let obj = Object.assign(config, {})
  if (headers) {
    for (let p in headers) {
      obj.headers[p] = headers[p]
    }
  }
  return obj
}

export default {
  install () {
    axios.defaults.baseURL = env.API_SERVER
    axios.defaults.withCredentials = true
    for (let name in config.headers) {
      axios.defaults.headers.common[name] = config.headers[name]
    }
    // In 30 second
    axios.defaults.timeout = 30000
    axios.interceptors.request.use(config => {
      return config
    }, error => {
      return Promise.reject(error)
    })
    axios.interceptors.response.use(config => {
      return config
    }, error => {
      return Promise.reject(error)
    })
  },
  post: obj => {
    return axios.post(obj.url, obj.data, _combineHeader(obj.headers))
  },
  get: obj => {
    return axios.get(obj.url + (obj.data ? ('?' + _generateParams(obj.data)) : ''), _combineHeader(obj.headers))
  },
  put: obj => {
    return axios.put(obj.url, JSON.stringify(obj.data), _combineHeader(obj.headers))
  },
  patch: obj => {
    return axios.patch(obj.url, JSON.stringify(obj.data), _combineHeader(obj.headers))
  },
  delete: obj => {
    return axios.delete(obj.url + (obj.data ? ('?' + _generateParams(obj.data)) : ''), _combineHeader(obj.headers))
  }
}
