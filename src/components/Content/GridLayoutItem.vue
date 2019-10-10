<template>
  <div class='bc-grid-layout__item'>
    <div class='bc-grid-layout__item-thumbnail-wrapper'>
      <div class='bc-grid-layout__item-thumbnail' :style='{ backgroundImage: "url(" + require(`@/assets/images/${item.thumbnail}`) + ")" }'></div>
      <!-- <Icon class='bc-grid-layout__item-thumbnail-icon' :name='`type-${item.type}`' v-show='!isInDetail' /> -->
      <div class='bc-grid-layout__item-action'>
        <button class='bc-grid-layout__item-button bc-button bc-button--default' v-show='!isInDetail' @click.stop="addItem(item.id, item.type)">
          <Icon class='bc-button__icon btn-add-item' name='add-to-download'/>
        </button>
        <button class='bc-grid-layout__item-button bc-button bc-button--light'>
          <Icon class='bc-button__icon' name='download' />
        </button>
      </div>
    </div>
    <div class='bc-grid-layout__item-content'>
      <div class='bc-grid-layout__item-icon'>
        <Icon :name='`type-${item.type}`' />
      </div>
      <div class='bc-grid-layout__item-info'>
        <a href='javascript:void(0);' class='bc-grid-layout__item-title'>{{ item.title }}</a>
        <div class='bc-grid-layout__item-size'>{{ item.size }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { ADD_ITEM_TO_BOX } from '@/store/action-types'

export default {
  name: 'bc-grid-layout-item',
  components: {
    Icon: () => import(/* webpackChunkName: "Icon" */ '@/components/Icon/Icon.vue')
  },
  props: {
    item: {
      type: Object,
      require: true
    },
    isInDetail: {
      type: Boolean,
      default: false
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
    padding: 0.75rem;
    border-radius: 0.75rem;
    background-color: $color-white;
    &-thumbnail {
      position: relative;
      z-index: 1;
      height: 13rem;
      border-radius: 0.625rem;
      background-size: cover;
      background-position: center;
      &-wrapper {
        position: relative;
      }
      &-icon {
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        /deep/ .bc-type-icon {
          min-width: 3.25rem;
          min-height: 3.25rem;
          svg {
            transform: scale(1.5);
          }
        }
      }
    }
    &-action {
      position: absolute;
      z-index: 2;
      left: 1rem;
      right: 1rem;
      bottom: 1rem;
      display: flex;
      justify-content: flex-end;
    }
    &-content {
      margin-top: 1rem;
      display: flex;
    }
    &-info {
      padding-left: 0.875rem;
    }
    &-title {
      font-weight: 700;
      font-size: 1rem;
      color: $color-text;
      max-height: calc(1rem * #{$line-height} * 2);
      overflow: hidden;
      display: inline-flex;
      transition: all 0.3s ease;
      &:hover {
        color: $color-mantu;
      }
    }
    &-size {
      margin-top: 0.25rem;
      color: $color-sub-text;
    }
  }
}
</style>
