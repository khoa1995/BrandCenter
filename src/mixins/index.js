import Vue from 'vue'
import env from '@/utils/env'

Vue.mixin({
  methods: {
    convertRelativeUrl (value) {
      return `${env.BASE_URL}/${value}`
    }
  }
})
