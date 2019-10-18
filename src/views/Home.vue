<template>
  <div class="bc-page bc-home">
    <Breadcrumb currentPage="Homepage" />
    <BCFilter />
    <template v-if="contentLayout === 'grid'" >
      <Section v-if="isPackageLoading">
        <PackageLoading/>
      </Section>
      <Section v-else>
        <PackageLayout :contentData="packageList"/>
      </Section>
      <Section title="New content">
        <RecentFileLoading v-if="isRecentFilesLoading"/>
        <GridLayout :contentData="recentFiles" v-else/>
      </Section>
    </template>
    <template v-else>
      <ListLayout :contentData="files" />
    </template>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import {
  GET_PACKAGE_BY_BRAND,
  GET_RECENT_FILES
} from '@/store/action-types'

export default {
  name: 'home',
  components: {
    Breadcrumb: () => import(/* webpackChunkName: "Breadcrumb" */ '@/components/Content/Breadcrumb'),
    BCFilter: () => import(/* webpackChunkName: "BCFilter" */ '@/components/Content/BCFilter'),
    PackageLayout: () => import(/* webpackChunkName: "PackageLayout" */ '@/components/Content/PackageLayout'),
    PackageLoading: () => import(/* webpackChunkName: "PackageLayout" */ '@/components/Loading/PackageLoading'),
    GridLayout: () => import(/* webpackChunkName: "GridLayout" */ '@/components/Content/GridLayout'),
    RecentFileLoading: () => import(/* webpackChunkName: "PackageLayout" */ '@/components/Loading/RecentFileLoading'),
    Section: () => import(/* webpackChunkName: "Section" */ '@/components/Section/Section.vue'),
    ListLayout: () => import(/* webpackChunkName: "Listlayout" */ '@/components/Content/ListLayout')
  },
  computed: {
    ...mapState({
      contentLayout: state => state.config.contentLayout,
      isPackageLoading: state => state.packages.isLoading,
      packageList: state => state.packages.packageList,
      recentFiles: state => state.files.recentFiles,
      isRecentFilesLoading: state => state.files.isRecentFilesLoading
    }),
    ...mapGetters({
      selectedBrand: 'brand/selectedBrand'
    })
  },
  methods: {
    ...mapActions({
      _getPackageByBrand: `packages/${GET_PACKAGE_BY_BRAND}`,
      _getRecentFiles: `files/${GET_RECENT_FILES}`
    })
  },
  mounted () {
    this._getPackageByBrand(this.selectedBrand.BrandId)
    this._getRecentFiles(this.selectedBrand.BrandId)
  }
}
</script>

<style lang="scss" scoped>
@import './../assets/scss/base/variables';

.bc-home {
}
</style>
