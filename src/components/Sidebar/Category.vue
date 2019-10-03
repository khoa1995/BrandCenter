<template>
  <div class='bc-category'>
    <div class='bc-category__title'>Libraries</div>
    <div class='bc-category__list-wrapper'>
      <div class='bc-category__list'>
        <div :class='{ "bc-category__item": true, "bc-category__item--dropdown": category.isDropdown }' v-for='category in categories' :key='category.id'>
          <div :class='{ "bc-category__item-link": true, "clickable": true, "bc-category__item-link--empty": category.subCategories.length <= 0 }' @click='handleClickItem(category)'>
            <Icon class='bc-category__item-icon' :name='category.icon' />
            <div class='bc-category__item-label' @click="redirectToTemplate">{{ category.label }}</div>
          </div>
          <!-- SUB-CAT -->
          <div class='bc-category__sub-list'>
            <div :class='{"bc-category__sub-item":true,"bc-category__sub--dropdown": subCategory.isDropdown}' v-for='subCategory in category.subCategories' :key='subCategory.id'>
              <div :class='{"bc-category__sub-link":true, "clickable":true, "bc-category__item-link--empty":subCategory.thirdCategories.length <=0}' @click="handleClickSub(subCategory, category)">
                {{ subCategory.label }}
              </div>
              <!-- THIRD-SUB-CAT -->
              <div class='bc-category__third-list'>
                <div class="bc-category__third-itm" v-for="thirdCategory in subCategory.thirdCategories" :key="thirdCategory.id">
                  {{ thirdCategory.label }}
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
import { categories } from '@/fakeData.js'

export default {
  name: 'bc-category',
  components: {
    Icon: () => import(/* webpackChunkName: "Icon" */ '@/components/Icon/Icon.vue')
  },
  data () {
    return {
      categories
    }
  },
  methods: {
    handleClickItem (item) {
      if (item.subCategories.length > 0) {
        let selectedCategory = this.categories.find(x => x.id === item.id)
        selectedCategory.isDropdown = !selectedCategory.isDropdown
      }
    },
    handleClickSub (subCategory, category) {
      if (subCategory.thirdCategories.length > 0) {
        let selectedCategorySub = category.subCategories.find(x => x.id === subCategory.id)
        selectedCategorySub.isDropdown = !selectedCategorySub.isDropdown
      }
    },
    redirectToTemplate () {
      this.$router.push({ name: 'template' })
    }
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
            background-color: adjust-color($color-mantu, $alpha: -0.8);
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
            background-color: adjust-color($color-mantu, $alpha: -0.8);
            &:after {
              top: 1.25rem;
              right: 1rem;
              border-color: $color-mantu transparent transparent;
            }
          }
          &-icon {
            color: $color-white;
            background-color: $color-mantu;
          }
        }
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
      &:after {
        position: absolute;
        content: '';
        top: 1rem;
        right: 0.75rem;
        border: 0.375rem solid;
        border-color: transparent transparent transparent $color-btn-border;
      }
      &--empty {
        &:after {
          content: none;
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
    }
    &-label {
      padding-left: 1.25rem;
    }
  }
  &__sub {
    &-list {
      height: 0;
      overflow: hidden;
    }
    &-item {
      padding: 0.5rem 1rem 0.5rem 4rem;
    }

    &--dropdown {
      .bc-category {
        &__third-list {
          height: auto;
        }
      }
    }
  }
  &__third {
    &-list {
      height: 0;
      overflow: hidden;
    }
  }
}
</style>
