<template>
  <ol class="detail-breadcrumb">
    <li class="detail-breadcrumb__item">Home</li>
    <li class="detail-breadcrumb__icon">
      <Icon name="angle-right"/>
    </li>
    <li class="detail-breadcrumb__item--active">File name</li>
  </ol>
  <!-- <div class="detail-breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item detail-breadcrumb__item">Home</li>
      <li class="breadcrumb-item active detail-breadcrumb__item--active">File Name</li>
    </ol>
  </div> -->
</template>

<script>
export default {
  name: 'detail-breadcrumb',
  components: {
    Icon: () => import(/* webpackChunkName: "Icon" */ '@/components/Icon/Icon.vue')
  }
}
</script>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';

  .detail-breadcrumb {
    display: flex;
    flex-wrap: wrap;
    padding: .5rem 1rem;
    list-style: none;
    background-color: $color-white;
    &__icon {
      padding: 0 .7rem;
      margin-top: -0.06rem;
      color: $color-sub-text
    }
    &__item {
      &--active{
        color: $color-purple;
        text-decoration: underline;
      }
    }
  }
</style>
