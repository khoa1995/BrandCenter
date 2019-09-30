<template>
  <div class='bc-content-request' v-if='isOpen'>
    <div class='bc-content-request__collapse-button clickable' @click='handleClickCollapse'></div>
    <div class='bc-content-request__title'>Ask our team</div>
    <div class='bc-content-request__description'>A content is missing or you need specific marketing element? Send us a quick request</div>
    <a href='mailto:abc@zxc.com' class='bc-content-request__button'>Content Request</a>
  </div>
  <div class='bc-content-request--collapse' v-else>
    <div class='bc-content-request__expand-button clickable' @click='handleClickExpand'>
      <div class='bc-content-request__expand-button-icon'>
        <Icon name='expand'/>
      </div>
      <span class='bc-content-request__expand-button-label'>Content Request</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bc-content-request',
  components: {
    Icon: () => import(/* webpackChunkName: "Icon" */ '@/components/Icon/Icon.vue')
  },
  data () {
    return {
      isOpen: true
    }
  },
  methods: {
    handleClickCollapse () {
      this.isOpen = false
    },
    handleClickExpand () {
      this.isOpen = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';

.bc-content-request {
  position: relative;
  text-align: center;
  border-radius: 0.5rem;
  margin: 0 1.75rem;
  padding: 1.25rem 3rem 1.5rem;
  background-color: $color-mantu;
  @media screen and (max-width: $width-fHD-zoom-125) {
    padding: 1rem 2rem 1rem;
  }
  @media screen and (max-width: $iPhoneXSMax-landscape) {
    margin: 2rem auto 0;
    max-width: 35rem;
  }
  @media screen and (max-width: $iPhone4-landscape) {
    max-width: 28rem;
  }
  @media screen and (max-width: $iPhoneXSMax-portrait) {
    max-width: 22rem;
  }
  @media screen and (max-width: $iPhone5-portrait) {
    max-width: 20rem;
  }
  &--collapse {
    margin: 0 1.75rem;
    @media screen and (max-width: $iPhoneXSMax-landscape) {
      margin-top: 2rem;
    }
    @media screen and (max-width: $iPhone5-portrait) {
      margin: 2rem 1.5rem 0;
    }
  }
  &__collapse-button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    &:before {
      position: absolute;
      top: 50%;
      left: 50%;
      content: '';
      width: 0.625rem;
      height: 0.125rem;
      background-color: $color-white;
      transform: translate(-50%, -50%);
    }
  }
  &__title {
    font-weight: 500;
    font-size: 1.25rem;
    color: $color-white;
  }
  &__description {
    padding-top: 1.5rem;
    color: adjust-color($color-white, $alpha: -0.3);
  }
  &__button {
    display: inline-flex;
    margin-top: 1.5rem;
    padding: 0.625rem 2rem;
    font-size: 1.125rem;
    color: $color-white;
    border-radius: 0.5rem;
    background-color: adjust-color($color-white, $alpha: -0.7);
    &:hover {
      background-color: adjust-color($color-white, $alpha: -0.8);
    }
  }
  &__expand-button {
    display: flex;
    align-items: center;
    &:hover {
      color: $color-mantu;
    }
    &-icon {
      color: $color-btn-border;
    }
    &-label {
      font-weight: 500;
      font-size: 0.875rem;
      padding-left: 0.625rem;
    }
  }
}
</style>
