<template>
  <div class='bc-grid-layout'>
    <div class='bc-grid-layout__item-wrapper' v-for='item in contentData' :key='`file_${item.id}`' @click="modalPreview=!modalPreview">
      <GridLayoutOverlayItem :item='item' v-if='layout === "overlay"'/>
      <GridLayoutItem :item='item' v-else/>
    </div>
    <!-- preview mode -->
    <b-modal id="modalPreview" body-class="bc-modal-preview" v-model="modalPreview" size="xl" hide-footer hide-header>
      <Preview/>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'bc-grid-layout',
  components: {
    Preview: () => import(/* webpackChunkName: "Preview" */ '@/components/Preview/Preview.vue'),
    GridLayoutItem: () => import(/* webpackChunkName: "GridLayoutItem" */ './GridLayoutItem.vue'),
    GridLayoutOverlayItem: () => import(/* webpackChunkName: "GridLayoutOverlayItem" */ './GridLayoutOverlayItem.vue')
    },
  props: {
    contentData: {
      type: Array,
      require: true,
      default: function () {
        return []
      }
    },
    layout: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {
      modalPreview: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';

.bc-grid-layout {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
  @media screen and (max-width: $width-HD) {
    grid-gap: 1rem;
  }
  @media screen and (max-width: $height-iPad) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: $iPhone4-landscape) {
    grid-template-columns: 1fr;
  }
}

</style>
