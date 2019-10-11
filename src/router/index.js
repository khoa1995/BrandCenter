import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '@/store'
import {
  GET_BRAND_LIST,
  UPDATE_BRAND_LIST,
  UPDATE_SELECTED_BRAND,
  UPDATE_APP_STATE,
  GET_BRAND_ID_BY_SLUG,
  UPDATE_BRAND_SLUG_STATE
} from '@/store/action-types'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const retriveBrand = (to, from, next, isSlugEmpty = false) => {
  // Request list brand
  store.dispatch(`brand/${GET_BRAND_LIST}`).then(response => {
    let defaultBrand = response.data.Data.find(x => x.IsDefault)

    let pageName = isSlugEmpty ? 'home' : to.name
    // Replace slug and redirect to current page
    next({ name: pageName, params: { brandSlug: defaultBrand.Slug } })

    // Update Brand List in State
    store.dispatch(`brand/${UPDATE_BRAND_LIST}`, response)

    // Update App State
    store.dispatch(`config/${UPDATE_APP_STATE}`, true)
  }).catch(error => {
    console.log(error)
  })
}

const updateSelectedBrand = (urlBrandId) => {
  // Request list brand
  store.dispatch(`brand/${GET_BRAND_LIST}`).then(response => {
    // Update Brand List in State
    store.dispatch(`brand/${UPDATE_BRAND_LIST}`, response)

    // Update Selected Brand in State
    store.dispatch(`brand/${UPDATE_SELECTED_BRAND}`, urlBrandId)

    // Update App State
    store.dispatch(`config/${UPDATE_APP_STATE}`, true)
  })
}

const validateBrandSlug = (to, from, next) => {
  let { isBrandSlugValid } = store.state.brand

  if (!isBrandSlugValid) {
    // If slug is empty | first time access
    if (!to.params.brandSlug) {
      // Retrive brandList to get default slug
      retriveBrand(to, from, next, true)
    } else {
      // Validate current slug
      store.dispatch(`brand/${GET_BRAND_ID_BY_SLUG}`, to.params.brandSlug)
        .then(response => {
          let { BrandId } = response.data.Data
          // If slug is invalid
          if (!BrandId) {
            // Retrive brandList to get default slug
            retriveBrand(to, from, next)
          } else { // If slug is valid
            // Update Selected Brand
            updateSelectedBrand(BrandId)
          }
        })
    }
    // Update brand slug state
    store.dispatch(`brand/${UPDATE_BRAND_SLUG_STATE}`, true)
  }
}

router.beforeEach((to, from, next) => {
  validateBrandSlug(to, from, next)
  next()
})

export default router
