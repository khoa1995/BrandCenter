<template>
  <div :class="{ 'bc-sidebar': true, 'bc-sidebar--open': isSidebarOpen }">
    <div class="bc-sidebar__hamburger clickable" @click="handleClickHamburger">
      <Icon name="hamburger" />
    </div>
    <div class="bx-sidebar__top">
      <AppBrand></AppBrand>
      <MainMenu></MainMenu>
      <Category></Category>
    </div>
    <div class="bc-sidebar__bottom">
      <ContentRequest></ContentRequest>
      <UserInfo></UserInfo>
      <SidebarFooter></SidebarFooter>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { UPDATE_SIDEBAR_STATE } from '@/store/action-types'

export default {
  name: 'bc-sidebar',
  components: {
    AppBrand: () => import(/* webpackChunkName: "AppBrand" */ './AppBrand.vue'),
    MainMenu: () => import(/* webpackChunkName: "MainMenu" */ './MainMenu.vue'),
    Category: () => import(/* webpackChunkName: "Category" */ './Category.vue'),
    ContentRequest: () => import(/* webpackChunkName: "ContentRequest" */ './ContentRequest.vue'),
    UserInfo: () => import(/* webpackChunkName: "UserInfo" */ './UserInfo.vue'),
    SidebarFooter: () => import(/* webpackChunkName: "SidebarFooter" */ './SidebarFooter.vue'),
    Icon: () => import(/* webpackChunkName: "Icon" */ '@/components/Icon/Icon.vue')
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      isSidebarOpen: state => state.config.isSidebarOpen
    })
  },
  methods: {
    ...mapActions({
      _updateSidebarState: `config/${UPDATE_SIDEBAR_STATE}`
    }),
    handleClickHamburger () {
      this._updateSidebarState(!this.isSidebarOpen)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';

.bc-sidebar {
  position: fixed;
  z-index: $z-index-sidebar;
  top: 0;
  left: 0;
  width: 25rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: $color-white;
  transition: all 0.3s ease;
  @media screen and (max-width: $width-fHD-zoom-125) {
    width: 23rem;
  }
  @media screen and (max-width: $iPhoneXSMax-landscape) {
    left: -100vw;
    width: 100vw;
  }
  &--open {
    @media screen and (max-width: $iPhoneXSMax-landscape) {
      left: 0;
      overflow: auto;
    }
    .bc-sidebar {
      &__hamburger {
        @media screen and (max-width: $iPhoneXSMax-landscape) {
          left: auto;
          right: 1.75rem;
        }
        @media screen and (max-width: $iPhone5-portrait) {
          right: 1.5rem;
        }
      }
    }
  }
  &__hamburger {
    position: absolute;
    z-index: 1;
    color: $color-white;
    top: 1.2rem;
    left: calc(100% - 1rem);
    width: 3rem;
    height: 3rem;
    border-radius: 0.5rem;
    justify-content: center;
    align-items: center;
    background-color: $color-mantu;
    display: none;
    transition: all 0.3s ease;
    @media screen and (max-width: $iPhoneXSMax-landscape) {
      display: flex;
    }
  }
  &__top {
  }
  &__bottom {
    margin-top: auto;
    margin-bottom: 0;
    @media screen and (max-width: $iPhoneXSMax-landscape) {
      padding-bottom: 6rem;
    }
  }
}
</style>
