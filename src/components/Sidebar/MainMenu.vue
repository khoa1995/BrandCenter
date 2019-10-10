<template>
  <div class='bc-main-menu'>
    <div class='bc-main-menu__list'>
      <router-link class='bc-main-menu__item' :to="{ name: item.view }" v-for='item in menuList' :key='item.id'>
        <Icon class='bc-main-menu__item-icon' :name='item.icon' />
        <span class='bc-main-menu__item-label'>{{ item.label }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bc-main-menu',
  components: {
    Icon: () => import(/* webpackChunkName: "Icon" */ '@/components/Icon/Icon.vue')
  },
  data () {
    return {
      menuList: [
        {
          id: 'home',
          label: 'Home',
          icon: 'home',
          view: 'home'
        },
        {
          id: 'packages',
          label: 'Packages',
          icon: 'package',
          view: 'package'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';

.bc-main-menu {
  &__list {
    padding: 1.5rem 1.75rem 0;
    @media screen and (max-width: $width-fHD-zoom-125) {
      padding-top: 1rem;
    }
    @media screen and (max-width: $iPhoneXSMax-landscape) {
      padding: 2rem 2rem 0;
    }
    @media screen and (max-width: $iPhone5-portrait) {
      padding: 2rem 1.5rem 0;
    }
  }
  &__item {
    display: flex;
    align-items: center;
    font-weight: 500;
    padding: 0.25rem 0.375rem;
    border-radius: 0.625rem;
    color: $color-text;
    &:hover {
      color: $color-mantu;
      background-color: adjust-color($color-mantu, $alpha: -0.8);
      .bc-main-menu {
        &__item {
          &-icon {
            color: $color-white;
            background-color: $color-mantu;
          }
        }
      }
    }
    &-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      flex: 1 0 2.5rem;
      max-width: 2.5rem;
      height: 2.5rem;
      @media screen and (max-width: $width-fHD-zoom-125) {
        flex-basis: 2rem;
        max-width: 2rem;
        height: 2rem;
      }
      @media screen and (max-width: $iPhoneXSMax-landscape) {
        flex-basis: 2.5rem;
        max-width: 2.5rem;
        height: 2.5rem;
      }
    }
    &-label {
      padding-left: 1rem;
    }
  }
}
</style>
