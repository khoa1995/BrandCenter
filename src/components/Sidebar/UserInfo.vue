<template>
  <div class='bc-user-info'>
    <div class='bc-user-info__placeholder'>User Info</div>
    <DownloadBox />
  </div>
</template>

<script>
export default {
  name: 'bc-user-info',
  components: {
    DownloadBox: () => import(/* webpackChunkName: "DownloadBox" */ './DownloadBox.vue')
  }
}
</script>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';

.bc-user-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding: 1.5rem 2.5rem;
  border-top: 0.0625rem solid $color-border;
  border-bottom: 0.0625rem solid $color-border;
  @media screen and (max-width: $width-fHD-zoom-125) {
    padding: 1rem 2rem;
  }
  @media screen and (max-width: $width-HD) {
    padding: 0.75rem 1.75rem;
  }
  &__placeholder {
    flex: 1 0 17.5rem;
    max-width: 17.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
  }
}
</style>
