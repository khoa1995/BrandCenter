<template>
  <div class="bc-preview" id="bc-preview">
    <div class="bc-preview__header">
      <PreviewHeader />
      <div class="bc-preview__close-icon" @click="$bvModal.hide('modalPreview')">
        <Icon name="close" />
      </div>
      <ControllButtons isInPreview />
    </div>
    <PreviewBanner />
    <PreviewBreadCrumb />
    <PreviewDetailPackage />
    <div class="bc-preview__body">
      <PreviewContent />
      <PreviewRelated isInPreview :contentData="files" />
    </div>
  </div>
</template>

<script>
import { files } from '@/fakeData.js'

export default {
  name: 'bc-preview',
  components: {
    Icon: () => import(/* webpackChunkName: "Icon" */ '@/components/Icon/Icon.vue'),
    PreviewHeader: () => import(/* webpackChunkName: "Header" */ '@/components/Detail/Header.vue'),
    PreviewBanner: () => import(/* webpackChunkName: "Banner" */ '@/components/Detail/Banner.vue'),
    PreviewBreadCrumb: () => import(/* webpackChunkName: "Breadcrumb" */ './Breadcrumb.vue'),
    PreviewDetailPackage: () => import(/* webpackChunkName: "DetailPackage" */ '@/components/Detail/DetailPackage.vue'),
    PreviewContent: () => import(/* webpackChunkName: "DetailContent" */ '@/components/Detail/Content.vue'),
    PreviewRelated: () => import(/* webpackChunkName: "RelatedFiles" */ '@/components/Detail/RelatedFiles.vue'),
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
$padding-preview: 1.25rem 2.5rem;
$margin-0: 0;

.bc-preview {
  &__header {
    display: grid;
    grid-template-columns: 1fr auto;
    .detail-header {
      padding: $padding-preview;
    }
    @media screen and (max-width: $iPhoneXSMax-portrait) {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row-reverse;
    }
  }
  .detail-banner {
    margin: 0;
  }
  .bc-list-layout__action {
    padding: 1.8rem 0;
  }
  &__body {
    background-color: $color-app-bg;
    .detail-content {
      padding: $padding-preview;
      margin-bottom: $margin-0;
    }
    .detail-related {
      padding: $padding-preview;
      margin-bottom: $margin-0;
    }
  }
  .detail-breadcrumb {
    padding: $padding-preview;
    margin: 0;
  }
  .bc-detail-package {
    padding: $padding-preview;
  }
  &__close-icon {
    display: none;
    position: absolute;
    padding: 1rem;
    @media screen and (max-width: $iPhoneXSMax-portrait) {
      display: block;
    }
  }
}
</style>
