<template>
  <div :class="suggestionClass">
    <div class="bc-search-suggestion__group" v-if="suggestionCategoryList.length > 0">
      <div class="bc-search-suggestion__header">
        <span class="bc-search-suggestion__header-icon">
          <Icon name="suggestion" />
        </span>
        <span class="bc-search-suggestion__header-label">Search your file in</span>
      </div>
      <div class="bc-search-suggestion__list">
        <div
          class="bc-search-suggestion__item clickable"
          v-for="item in suggestionCategoryList"
          :key="item.Id">
          <span class="bc-search-suggestion__item-icon">
            <Icon :name="item.IconName" />
          </span>
          <span class="bc-search-suggestion__item-label">{{ item.Label }}</span>
        </div>
      </div>
    </div>
    <div class="bc-search-suggestion__group" v-if="suggestionFileList.length > 0">
      <div class="bc-search-suggestion__header">
        <span class="bc-search-suggestion__header-icon">
          <Icon name="document" />
        </span>
        <span class="bc-search-suggestion__header-label">Files</span>
      </div>
      <div class="bc-search-suggestion__list">
        <div
          class="bc-search-suggestion__item clickable"
          v-for="item in suggestionFileList"
          :key="item.Id">
          <span class="bc-search-suggestion__item-icon">
            <Icon :name="item.IconName" />
          </span>
          <span class="bc-search-suggestion__item-label">{{ item.Label }}</span>
        </div>
        <div class="bc-search-suggestion__item">
          <span class="bc-search-suggestion__item-icon">
            <Icon name="document" />
          </span>
          <span class="bc-search-suggestion__item-label">Event files</span>
        </div>
        <div class="bc-search-suggestion__item">
          <span class="bc-search-suggestion__item-icon">
            <Icon name="document" />
          </span>
          <span class="bc-search-suggestion__item-label">Event files</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { UPDATE_VISIBLE_STATE } from '@/store/action-types'

export default {
  name: 'bc-search-suggestion',
  data () {
    return {
    }
  },
  components: {
    Icon: () => import(/* webpackChunkName: "Icon" */ '@/components/Icon/Icon.vue')
  },
  computed: {
    ...mapState({
      suggestionsList: state => state.suggestions.suggestionsList,
      isVisible: state => state.suggestions.isVisible
    }),
    ...mapGetters({
      suggestionCategoryList: 'suggestions/suggestionCategoryList',
      suggestionFileList: 'suggestions/suggestionFileList',
      suggestionExtensionList: 'suggestions/suggestionExtensionList'
    }),
    suggestionClass () {
      return {
        'bc-search-suggestion': true,
        'bc-search-suggestion--visible': this.isVisible && this.suggestionsList.length > 0
      }
    }
  },
  methods: {
    ...mapActions({
      _updateVisibleState: `suggestions/${UPDATE_VISIBLE_STATE}`
    }),
    handleClickOutside () {
      if (typeof event.target.className === 'string') {
        if (!event.target.className.includes('bc-search-bar') &&
            !event.target.className.includes('bc-search-suggestion')) {
          this._updateVisibleState(false)
        }
      }
    }
  },
  mounted () {
    // Add click outside event listener
    document.addEventListener('click', this.handleClickOutside)
    document.addEventListener('touchstart', this.handleClickOutside)
  },
  beforeDestroy () {
    // Remove click outside event listener
    document.removeEventListener('click', this.handleClickOutside)
    document.removeEventListener('touchstart', this.handleClickOutside)
  }
}
</script>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';

.bc-search-suggestion {
  position: absolute;
  top: 100%;
  left: 2.5rem;
  right: 0;
  opacity: 0;
  visibility: hidden;
  max-height: 30rem;
  overflow: auto;
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  z-index: $z-index-dropdown;
  background-color: $color-white;
  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.2);
  @media screen and (max-width: $iPhone5-landscape) {
    left: 0;
    right: auto;
    width: 80vw;
  }
  @media screen and (max-width: $iPhone8-portrait) {
    left: -1rem;
    width: 80vw;
  }
  @media screen and (max-width: $iPhone5-portrait) {
    width: 78vw;
  }
  &--visible {
    opacity: 1;
    visibility: visible;
  }
  &__header {
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
    border-bottom: 1px solid $color-btn-border;
    &-icon {
    }
    &-label {
      font-size: 1.125rem;
      font-weight: 500;
      padding-left: 1rem;
    }
  }
  &__list {
    padding: 0.5rem;
  }
  &__item {
    display: flex;
    padding: 0.25rem 0.5rem;
    border-radius: 0.625rem;
    transition: all 0.3s ease;
    &:hover {
      color: $color-mantu;
      background-color: adjust-color($color-mantu, $alpha: -0.8);
    }
    &-icon {
      + .bc-search-suggestion__item-label {
        padding-left: 1rem;
      }
    }
    &-label {
    }
  }
}
</style>
