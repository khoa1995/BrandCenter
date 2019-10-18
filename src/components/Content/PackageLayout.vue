<template>
  <div class='bc-package-layout'>
    <div class='bc-package-layout__item' v-for='item in contentData' :key="`package_${item.Id}`" @click="modalPreview=!modalPreview">
      <template>
        <div class='bc-package-layout__item-thumbnail' :style='{ backgroundImage: `url(${convertRelativeUrl(item.BackgroundUrl)})` }'></div>
        <div class='bc-package-layout__item-content'>
          <div class='bc-package-layout__item-info'>
            <a href='javascript:void(0);' class='bc-package-layout__item-title'>{{ item.Title }}</a>
            <div class='bc-package-layout__item-size'>{{ item.Size }}</div>
            <div class='bc-package-layout__item-description'>{{ item.Description }}</div>
          </div>
          <div class='bc-package-layout__item-action'>
            <button class='bc-package-layout__item-button bc-button bc-button--default' @click.stop='addToDownloadBox(item.Id,)'>
              <Icon class='bc-button__icon btn-add-item' name='add-to-download' />
              <span class='bc-button__text'>Add to download</span>
            </button>
            <button class='bc-package-layout__item-button bc-button bc-button--light'>
              <Icon class='bc-button__icon' name='download' />
            </button>
          </div>
        </div>
      </template>
    </div>
    <!-- preview mode -->
    <b-modal id="modalPreview" body-class="bc-modal-preview" v-model="modalPreview" size="xl" hide-footer hide-header>
      <Preview/>
    </b-modal>
  </div>
</template>

<script>
import { ADD_ITEM_TO_BOX } from '@/store/action-types'
import { mapActions } from 'vuex'

export default {
  name: 'bc-package-layout',
  props: {
    contentData: {
      type: Array,
      require: true,
      default: function () {
        return []
      }
    }
  },
  components: {
    Preview: () => import(/* webpackChunkName: "Preview" */ '@/components/Preview/Preview.vue'),
    Icon: () => import(/* webpackChunkName: "Icon" */ '@/components/Icon/Icon.vue')
  },
  data () {
    return {
      modalPreview: false
    }
  },
  methods: {
    ...mapActions({
      _addPackageToDownloadBox: `downloadbox/${ADD_ITEM_TO_BOX}`
    }),
    addToDownloadBox (id, type) {
      this._addPackageToDownloadBox({ id: id, type: 'package' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';

.bc-package-layout {
  display: flex;
  flex-wrap: wrap;
  margin: -0.75rem;
  @media screen and (max-width: $width-HD) {
    margin: -0.5rem;
  }
  &__item {
    position: relative;
    overflow: hidden;
    border-radius: 0.5rem;
    height: 30rem;
    flex: 1 0 auto;
    margin: 0.75rem;
    @media screen and (max-width: $width-HD) {
      height: 25rem;
      margin: 0.5rem;
    }
    @media screen and (max-width: $height-iPad) {
      flex-basis: calc(50% - 1rem);
    }
    @media screen and (max-width: $iPhone4-landscape) {
      flex-basis: calc(100% - 1rem);
    }
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
    &:empty {
      display: none;
    }
    &:nth-child(1) {
      flex-basis: calc(75% - 1.5rem);
      @media screen and (max-width: $width-HD) {
        flex-basis: calc(75% - 1rem);
      }
      @media screen and (max-width: $height-iPad) {
        flex-basis: calc(50% - 1rem);
      }
      @media screen and (max-width: $iPhone4-landscape) {
        flex-basis: calc(100% - 1rem);
      }
      .bc-package-layout {
        &__item {
          &-content {
            @media screen and (max-width: $height-iPad) {
              left: 1.5rem;
              right: 1.5rem;
            }
          }
          &-info {
            @media screen and (max-width: $height-iPad) {
              max-width: 100%;
            }
          }
          &-button {
            /deep/ .bc-button__text {
              @media screen and (max-width: $height-iPad) {
                display: none;
              }
            }
          }
        }
      }
    }
    &:nth-child(2) {
      flex-basis: calc(25% - 1.5rem);
      @media screen and (max-width: $width-HD) {
        flex-basis: calc(25% - 1rem);
      }
      @media screen and (max-width: $height-iPad) {
        flex-basis: calc(50% - 1rem);
      }
      @media screen and (max-width: $iPhone4-landscape) {
        flex-basis: calc(100% - 1rem);
      }
      .bc-package-layout {
        &__item {
          &-content {
            left: 2rem;
            right: 1.5rem;
            display: block;
            @media screen and (max-width: $height-iPad) {
              left: 1.5rem;
            }
          }
          &-info {
            max-width: 80%;
            @media screen and (max-width: $height-iPad) {
              max-width: 100%;
            }
          }
          &-title {
            font-size: 1.25rem;
            max-height: calc(1.25rem * #{$line-height} * 2);
          }
          &-size {
            font-size: 0.825em;
          }
          &-description {
            max-height: calc(1rem * #{$line-height} * 5);
            @media screen and (max-width: $width-HD) {
              max-height: calc(1rem * #{$line-height} * 4.9);
            }
            @media screen and (max-width: $iPhone4-landscape) {
              max-height: calc(1rem * #{$line-height} * 4);
            }
          }
        }
      }
    }
    &:nth-child(n + 2) {
      .bc-button {
        &__text {
          display: none;
        }
        &:not(:last-child) {
          margin-right: 0.625rem;
        }
      }
      .bc-package-layout {
        &__item {
          &-size {
            margin-top: 0.25rem;
          }
        }
      }
    }
    &:nth-child(n + 3) {
      height: 13rem;
      @media screen and (max-width: $width-HD) {
        height: 10rem;
      }
      .bc-package-layout {
        &__item {
          &-content {
            top: 1rem;
            left: 1.5rem;
            right: 1rem;
            bottom: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          &-info {
            max-width: 90%;
          }
          &-title {
            font-size: 1.125rem;
            max-height: calc(1.125rem * #{$line-height} * 2);
          }
          &-size {
            font-size: 0.825rem;
          }
          &-description {
            display: none;
          }
          &-action {
            max-width: none;
          }
        }
      }
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
      left: 3.25rem;
      right: 2rem;
      bottom: 1.5rem;
      z-index: 3;
    }
    &-info {
      color: $color-white;
      max-width: 60%;
      margin-bottom: 0.5rem;
    }
    &-title {
      color: $color-white;
      font-weight: 700;
      font-size: 1.5625rem;
      max-height: calc(1.5625rem * #{$line-height} * 2);
      overflow: hidden;
      display: inline-flex;
      @media screen and (max-width: $iPhone4-landscape) {
        font-size: 1.25rem;
        max-height: calc(1.25rem * #{$line-height} * 2);
      }
      &:hover {
        color: adjust-color($color-white, $lightness: -15%);
      }
    }
    &-size {
      margin-top: 0.625rem;
      font-size: 1.25rem;
      @media screen and (max-width: $iPhone4-landscape) {
        font-size: 0.825rem;
      }
    }
    &-description {
      margin-top: 0.75rem;
      font-size: 1rem;
      max-height: calc(1rem * #{$line-height} * 4);
      overflow: hidden;
      display: inline-flex;
    }
    &-action {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
