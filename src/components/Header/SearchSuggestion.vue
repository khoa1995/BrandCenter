<template>
  <div class="bc-search-suggestion">
    <div class="bc-search-suggestion__group">
      <div class="bc-search-suggestion__header">
        <span class="bc-search-suggestion__header-icon">
          <Icon name="suggestion" />
        </span>
        <span class="bc-search-suggestion__header-label">Search your file in</span>
      </div>
      <div class="bc-search-suggestion__list">
        <div class="bc-search-suggestion__item">
          <span class="bc-search-suggestion__item-icon">
            <Icon name="photo" />
          </span>
          <span class="bc-search-suggestion__item-label">Event</span>
        </div>
        <div class="bc-search-suggestion__item">
          <span class="bc-search-suggestion__item-icon">
            <Icon name="photo" />
          </span>
          <span class="bc-search-suggestion__item-label">Event</span>
        </div>
        <div class="bc-search-suggestion__item">
          <span class="bc-search-suggestion__item-icon">
            <Icon name="photo" />
          </span>
          <span class="bc-search-suggestion__item-label">Event</span>
        </div>
      </div>
    </div>
    <div class="bc-search-suggestion__group">
      <div class="bc-search-suggestion__header">
        <span class="bc-search-suggestion__header-icon">
          <Icon name="package" />
        </span>
        <span class="bc-search-suggestion__header-label">Folder</span>
      </div>
      <div class="bc-search-suggestion__list">
        <div class="bc-search-suggestion__item">
          <span class="bc-search-suggestion__item-icon">
            <Icon name="package" />
          </span>
          <span class="bc-search-suggestion__item-label">Event folders</span>
        </div>
        <div class="bc-search-suggestion__item">
          <span class="bc-search-suggestion__item-icon">
            <Icon name="package" />
          </span>
          <span class="bc-search-suggestion__item-label">Event folders</span>
        </div>
        <div class="bc-search-suggestion__item">
          <span class="bc-search-suggestion__item-icon">
            <Icon name="package" />
          </span>
          <span class="bc-search-suggestion__item-label">Event folders</span>
        </div>
      </div>
    </div>
    <div class="bc-search-suggestion__group">
      <div class="bc-search-suggestion__header">
        <span class="bc-search-suggestion__header-icon">
          <Icon name="document" />
        </span>
        <span class="bc-search-suggestion__header-label">File</span>
      </div>
      <div class="bc-search-suggestion__list">
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
export default {
  name: 'bc-search-suggestion',
  data () {
    return {
    }
  },
  components: {
    Icon: () => import(/* webpackChunkName: "Icon" */ '@/components/Icon/Icon.vue')
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
  transition: all 0.3s ease;
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
    padding: 0.5rem 1rem 1rem;
  }
  &__item {
    padding: 0.25rem 0;
    display: flex;
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
