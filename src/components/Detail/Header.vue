<template>
  <div class="detail-header">
    <div class="detail-header__title">
      <div class="detail-header__icon"><Icon name="type-photo" /></div>
      <div class="detail-header__name">
        File Name - Could be on two line if necessary
        <br/>
        <div class="detail-header__capacity">
          2.3 Mb
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail-header',
  components: {
    Icon: () => import(/* webpackChunkName: "Icon" */ '@/components/Icon/Icon.vue')
  }
}
</script>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';
.detail-header{
  margin-bottom: 1rem;
  &__icon{
    margin-right: 0.6rem;
  }
  &__title{
    font-weight: 700;
    display: flex;
  }
  &__capacity{
    color: $color-sub-text
  }
}
</style>
