import Vue from 'vue'
import env from '@/utils/env'

Vue.filter('convertRelativeUrl', value => {
  return `${env.BASE_URL}/${value}`
})
