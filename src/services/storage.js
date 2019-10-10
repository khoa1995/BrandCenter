import localforage from 'localforage'
import env from '@/utils/env'

let storeConfig = {
  driver: [
    localforage.INDEXEDDB,
    localforage.LOCALSTORAGE
  ],
  name: env.STORAGE_KEY
}

localforage.config(storeConfig)

export default localforage
