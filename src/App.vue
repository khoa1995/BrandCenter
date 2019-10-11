<template>
  <div id="app" :class="appClass">
    <Loading v-if="!isAppReady" />
    <ThemeSwitch v-else>
      <Sidebar></Sidebar>
      <main class="bc-main">
        <Header></Header>
        <router-view/>
      </main>
    </ThemeSwitch>
    <Toast />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    Sidebar: () => import(/* webpackChunkName: "Sidebar" */ '@/components/Sidebar/Sidebar.vue'),
    Header: () => import(/* webpackChunkName: "Header" */ '@/components/Header/Header.vue'),
    Toast: () => import(/* webpackChunkName: "Toast" */ '@/components/Toast/Toast.vue'),
    ThemeSwitch: () => import(/* webpackChunkName: "ThemeSwitch" */ '@/components/ThemeSwitch/ThemeSwitch.vue'),
    Loading: () => import(/* webpackChunkName: "Loading" */ '@/components/Loading/Loading.vue')
  },
  computed: {
    ...mapState({
      isSidebarOpen: state => state.config.isSidebarOpen,
      isAppReady: state => state.config.isAppReady
    }),
    appClass () {
      return {
        'sidebar-open': this.isSidebarOpen
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/base/variables';

.bc-main {
  min-height: 100vh;
  padding-left: 25rem;
  width: calc(100vw - 0.375rem);
  @media screen and (max-width: $width-fHD-zoom-125) {
    padding-left: 23rem;
  }
  @media screen and (max-width: $iPhoneXSMax-landscape) {
    padding-left: 0;
  }
}
</style>
