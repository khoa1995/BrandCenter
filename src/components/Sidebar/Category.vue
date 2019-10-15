<template>
  <div class="bc-category">
    <div class="bc-category__title">Libraries</div>
    <div class="bc-category__list-wrapper">
      <div class="bc-category__list">
        <div :class="{ 'bc-category__item': true, 'bc-category__item--dropdown': category.IsDropdown }" v-for="category in categoryList" :key="category.Id">
          <div :class="{ 'bc-category__item-link': true, 'clickable': true, 'bc-category__item-link--empty': category.SubCategories.length <= 0 }" @click="handleClickLink(category)">
            <Icon class="bc-category__item-icon" :name="category.Icon" />
            <span class="bc-category__item-label">{{ category.Label }}</span>
            <span class="bc-category__item-arrow" @click.stop="handleOpenSecondCategory(category)"></span>
          </div>
          <!-- SECOND-CATEGORY -->
          <div class="bc-category__sub-list">
            <div :class="{ 'bc-category__sub-item': true, 'bc-category__sub-item--dropdown': secondCategory.IsDropdown }" v-for="secondCategory in category.SubCategories" :key="secondCategory.Id">
              <div :class="{ 'bc-category__sub-link': true, 'clickable': true, 'bc-category__sub-link--empty': secondCategory.SubCategories.length <= 0 }" @click="handleClickLink(secondCategory)">
                <span>{{ secondCategory.Label }}</span>
                <span class="bc-category__item-arrow" @click.stop="handleOpenThirdCategory(secondCategory, category)"></span>
              </div>
              <!-- THIRD-CATEGORY -->
              <div class="bc-category__sub-list">
                <div class="bc-category__sub-item clickable" v-for="thirdCategory in secondCategory.SubCategories" :key="thirdCategory.Id">
                  <div class="bc-category__sub-link" @click="handleClickLink(thirdCategory)">{{ thirdCategory.Label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import {
  GET_CATEGORY_LIST,
  HANDLE_SECONDARY_CATEGORY,
  HANDLE_THIRD_CATEGORY,
  UPDATE_SIDEBAR_STATE
} from '@/store/action-types'

export default {
  name: 'bc-category',
  components: {
    Icon: () => import(/* webpackChunkName: "Icon" */ '@/components/Icon/Icon.vue')
  },
  computed: {
    ...mapState({
      categoryList: state => state.category.categoryList
    })
  },
  methods: {
    ...mapActions({
      _getCategoryList: `category/${GET_CATEGORY_LIST}`,
      _handleSecondaryCategory: `category/${HANDLE_SECONDARY_CATEGORY}`,
      _handleThirdCategory: `category/${HANDLE_THIRD_CATEGORY}`,
      _updateSidebarState: `config/${UPDATE_SIDEBAR_STATE}`
    }),
    handleClickLink (item) {
      this.$router.push({ name: 'template' })
      this._updateSidebarState(false)
    },
    handleOpenSecondCategory (category) {
      if (category.SubCategories.length > 0) {
        this._handleSecondaryCategory(category)
      }
    },
    handleOpenThirdCategory (category, parentCategory) {
      if (parentCategory.SubCategories.length > 0) {
        let model = { category: category, parentCategory: parentCategory }
        this._handleThirdCategory(model)
      }
    }
  },
  mounted () {
    this._getCategoryList()
  }
}
</script>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';

.bc-category {
  padding: 2rem 1.75rem 0.5rem;
  @media screen and (max-width: $width-fHD-zoom-125) {
    padding-top: 1.5rem;
  }
  @media screen and (max-width: $width-HD) {
    padding-top: 1rem;
  }
  @media screen and (max-width: $iPhoneXSMax-landscape) {
    padding: 2rem 2rem 0;
  }
  @media screen and (max-width: $iPhone5-portrait) {
    padding: 2rem 1.5rem 0;
  }
  &__title {
    font-size: 1.125rem;
  }
  &__list {
    font-weight: 500;
    &-wrapper {
      overflow: auto;
      max-height: 15rem;
      margin-top: 1.5rem;
      @media screen and (max-width: $width-fHD-zoom-125) {
        margin-top: 0.75rem;
        max-height: 12.5rem;
      }
      @media screen and (max-width: $width-HD) {
        max-height: 7.5rem;
      }
      @media screen and (max-width: $iPhoneXSMax-landscape) {
        max-height: none;
      }
    }
  }
  &__item {
    position: relative;
    &:hover {
      .bc-category {
        &__item {
          &-link {
            color: $color-mantu;
            background-color: adjust-color($color-mantu, $alpha: -0.8, $lightness: 25%);
          }
          &-icon {
            color: $color-white;
            background-color: $color-mantu;
          }
        }
      }
    }
    &--dropdown {
      .bc-category {
        &__item {
          &-link {
            color: $color-mantu;
            background-color: adjust-color($color-mantu, $alpha: -0.8, $lightness: 25%);
            > .bc-category__item-arrow {
              transform: rotate(90deg);
              &:after {
                border-color: transparent transparent transparent $color-black;
              }
            }
          }
          &-icon {
            color: $color-white;
            background-color: $color-mantu;
          }
        }
      }
      > .bc-category {
        &__sub-list {
          height: auto;
        }
      }
    }
    &-link {
      display: flex;
      align-items: center;
      padding: 0.25rem 0.375rem;
      border-radius: 0.625rem;
      position: relative;
      &--empty {
        .bc-category {
          &__item {
            &-arrow {
              display: none;
            }
          }
        }
      }
    }
    &-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      flex: 1 0 2.5rem;
      max-width: 2.5rem;
      height: 2.5rem;
      @media screen and (max-width: $width-fHD-zoom-125) {
        flex-basis: 2rem;
        max-width: 2rem;
        height: 2rem;
      }
      @media screen and (max-width: $iPhoneXSMax-landscape) {
        flex-basis: 2.5rem;
        max-width: 2.5rem;
        height: 2.5rem;
      }
      /deep/ svg {
        @media screen and (max-width: $width-fHD-zoom-125) {
          transform: scale(0.8);
        }
      }
    }
    &-label {
      padding-left: 1.25rem;
    }
    &-arrow {
      position: absolute;
      top: 0;
      right: 0;
      width: 3rem;
      height: 3rem;
      @media screen and (max-width: $width-fHD-zoom-125) {
        right: 0.286rem;
        width: 2.5rem;
        height: 2.5rem;
      }
      @media screen and (max-width: $iPhoneXSMax-landscape) {
        right: 0;
        width: 3rem;
        height: 3rem;
      }
      &:after {
        position: absolute;
        content: '';
        top: 1.125rem;
        right: 1rem;
        border: 0.375rem solid;
        border-color: transparent transparent transparent $color-btn-border;
        @media screen and (max-width: $width-fHD-zoom-125) {
          top: 0.857rem;
          right: 0.57rem;
        }
        @media screen and (max-width: $iPhoneXSMax-landscape) {
          top: 1.143rem;
          right: 1rem;
        }
      }
    }
  }
  &__sub {
    &-list {
      height: 0;
      overflow: hidden;
    }
    &-item {
      margin-top: 1rem;
      margin-left: 2rem;
      border-radius: 0.625rem;
      @media screen and (max-width: $width-fHD-zoom-125) {
        margin-top: 0.75rem;
        margin-left: 1.5rem;
      }
      &--dropdown {
        > .bc-category {
          &__sub-link {
            color: $color-mantu;
            background-color: adjust-color($color-mantu, $alpha: -0.8, $lightness: 40%);
            > .bc-category {
              &__item {
                &-arrow {
                  transform: rotate(90deg);
                  &:after {
                    border-color: transparent transparent transparent $color-black;
                  }
                }
              }
            }
          }
        }
        .bc-category {
          &__sub-list {
            height: auto;
          }
        }
      }
    }
    &-link {
      display: flex;
      align-items: center;
      padding: 0.5rem 1rem 0.5rem 1rem;
      border-radius: 0.625rem;
      position: relative;
      &:hover {
        color: $color-mantu;
        background-color: adjust-color($color-mantu, $alpha: -0.8, $lightness: 40%);
      }
      .bc-category {
        &__item {
          &-arrow {
            right: 0.375rem;
            width: 2.25rem;
            height: 2.25rem;
            &:after {
              top: 0.75rem;
              right: 0.5rem;
            }
          }
        }
      }
      &--empty {
        .bc-category {
          &__item {
            &-arrow {
              display: none;
            }
          }
        }
      }
    }
  }
}
</style>
