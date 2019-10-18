<template>
  <div class="bc-download-box">
    <div class="bc-download-box__button clickable" @click="handleClickBox">
      <Icon class="bc-download-box__button-icon" name="download-box"/>
      <span class="bc-download-box__button-icon-count">{{ itemCounter }}</span>
    </div>
    <div :class="boxInnerClass">
      <div class="bc-download-box__close-button clickable" @click="handleClickCloseBox">
        <Icon class="bc-download-box__button-icon" name="close" />
      </div>
      <div class="bc-download-box__title">Download Box</div>
      <div class="bc-download-box__counter">{{ contentCounter }}</div>
      <div class="bc-download-box__list-wrapper">
        <div class="bc-download-box__list">
          <div class="bc-download-box__item" v-for="item in addedItems" :key="item.Id">
            <div class="bc-download-box__item-icon">
              <Icon :name="`type-${item.type}`" />
            </div>
            <div class="bc-download-box__item-info">
              <div class="bc-download-box__item-name">{{ item.Name }}</div>
              <div class="bc-download-box__item-size">{{ item.Size }}</div>
            </div>
            <div class="bc-download-box__item-remove clickable pull-right" @click="handleClickRemove(item.Id, item.Type)"></div>
          </div>
        </div>
      </div>
      <div class="bc-download-box__download-button clickable" @click="handleClickDownload">
        <Icon name="download" />
        <span class="bc-download-box__download-button-label">Download</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import {
  MAKE_TOAST,
  // SET_DOWNLOAD_BOX,
  REMOVE_ITEM_FROM_BOX,
  SET_DOWNLOAD_BOX_FROM_CACHE
} from '@/store/action-types'

export default {
  name: 'bc-download-box',
  components: {
    Icon: () => import(/* webpackChunkName: "Icon" */ '@/components/Icon/Icon.vue')
  },
  data () {
    return {
      isOpenDownloadBox: false
    }
  },
  computed: {
    ...mapState({
      addedItems: state => state.downloadbox.addedItems
    }),
    contentCounter () {
      let res = ''
      if (this.addedItems) {
        res = `${this.addedItems.length} Content${this.addedItems.length > 1 ? 's' : ''}`
      }
      return res
    },
    itemCounter () {
      return this.addedItems ? this.addedItems.length : 0
    },
    boxInnerClass () {
      return {
        'bc-download-box-inner': true,
        'bc-download-box-inner--open': this.isOpenDownloadBox
      }
    }
  },
  methods: {
    ...mapActions({
      _makeToast: `toast/${MAKE_TOAST}`,
      // _SetDownloadBox: `downloadbox/${SET_DOWNLOAD_BOX}`,
      _removeAddedItem: `downloadbox/${REMOVE_ITEM_FROM_BOX}`,
      _setDownloadBoxFromCache: `downloadbox/${SET_DOWNLOAD_BOX_FROM_CACHE}`
    }),
    handleClickBox () {
      this.isOpenDownloadBox = !this.isOpenDownloadBox
    },
    handleClickCloseBox () {
      this.isOpenDownloadBox = false
    },
    handleClickRemove (id) {
      this._removeAddedItem(id)
    },
    handleClickDownload () {
      this._makeToast({
        title: 'Downloading ...',
        variant: 'info'
      })
    },
    handleClickOutside () {
      if (typeof event.target.className === 'string') {
        if (!event.target.className.includes('bc-download-box') &&
            !event.target.className.includes('btn-add-item')) {
          this.isOpenDownloadBox = false
        }
      }
    }
  },
  mounted () {
    this._setDownloadBoxFromCache()
    document.addEventListener('click', this.handleClickOutside)
    document.addEventListener('touchstart', this.handleClickOutside)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.handleClickOutside)
    document.removeEventListener('touchstart', this.handleClickOutside)
  }
}
</script>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';

.bc-download-box {
  &__button {
    color: $color-main;
    position: relative;
    &-icon-count {
      font-size: smaller;
      border-radius: 50%;
      background-color: $color-red;
      padding: 0.3rem 0.5rem;
      color: $color-white;
      position: absolute;
      top: -1rem;
      font-weight: 700;
      right: -1rem;
    }
  }
  &-inner {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 100%;
    width: 25rem;
    height: 100%;
    padding: 2.5rem 2rem 0;
    border-left: 0.0625rem solid $color-border;
    border-right: 0.0625rem solid $color-border;
    background-color: $color-white;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    @media screen and (max-width: $width-fHD-zoom-125) {
      left: 0;
      width: 23rem;
    }
    @media screen and (max-width: $iPhoneXSMax-landscape) {
      position: fixed;
      left: auto;
      right: 0;
    }
    &--open {
      opacity: 1;
      visibility: visible;
    }
  }
  &__close-button {
    position: absolute;
    top: 2.5rem;
    right: 2rem;
    color: $color-btn-border;
  }
  &__title {
    font-weight: 700;
    font-size: 1.125rem;
    color: $color-main;
  }
  &__counter {
    font-weight: 700;
    margin-top: 1rem;
    font-size: 1.5625rem;
  }
  &__list {
    &-wrapper {
      margin-top: 2rem;
      max-height: calc(100vh - 17rem);
      overflow: auto;
    }
  }
  &__item {
    display: flex;
    padding: 0.75rem;
    border-radius: 0.5rem;
    border: 0.0625rem solid $color-border;
    box-shadow: 0 0.1875rem 0.375rem rgba(0, 0, 0, 0.05);
    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
    &:hover {
      border-color: $color-mantu;
    }
    &-icon {
      flex: 1 0 2.25rem;
      max-width: 2.25rem;
      display: flex;
      /deep/ .bc-icon {
        pointer-events: none;
      }
    }
    &-info {
      padding-left: 1rem;
      flex: 1 0 calc(100% - 4.5rem);
      max-width: calc(100% - 4.5rem);
    }
    &-name {
      font-weight: 500;
      font-size: 0.9375rem;
    }
    &-size {
      color: $color-sub-text;
      font-size: 0.75rem;
    }
    &-remove {
      position: relative;
      flex: 1 0 2.25rem;
      max-width: 2.25rem;
      height: 2.25rem;
      border-radius: 0.25rem;
      background-color: $color-border;
      transition: all 0.3s ease;
      &:before {
        position: absolute;
        content: '';
        top: 50%;
        left: 50%;
        width: 1rem;
        height: 0.125rem;
        background-color: $color-btn-border;
        transform: translate(-50%, -50%);
        transition: all 0.3s ease;
      }
      &:hover {
        background-color: $color-red;
        &:before {
          background-color: $color-white;
        }
      }
    }
  }
  &__download-button {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 2rem;
    text-align: center;
    color: $color-white;
    background-color: $color-purple;
    &-label {
      padding-left: 1.5rem;
    }
  }
}
</style>
