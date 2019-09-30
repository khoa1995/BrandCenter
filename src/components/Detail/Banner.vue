<template>
  <div class="detail-banner" :style='{ backgroundImage: "url(" + require(`@/assets/images/thumbnail-01.png`) + ")"}'>
    <div class="detail-banner__file-status">
      <span class="detail-banner__icon"><Icon name="lock"/></span>
      <span class="detail-banner__name">Internal Use Only</span>
    </div>
    <div class="detail-banner__preview" @click="redirectToDetail" v-show="!isInPreview">
      <Icon name="preview"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail-banner',
  components: {
    Icon: () => import(/* webpackChunkName: "Icon" */ '@/components/Icon/Icon.vue')
  },
  props: {
    contentData: {
      type: Array,
      require: true,
      default: function () {
        return []
      }
    },
    isInPreview: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    redirectToDetail () {
      this.$router.push({ name: 'detail' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';

.detail-banner {
  height: 30rem;
  position: relative;
  background-size:cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 10rem 1rem;
  &__icon {
    padding: .75rem;
    margin-right: 1rem;
    border-radius: 0.5rem;
    background-color: $color-red;
  }
  &__file-status {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
  }
  &__name {
    color: $color-white;
    font-weight: 500;
  }
  &__preview {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    cursor: pointer;
  }
  @media screen and (max-width: $iPhoneXSMax-portrait){
    margin: 0 0 1rem;
  }
}
</style>
