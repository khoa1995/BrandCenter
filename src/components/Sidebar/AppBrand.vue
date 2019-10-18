<template>
  <div :class="appBrandClass">
    <div class="bc-app-brand__logo">
      <router-link class="bc-app-brand__link" :to="{ name: 'home' }">
        <Icon class="bc-app-brand__logo-image" name="logo"/>
      </router-link>
    </div>
    <div :class="brandsDropdownClass">
      <div class="bc-app-brand__brands-label">Choose your Brand</div>
      <div class="bc-app-brand__brands-button clickable" @click="handleClickButton">{{ selectedBrandName }}</div>
      <div class="bc-app-brand__brands-dropdown-list-wrapper">
        <div class="bc-app-brand__brands-dropdown-heading">
          <Icon class="bc-app-brand__brands-dropdown-logo" name="logo"/>
          <div class="bc-app-brand__brands-dropdown-heading-label">Select a brand</div>
        </div>
        <div class="bc-app-brand__brands-dropdown-list">
          <div class="bc-app-brand__brands-dropdown-item clickable" v-for="item in brandList" :key="item.BrandId" @click="handleClickBrand(item.BrandId)">
            <div class="bc-app-brand__brands-dropdown-item-label">{{ item.Name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import {
  GET_PACKAGE_BY_BRAND,
  UPDATE_SELECTED_BRAND,
  UPDATE_CATEGORY_CRITERIA,
  GET_RECENT_FILES
} from '@/store/action-types'

export default {
  name: 'bc-app-brand',
  components: {
    Icon: () => import(/* webpackChunkName: "Icon" */ '@/components/Icon/Icon.vue')
  },
  data () {
    return {
      isScrollDown: false,
      isDropdown: false
    }
  },
  computed: {
    ...mapState({
      brandList: state => state.brand.brandList
    }),
    ...mapGetters({
      selectedBrand: 'brand/selectedBrand'
    }),
    brandsDropdownClass () {
      return {
        'bc-app-brand__brands': true,
        'bc-app-brand__brands--dropdown': this.isDropdown
      }
    },
    selectedBrandName () {
      return this.selectedBrand ? this.selectedBrand.Name : ''
    },
    appBrandClass () {
      return {
        'bc-app-brand': true,
        'bc-app-brand--minimal': this.isScrollDown
      }
    }
  },
  methods: {
    ...mapActions({
      _updateSelectedBrand: `brand/${UPDATE_SELECTED_BRAND}`,
      _updateCategoryCriteria: `criteria/${UPDATE_CATEGORY_CRITERIA}`,
      _getPackageByBrand: `packages/${GET_PACKAGE_BY_BRAND}`,
      _getRecentFiles: `files/${GET_RECENT_FILES}`
    }),
    handleClickButton () {
      // Open dropdown
      this.isDropdown = true
    },
    handleClickBrand (id) {
      // Update selected Brand
      this._updateSelectedBrand(id)
      // Update slug
      this.$router.replace({ params: { brandSlug: this.selectedBrand.Slug } })
      // Clear category criteria
      this._updateCategoryCriteria({
        isFromOtherPage: true
      })
      // Reload packages by selected brand
      this._getPackageByBrand(id)
      // Reload recent files base in selected brand
      this._getRecentFiles(id)
      // Hide dropdown
      this.isDropdown = false
    },
    handleClickOutside () {
      if (typeof event.target.className === 'string' &&
        !event.target.className.includes('bc-app-brand__brands')) {
        this.isDropdown = false
      }
    },
    handleScroll (event) {
      this.isScrollDown = window.scrollY > 100
    }
  },
  mounted () {
    // Add click outside event listener
    document.addEventListener('click', this.handleClickOutside)
    document.addEventListener('touchstart', this.handleClickOutside)
    document.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    // Remove click outside event listener
    document.removeEventListener('click', this.handleClickOutside)
    document.removeEventListener('touchstart', this.handleClickOutside)
    document.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';

.bc-app-brand {
  display: flex;
  align-items: center;
  padding: 2rem 1.75rem 0;
  position: relative;
  @media screen and (max-width: $width-fHD-zoom-125) {
    padding-top: 1.5rem;
  }
  @media screen and (max-width: $iPhone5-portrait) {
    padding: 1.5rem 1.5rem 0;
    display: block;
  }
  &--minimal {
    .bc-app-brand {
      &__logo {
        &-image {
          width: 2rem;
        }
      }
      &__brands {
        flex: 1 0 calc(100% - 2rem);
        max-width: calc(100% - 2rem);
      }
    }
  }
  &__logo {
    position: relative;
    @media screen and (max-width: $iPhone5-portrait) {
      display: inline-block;
    }
    &:after {
      position: absolute;
      content: '';
      top: 50%;
      right: -1.75rem;
      width: 0.0625rem;
      height: 1.25rem;
      background-color: $color-border;
      transform: translateY(-50%);
      @media screen and (max-width: $width-fHD-zoom-125) {
        right: -1rem;
      }
      @media screen and (max-width: $iPhone5-portrait) {
        content: none;
      }
    }
    &-image {
      @media screen and (min-width: $height-iPad) {
        width: 10.25rem;
        overflow: hidden;
        transition: all 0.5s ease;
      }
      /deep/ svg {
        @media screen and (max-width: $width-fHD-zoom-125) {
          width: 9rem;
          height: 1.7rem;
        }
        @media screen and (max-width: $iPhoneXSMax-landscape) {
          width: 12rem;
          height: 2.4rem;
        }
        @media screen and (max-width: $iPhone8-portrait) {
          width: 9rem;
          height: 1.7rem;
        }
      }
    }
  }
  &__link {
    display: flex;
  }
  &__brands {
    padding-left: 3.5rem;
    flex: 1 0 calc(100% - 10.25rem);
    max-width: calc(100% - 10.25rem);
    transition: all 0.5s ease;
    @media screen and (max-width: $width-fHD-zoom-125) {
      padding-left: 2rem;
    }
    @media screen and (max-width: $iPhoneXSMax-landscape) {
      flex-basis: auto;
      max-width: 15rem;
    }
    @media screen and (max-width: $iPhone5-landscape) {
      max-width: 9rem;
    }
    @media screen and (max-width: $iPhone5-portrait) {
      padding-left: 0;
      padding-top: 1rem;
      max-width: 15rem;
    }
    &--dropdown {
      .bc-app-brand {
        &__brands {
          &-button {
            &:after {
              top: 0.25rem;
              border-color: transparent transparent $color-text;
            }
          }
          &-dropdown {
            &-list {
              &-wrapper {
                opacity: 1;
                visibility: visible;
              }
            }
          }
        }
      }
    }
    &-label {
      font-size: 0.75rem;
      color: $color-sub-text;
    }
    &-button {
      position: relative;
      font-size: 1.25rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-right: 2rem;
      &:after {
        position: absolute;
        content: '';
        top: 0.625rem;
        right: 0;
        border: 0.375rem solid;
        border-color: $color-text transparent transparent;
      }
    }
    &-dropdown {
      &-list {
        overflow: auto;
        max-height: calc(2.375rem * 7);
        &-wrapper {
          position: absolute;
          z-index: $z-index-dropdown;
          top: 0.6875rem;
          left: 0.1875rem;
          width: 35rem;
          opacity: 0;
          visibility: hidden;
          background-color: $color-white;
          border-radius: 0.375rem;
          border: 0.0625rem solid $color-border;
          box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.2);
          @media screen and (max-width: $width-fHD-zoom-125) {
            width: 30rem;
            top: 0.357rem;
          }
          @media screen and (max-width: $width-fHD-zoom-125) {
            width: 22.5rem;
          }
          @media screen and (max-width: $iPhoneXSMax-landscape) {
            top: 0;
            width: 23rem;
          }
          @media screen and (max-width: $iPhone5-portrait) {
            width: 22rem;
          }
        }
      }
      &-heading {
        display: flex;
        padding: 1.5rem;
        justify-content: space-between;
        align-items: center;
        border-bottom: 0.0625rem solid $color-border;
      }
      &-logo {
        /deep/ svg {
          @media screen and (max-width: $width-fHD-zoom-125) {
            width: 9rem;
            height: 1.7rem;
          }
          @media screen and (max-width: $iPhoneXSMax-landscape) {
            width: 12rem;
            height: 2.4rem;
          }
          @media screen and (max-width: $iPhone8-portrait) {
            width: 9rem;
            height: 1.7rem;
          }
        }
      }
      &-item {
        padding: 0.5rem 2rem;
        font-size: 1.125rem;
        transition: all 0.3s ease;
        &:hover {
          background-color: $color-app-bg;
        }
      }
    }
  }
}
</style>
