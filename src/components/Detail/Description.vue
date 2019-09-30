<template>
  <div class="detail-description">
    <!-- <div class="detail-description__title">File description</div> -->
    <DetailStyleTitle title='File description' class="detail-description__title"></DetailStyleTitle>
    <div class="detail-description__text">
      We focus on the needs of insurance companies & administrations, their service providers and end customers (recipients of services, such as insured persons).
      Insurances & administrations can strongly improve the management of their orders into a transparent, cost-efficient and high-quality network.
      Usage et Specifications
      Cette photo ne peux être utiliser que dans le cas de campagnes de recrutement et ne peux servir pour un usage externe.
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail-description',
  components: {
    DetailStyleTitle: () => import(/* webpackChunkName: "DetailStyleTitle" */ './DetailStyleTitle')
  }
}
</script>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';

.detail-description {
  &__title {
    margin-bottom: 1rem
  }
}
</style>
