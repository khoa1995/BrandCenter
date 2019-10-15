export default {
  STORAGE_KEY: 'bc-storage',
  API_SERVER: process.env.NODE_ENV === 'production' ? '/BrandCenter/api' : 'http://localhost/brandcenter/api/getbrands',
  API: {
    GET_BRANDS: '/GetBrands',
    GET_BRAND_ID_BY_SLUG: '/GetBrandIdBySlug',
    GET_CATEGORIES: '/GetAllCategories',
    GET_PACKAGE_BY_BRAND: '/GetPackageByBrand',
    GET_RECENT_FILES: '/GetRecentFiles'
  }
}
