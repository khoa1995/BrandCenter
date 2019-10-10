<template>
  <div class='bc-grid-layout__item'>
    <div class='bc-grid-layout__item-thumbnail' :style='{ backgroundImage: "url(" + require(`@/assets/images/${item.thumbnail}`) + ")" }'></div>
    <div class='bc-grid-layout__item-content'>
      <div class='bc-grid-layout__item-info'>
        <a href='javascript:void(0);' class='bc-grid-layout__item-title'>{{ item.title }}</a>
        <div class='bc-grid-layout__item-size'>{{ item.size }}</div>
      </div>
      <div class='bc-grid-layout__item-action'>
        <button class='bc-grid-layout__item-button bc-button bc-button--default' @click.stop="addItem(item.id, item.type)">
          <Icon class='bc-button__icon btn-add-item' name='add-to-download'/>
        </button>
        <button class='bc-grid-layout__item-button bc-button bc-button--light'>
          <Icon class='bc-button__icon' name='download' />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { ADD_ITEM_TO_BOX } from '@/store/action-types'

export default {
  name: 'bc-grid-layout-overlay-item',
  components: {
    Icon: () => import(/* webpackChunkName: "Icon" */ '@/components/Icon/Icon.vue')
  },
  props: {
    item: {
      type: Object,
      require: true
    }
  },
  methods: {
    ...mapActions({
      _addFileToDownloadBox: `downloadbox/${ADD_ITEM_TO_BOX}`
    }),
    addItem (id, type) {
      this._addFileToDownloadBox({ id: id, type: type })
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';

.bc-grid-layout {
  &__item {
    padding: 1.25rem 1.5rem;
    border-radius: 0.75rem;
    height: 13rem;
    overflow: hidden;
    position: relative;
    &:before {
      position: absolute;
      z-index: 2;
      content: '';
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: adjust-color($color-black, $alpha: -0.7);
    }
    &-thumbnail {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-size: cover;
      background-position: center;
    }
    &-content {
      position: absolute;
      z-index: 3;
      top: 1.25rem;
      left: 1.5rem;
      right: 1rem;
      bottom: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    &-info {
      color: $color-white;
      margin-bottom: 0.5rem;
    }
    &-title {
      color: $color-white;
      font-weight: 700;
      font-size: 1rem;
      max-height: calc(1rem * #{$line-height} * 2);
      overflow: hidden;
      display: inline-flex;
      &:hover {
        color: adjust-color($color-white, $lightness: -15%);
      }
    }
    &-action {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
