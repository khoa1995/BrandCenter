<template>
  <div class="bc-search-bar">
    <span class="bc-search-bar__icon">
      <Icon name="search"/>
    </span>
    <input class="bc-search-bar__input" placeholder="Search by Name, Type, Keyword ..."/>
    <SearchSuggestion />
  </div>
</template>

<script>
export default {
  name: 'bc-search-bar',
  components: {
    Icon: () => import(/* webpackChunkName: "Icon" */ '@/components/Icon/Icon.vue'),
    SearchSuggestion: () => import(/* webpackChunkName: "SearchSuggestion" */ './SearchSuggestion')
  }
}
</script>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';

.bc-search-bar {
  display: flex;
  position: relative;
  flex: 1 0 auto;
  margin-right: 4rem;
  @media screen and (max-width: $iPhoneXSMax-landscape) {
    padding-right: 2rem;
  }
  @media screen and (max-width: $iPhoneXSMax-landscape) {
    // flex-basis: 100%;
    padding-right: 0;
    padding-bottom: 1rem;
  }
  &__icon {
    padding: 0.6rem;
    border-radius: 50%;
    color: $color-white;
    background-color: $color-mantu;
  }
  &__input {
    width: 100%;
    border: 0;
    border-bottom: 0.0625rem solid transparent;
    padding: 0.125rem 1.25rem;
    background-color: transparent;
    @media screen and (max-width: $iPhone5-portrait) {
      padding: 0 1rem;
    }
    &::placeholder {
      font-weight: 500;
      color: $color-btn-border;
      @media screen and (max-width: $iPhone5-portrait) {
        font-size: 0.825rem;
      }
    }
    &:focus {
      border-bottom-color: $color-mantu;
      /deep/ + .bc-search-suggestion {
        opacity: 1;
        visibility: visible;
      }
    }
  }
}
</style>
