export default {
  STORAGE_KEY: 'bc-storage',
  BASE_URL: process.env.NODE_ENV === 'production' ? `${window.location.origin}/BrandCenter` : 'http://localhost/BrandCenter',
  API_SERVER: process.env.NODE_ENV === 'production' ? '/BrandCenter/api' : 'http://localhost:3000/dogs',
  API: {
    GET_BRANDS: '/GetBrands',
    GET_BRAND_ID_BY_SLUG: '/GetBrandIdBySlug',
    GET_CATEGORIES: '/GetAllCategories',
    GET_PACKAGE_BY_BRAND: '/GetPackageByBrand',
    GET_RECENT_FILES: '/GetRecentFiles',
    SEARCH_FILES: '/SearchFiles',
    GET_SUGGESTIONS: '/GetSuggestions'
  }
}
