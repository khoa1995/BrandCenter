<template>
  <div class="bc-template">
    <Breadcrumb />
    <BCCriteria />
    <BCFilter isInTemplate />
    <template v-if="contentLayout === 'grid'" >
       <Section>
       <GridLayout :contentData="files"/>
    </Section>
    </template>
    <template v-else>
      <ListLayout :contentData="files" />
    </template>
  </div>
</template>

<script>
import { files } from '@/fakeData.js'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'bc-template',
  components: {
    Breadcrumb: () =>
      import(
        /* webpackChunkName: "Breadcrumb" */ '@/components/Content/Breadcrumb'
      ),
    BCFilter: () =>
      import(/* webpackChunkName: "BCFilter" */ '@/components/Content/BCFilter'),
    GridLayout: () => import(/* webpackChunkName: "GridLayout" */ '@/components/Content/GridLayout'),
    Section: () => import(/* webpackChunkName: "Section" */ '@/components/Section/Section.vue'),
    ListLayout: () => import(/* webpackChunkName: "Listlayout" */ '@/components/Content/ListLayout'),
    BCCriteria: () => import(/* webpackChunkName: "BCCriteria" */ '@/components/Content/BCCriteria.vue')
  },
  computed: {
    ...mapState({
      contentLayout: state => state.config.contentLayout
    })
  },
  methods: {
    ...mapActions({
    })
  },
  data () {
    return {
      files: files
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../assets/scss/base/variables';

.bc-template {
  padding: 0 5rem 4.25rem;
  @media screen and (max-width: $width-fHD-zoom-125) {
    padding: 0 3.5rem 4rem;
  }
  @media screen and (max-width: $iPhoneXSMax-portrait) {
    padding: 0 1.5rem 4rem;
  }
}
</style>
