<template>
  <div :class="{ 'bc-filter__group': true, 'bc-filter__group--dropdown': group.isDropdown }" :id="`bc-filter__group-item--${group.id}`">
    <div class="bc-filter__group-label">{{ group.label }}</div>
    <div class="bc-filter__group-select clickable" @click="handleClickDropdown">
      <span class="bc-filter__group-select-text">{{ group | filterSelected }}</span>
    </div>
    <div class="bc-filter__group-list-wrapper">
      <div class="bc-filter__group-list">
        <div :class="{ 'bc-filter__group-item': true, 'clickable': true, 'bc-filter__group-item--selected': item.isSelected }" v-for="item in group.filters" :key="item.id" @click="handleClickItem(item.id)">
          <div class="bc-filter__group-item-checkbox"></div>
          <span class="bc-filter__group-item-label">{{ item.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bc-filter-select',
  props: {
    group: {
      type: Object,
      require: true
    }
  },
  data () {
    return {
    }
  },
  filters: {
    filterSelected (group) {
      let selectedItems = group.filters.filter(x => x.isSelected)
      if (selectedItems.length === 0) {
        return group.placeholder
      } else {
        return selectedItems.map(x => x.label).join(', ')
      }
    }
  },
  methods: {
    handleClickDropdown () {
      this.$emit('onSelectGroup', this.group.id)
    },
    handleClickItem (itemId) {
      this.$emit('onSelectItem', this.group.id, itemId)
    },
    handleClickOutside (event) {
      if (typeof event.target.className === 'string') {
        if (!this.isBelongToComp(event)) {
          this.$emit('onClickOutside', this.group.id)
        }
      }
    },
    isBelongToComp (event) {
      let $root = event.target.closest('.bc-filter__group')
      if ($root) {
        return $root.getAttribute('id') === this.$el.getAttribute('id')
      } else {
        return false
      }
    }
  },
  mounted () {
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

.bc-filter {
  &__group {
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    &--dropdown {
      .bc-filter__group {
        &-select {
          border-radius: 0.5rem 0.5rem 0 0;
        }
        &-list {
          &-wrapper {
            opacity: 1;
            visibility: visible;
            max-height: 13.5rem;
          }
        }
      }
    }
    &-label {
      font-weight: 700;
      font-size: 0.875rem;
      color: $color-sub-text;
    }
    &-select {
      min-height: 2.75rem;
      margin-top: 0.625rem;
      border-radius: 0.5rem;
      position: relative;
      padding: 0.75rem 2rem 0.75rem 1.25rem;
      background-color: $color-white;
      &:before {
        position: absolute;
        content: '';
        top: 1.125rem;
        right: 1rem;
        border: 0.375rem solid;
        border-color: $color-text transparent transparent;
      }
      &-text {
        max-width: 22rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
        @media screen and (max-width: $width-fHD-zoom-125) {
          max-width: 21rem;
        }
        @media screen and (max-width: $width-Hi-DPI) {
          max-width: 19rem;
        }
        @media screen and (max-width: $width-HD) {
          max-width: 17rem;
        }
        @media screen and (max-width: $width-MD) {
          max-width: 15rem;
        }
      }
    }
    &-list {
      &-wrapper {
        position: absolute;
        z-index: $z-index-dropdown;
        top: 100%;
        left: 0;
        width: 100%;
        opacity: 0;
        visibility: hidden;
        max-height: 0;
        overflow: auto;
        border-radius: 0 0 0.5rem 0.5rem;
        background-color: $color-white;
        box-shadow: 0 0.25rem 0.375rem adjust-color($color-black, $alpha: -0.7);
        transition: all 0.3s ease;
      }
    }
    &-item {
      padding: 0.5rem 1.25rem;
      display: flex;
      align-items: center;
      transition: all 0.3s ease;
      &:hover {
        background-color: adjust-color($color-mantu , $alpha: -0.8);
      }
      &--selected {
        color: $color-white;
        background-color: $color-mantu;
        &:hover {
          color: $color-white;
          background-color: $color-mantu;
        }
        .bc-filter {
          &__group {
            &-item {
              &-checkbox {
                border-color: $color-white;
                &:before {
                  opacity: 1;
                }
              }
            }
          }
        }
      }
      &-checkbox {
        width: 1rem;
        height: 1rem;
        border-radius: 0.25rem;
        border: 0.125rem solid $color-btn-border;
        position: relative;
        &:before {
          position: absolute;
          content: '';
          top: 0.0625rem;
          left: 0.0625rem;
          width: 0.75rem;
          opacity: 0;
          height: 0.375rem;
          border: 0.125rem solid;
          transform: rotate(-45deg);
          transition: all 0.3s ease;
          border-color: transparent transparent $color-white $color-white;
        }
      }
      &-label {
        padding-left: 0.5rem;
      }
    }
  }
}
</style>
