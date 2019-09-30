<template>
  <div class="detail-wrapper">
    <div class="detail-wrapper__header">
      <DetailHeader />
      <ControllButtons isInDetail />
    </div>
    <DetailBanner isInPreview />
    <DetailContent />
    <DetailRelated :contentData="files" />
  </div>
</template>

<script>
import { files } from '@/fakeData.js'

export default {
  name: 'detail-wrapper',
  components: {
    DetailHeader: () => import(/* webpackChunkName: "Header" */ './Header.vue'),
    DetailBanner: () => import(/* webpackChunkName: "Banner" */ './Banner.vue'),
    DetailContent: () => import(/* webpackChunkName: "DetailContent" */ './Content.vue'),
    DetailRelated: () => import(/* webpackChunkName: "RelatedFiles" */ './RelatedFiles.vue'),
    ControllButtons: () => import(/* webpackChunkName: "ListAction" */ '@/components/Content/ListAction.vue')
  },
  data () {
    return {
      files
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./../../assets/scss/base/variables";

.detail-wrapper {
  padding: 0 2.5rem;
  &__header {
    display: grid;
    grid-template-columns: 1fr auto;
    .bc-list-layout__action {
      padding: 0 0 1.8rem;
      /deep/.dropdown {
        &-toggle {
          background-color: $color-white;
        }
      }
      @media screen and (max-width: $iPhoneXSMax-portrait) {
        justify-content: left;
      }
    }
    @media screen and (max-width: $iPhoneXSMax-portrait) {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row-reverse;
    }
  }
}
</style>
