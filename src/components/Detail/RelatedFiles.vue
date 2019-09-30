<template>
  <div class="detail-related">
    <DetailStyleTitle title="related files" class="detail-related__title"/>
    <!--show in Detail Page-->
    <div class="detail-related__layout" v-if="!isInPreview" >
      <div class="detail-related__item-wrapper" v-for="(item,index) in contentData" :key='item.id'>
        <!-- <GridLayout :contentData='layoutData'/> -->
        <template v-if="index < 4">
          <GridLayoutItem isInDetail :item='item' />
        </template>
      </div>
    </div>
    <!-- show in Preview mode -->
    <div class="detail-related__layout" v-else-if="isInPreview" >
      <div class="detail-related__item-wrapper" v-for="(item,index) in contentData" :key='item.id'>
        <!-- <GridLayout :contentData='layoutData'/> -->
        <template v-if="index < 3">
          <GridLayoutItem isInDetail :item='item' />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail-related',
  components: {
    DetailStyleTitle: () => import(/* webpackChunkName: "DetailStyleTitle" */'./DetailStyleTitle'),
    GridLayoutItem: () => import(/* webpackChunkName: "GridLayoutItem" */ '@/components/Content/GridLayoutItem.vue')
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
    },
    isInPreview: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';
.detail-related {
  &__title {
    margin-bottom: 1rem
  }
  &__layout {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: $iPhoneXSMax-portrait) {
      grid-template-columns: 1fr;
      grid-gap: .5rem;
    }
  }
}
</style>
