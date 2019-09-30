<template>
  <div class="detail-info">
    <div class="detail-info__item">
      <DetailStyleTitle title="File id"/>
      <!-- <div class="detail-info__item__label">File ID</div> -->
      <div class="detail-info__item__content">1423</div>
    </div>
    <div class="detail-info__item">
      <DetailStyleTitle title="Published On"/>
      <!-- <div class="detail-info__item__label">Published On</div> -->
      <div class="detail-info__item__content">April 03 2018</div>
    </div>
    <div class="detail-info__item">
      <DetailStyleTitle title="Publish By"/>
      <!-- <div class="detail-info__item__label">Published By</div> -->
      <div class="detail-info__item__content">D'Anna Florie</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail-info',
  components: {
    DetailStyleTitle: () => import(/* webpackChunkName: "DetailStyleTitle" */ './DetailStyleTitle')
  }
}
</script>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';

.detail-info {
  &__item {
    margin-bottom: 1rem;
  }
}
</style>
