<template>
  <div class="bc-package">
    <Breadcrumb />
    <BCFilter isInTemplate />
    <template v-if="contentLayout === 'grid'" >
       <Section>
       <GridLayoutItem :contentData="files"/>
    </Section>
    </template>
    <template v-else>
      <ListLayout :contentData="files" />
    </template>
  </div>
</template>

<script>
import { files, packages } from '@/fakeData.js'
import { mapState, mapActions } from 'vuex'
import { LOAD_FILES, LOAD_PACKAGES } from '@/store/action-types'

export default {
  name: 'bc-package',
  components: {
    Breadcrumb: () =>
      import(
        /* webpackChunkName: "Breadcrumb" */ '@/components/Content/Breadcrumb'
      ),
    BCFilter: () =>
      import(/* webpackChunkName: "BCFilter" */ '@/components/Content/BCFilter'),
    GridLayoutItem: () => import(/* webpackChunkName: "GridLayout" */ '@/components/Content/GridLayoutItem'),
    Section: () => import(/* webpackChunkName: "Section" */ '@/components/Section/Section.vue'),
    ListLayout: () => import(/* webpackChunkName: "Listlayout" */ '@/components/Content/ListLayout')
  },
  computed: {
    ...mapState({
      contentLayout: state => state.config.contentLayout,
      files: state => state.downloadbox.files,
      packages: state => state.downloadbox.packages
    })
  },
  methods: {
    ...mapActions({
      _setFiles: `downloadbox/${LOAD_FILES}`,
      _setPackages: `downloadbox/${LOAD_PACKAGES}`
    })
  },

  created () {
    this._setFiles(files)
    this._setPackages(packages)
  }
}
</script>

<style lang="scss" scoped>
@import './../assets/scss/base/variables';

.bc-package {
  padding: 0 5rem 4.25rem;
  @media screen and (max-width: $width-fHD-zoom-125) {
    padding: 0 3.5rem 4rem;
  }
  @media screen and (max-width: $iPhoneXSMax-portrait) {
    padding: 0 1.5rem 4rem;
  }
}
</style>
