<template>
  <div class="bc-header">
    <SearchBar/>
    <BrandPolicy/>
  </div>
</template>

<script>
export default {
  name: 'bc-header',
  components: {
    SearchBar: () => import(/* webpackChunkName: "SearchBar" */ './SearchBar'),
    BrandPolicy: () => import(/* webpackChunkName: "BrandPolicy" */ './BrandPolicy')
  }
}
</script>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';

.bc-header {
  padding: 2rem 2.5rem;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: $width-fHD-zoom-125) {
    padding: 1.25rem 2rem;
  }
  @media screen and (max-width: $iPhoneXSMax-landscape) {
    padding-left: 3.5rem;
    padding-right: 3.5rem;
  }
  @media screen and (max-width: $iPhoneXSMax-portrait) {
    padding-right: 1.5rem;
    display: block;
  }
}
</style>
