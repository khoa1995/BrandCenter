<template>
  <div class="detail-content">
    <div class="detail-content__wrapper">
      <DetailDescription/>
      <DetailInfo/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'detail-wrapper',
  components: {
    DetailInfo: () => import(/* webpackChunkName: "DetailInformation" */ './Information.vue'),
    DetailDescription: () => import(/* webpackChunkName: "DetailDescription" */ './Description.vue')
  }
}
</script>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';
.detail-content {
  line-height: 1.5;
  margin-bottom: 1rem;
  &__wrapper {
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: 1fr auto;
    @media screen and (max-width: $iPhoneXSMax-portrait) {
      display: block;
    }
  }
}
</style>
