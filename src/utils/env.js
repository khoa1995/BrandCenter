export default {
  STORAGE_KEY: 'bc-storage',
  API_SERVER: process.env.NODE_ENV === 'production' ? '/BrandCenter/api' : '',
  API: {
    GET_BRAND: '/GetBrands'
  }
}
