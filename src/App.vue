<template>
  <div id="app" :class="appClass">
    <Sidebar></Sidebar>
    <main class="bc-main">
      <Header></Header>
      <router-view/>
    </main>
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
    Toast: () => import(/* webpackChunkName: "Toast" */ '@/components/Toast/Toast.vue')
  },
  computed: {
    ...mapState({
      isSidebarOpen: state => state.config.isSidebarOpen
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
