<template>
  <div class="bc-list-layout__action">
    <button class="bc-list-layout__button bc-button bc-button--default">
      <Icon class="bc-button__icon" name="add-to-download" />
    </button>
    <button class="bc-list-layout__button bc-button bc-button--box-shadow">
      <Icon class="bc-button__icon" name="download" />
    </button>
    <!--more action buttons-->
    <b-dropdown no-caret v-show="!isInPreview" v-if="!isInDetail">
      <template slot="button-content" v-if="!isInDetail">
        <Icon class="bc-button__icon" name="more" />
      </template>
      <b-dropdown-item>Copy link</b-dropdown-item>
      <b-dropdown-item>Share via Email</b-dropdown-item>
    </b-dropdown>
    <!--share button-->
    <b-dropdown right v-show="!isInPreview" v-else-if="isInDetail">
      <template slot="button-content">
        <Icon class="bc-button__icon bc-button__share" name="share" />
        <span class="bc-button__text">Share</span>
      </template>
      <b-dropdown-item>Copy link</b-dropdown-item>
      <b-dropdown-item>Share via Email</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: 'bc-list-action',
  components: {
    Icon: () =>
      import(/* webpackChunkName: "Icon" */ '@/components/Icon/Icon.vue')
  },
  props: {
    isInPreview: {
      type: Boolean,
      default: false
    },
    isInDetail: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./../../assets/scss/base/variables";

.bc-list-layout {
  &__action {
    display: flex;
    justify-content: flex-end;
    /deep/ .dropdown {
      &.show {
        .dropdown-toggle {
          border-color: $color-btn-border;
          background-color: $color-btn-border;
        }
      }
      &-toggle {
        color: $color-text;
        border-radius: 0.5rem;
        border-color: $color-border;
        padding: 0.375rem 0.5625rem;
        background-color: $color-border;
        &:hover {
          border-color: $color-btn-border;
          background-color: $color-btn-border;
        }
        &:not(:disabled):not(.disabled):active:focus {
          box-shadow: none;
        }
        &:not(:disabled):not(.disabled):active {
          color: $color-text;
          border-color: $color-btn-border;
          background-color: $color-btn-border;
        }
      }
      &-menu {
        box-shadow: 0 0.25rem 0.75rem 0
          adjust-color($color-black, $alpha: -0.85);
      }
      &-item {
        &:hover,
        &:focus {
          background-color: $color-border;
        }
      }
    }
  }
}
</style>
