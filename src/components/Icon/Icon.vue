<template>
  <span class="bc-icon">
    <IconLogo v-if="name === 'logo'" />
    <IconSearch v-else-if="name === 'search'" />
    <IconHome v-else-if="name === 'home'" />
    <IconPackage v-else-if="name === 'package'" />
    <IconTemplate v-else-if="name === 'template'" />
    <IconDocument v-else-if="name === 'document'" />
    <IconPhoto v-else-if="name === 'photo'" />
    <IconVideo v-else-if="name === 'video'" />
    <IconGraphicElement v-else-if="name === 'graphic-element'" />
    <IconExpand v-else-if="name === 'expand'" />
    <IconDownload v-else-if="name === 'download'" />
    <IconDownloadBox v-else-if="name === 'download-box'" />
    <IconClose v-else-if="name === 'close'" />
    <IconArrowRight v-else-if="name === 'arrow-right'"/>
    <IconAddToDownload v-else-if="name === 'add-to-download'"/>
    <IconTypePackage v-else-if="name === 'type-package'"/>
    <IconTypeWord v-else-if="name === 'type-word'"/>
    <IconTypePPT v-else-if="name === 'type-ppt'"/>
    <IconTypePhoto v-else-if="name === 'type-photo'"/>
    <IconTypeExcel v-else-if="name === 'type-excel'"/>
    <IconTypePDF v-else-if="name === 'type-pdf'"/>
    <IconTypeVideo v-else-if="name === 'type-video'"/>
    <IconSearchSuggest v-else-if="name === 'suggestion'"/>
    <IconLock v-else-if="name === 'lock'"/>
    <IconPreview v-else-if="name === 'preview'"/>
    <IconImage v-else-if="name === 'image'"/>
    <IconFilter v-else-if="name === 'filter'"/>
    <IconList v-else-if="name === 'list'"/>
    <IconGrid v-else-if="name === 'grid'"/>
    <IconAngleRight v-else-if="name === 'angle-right'"/>
    <IconMore v-else-if="name === 'more'"/>
    <IconUnlock v-else-if="name === 'unlock'"/>
    <IconShare v-else-if="name === 'share'"/>
    <IconHamburger v-else-if="name === 'hamburger'"/>
    <IconFolder v-else-if="name === 'folder'"/>
    <IconDefault v-else />
  </span>
</template>

<script>
export default {
  name: 'bc-icon',
  props: {
    name: String
  },
  components: {
    IconDefault: () => import(/* webpackChunkName: "Icon" */ './Icons/IconDefault'),
    IconLogo: () => import(/* webpackChunkName: "Icon" */ './Icons/IconLogo'),
    IconSearch: () => import(/* webpackChunkName: "Icon" */ './Icons/IconSearch'),
    IconHome: () => import(/* webpackChunkName: "Icon" */ './Icons/IconHome'),
    IconPackage: () => import(/* webpackChunkName: "Icon" */ './Icons/IconPackage'),
    IconTemplate: () => import(/* webpackChunkName: "Icon" */ './Icons/IconTemplate'),
    IconDocument: () => import(/* webpackChunkName: "Icon" */ './Icons/IconDocument'),
    IconPhoto: () => import(/* webpackChunkName: "Icon" */ './Icons/IconPhoto'),
    IconVideo: () => import(/* webpackChunkName: "Icon" */ './Icons/IconVideo'),
    IconGraphicElement: () => import(/* webpackChunkName: "Icon" */ './Icons/IconGraphicElement'),
    IconExpand: () => import(/* webpackChunkName: "Icon" */ './Icons/IconExpand'),
    IconDownload: () => import(/* webpackChunkName: "Icon" */ './Icons/IconDownload'),
    IconDownloadBox: () => import(/* webpackChunkName: "Icon" */ './Icons/IconDownloadBox'),
    IconClose: () => import(/* webpackChunkName: "Icon" */ './Icons/IconClose'),
    IconArrowRight: () => import(/* webpackChunkName: "Icon" */ './Icons/IconArrowRight'),
    IconAddToDownload: () => import(/* webpackChunkName: "Icon" */ './Icons/IconAddToDownload'),
    IconTypePackage: () => import(/* webpackChunkName: "Icon" */ './Icons/IconTypePackage'),
    IconTypeWord: () => import(/* webpackChunkName: "Icon" */ './Icons/IconTypeWord'),
    IconTypePPT: () => import(/* webpackChunkName: "Icon" */ './Icons/IconTypePPT'),
    IconTypePhoto: () => import(/* webpackChunkName: "Icon" */ './Icons/IconTypePhoto'),
    IconTypeExcel: () => import(/* webpackChunkName: "Icon" */ './Icons/IconTypeExcel'),
    IconTypePDF: () => import(/* webpackChunkName: "Icon" */ './Icons/IconTypePDF'),
    IconTypeVideo: () => import(/* webpackChunkName: "Icon" */ './Icons/IconTypeVideo'),
    IconSearchSuggest: () => import(/* webpackChunkName: "Icon" */ './Icons/IconSearchSuggestion'),
    IconLock: () => import(/* webpackChunkName: "Icon" */ './Icons/IconLock'),
    IconPreview: () => import(/* webpackChunkName: "Icon" */ './Icons/IconPreview'),
    IconImage: () => import(/* webpackChunkName: "Icon" */ './Icons/IconImage'),
    IconFilter: () => import(/* webpackChunkName: "Icon" */ './Icons/IconFilter'),
    IconList: () => import(/* webpackChunkName: "Icon" */ './Icons/IconList'),
    IconGrid: () => import(/* webpackChunkName: "Icon" */ './Icons/IconGrid'),
    IconAngleRight: () => import(/* webpackChunkName: "Icon" */ './Icons/IconAngleRight'),
    IconMore: () => import(/* webpackChunkName: "Icon" */ './Icons/IconMore'),
    IconUnlock: () => import(/* webpackChunkName: "Icon" */ './Icons/IconUnlock'),
    IconShare: () => import(/* webpackChunkName: "Icon" */ './Icons/IconShare'),
    IconHamburger: () => import(/* webpackChunkName: "Icon" */ './Icons/IconHamburger'),
    IconFolder: () => import(/* webpackChunkName: "Icon" */ './Icons/IconFolder')
  }
}
</script>

<style lang="scss" scoped>

.bc-icon {
  pointer-events: none;
  /deep/ svg {
    pointer-events: none;
  }
}
</style>
