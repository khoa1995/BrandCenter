<template>
  <div class="bc-criteria" v-show="criteriaList.length > 0">
    <div class="bc-criteria__item clickable" v-for="(item, idx) in criteriaList" :key="idx" @click="handleRemoveCriteria(item)">
      <span class="bc-criteria__item-close"></span>
      <span class="bc-criteria__item-text">{{ item.Label }}</span>
    </div>
    <div class="bc-criteria__count">
      <span class="bc-criteria__count-number">{{ criteriaList.length }}</span>
      <span class="bc-criteria__count-label">{{ counterLabel }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import {
  UPDATE_CATEGORY_CRITERIA,
  UPDATE_SEARCH_QUERY_CRITERIA
} from '@/store/action-types'

export default {
  name: 'bc-criteria',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      criteriaList: 'criteria/criteriaList'
    }),
    counterLabel () {
      return `item${this.criteriaList.length > 1 ? 's' : ''} found`
    }
  },
  methods: {
    ...mapActions({
      _updateCategoryCriteria: `criteria/${UPDATE_CATEGORY_CRITERIA}`,
      _updateSearchQueryCriteria: `criteria/${UPDATE_SEARCH_QUERY_CRITERIA}`
    }),
    handleRemoveCriteria (item) {
      // If category
      if (item.type === 'category') {
        this._updateCategoryCriteria({})
      }
      // If search query
      if (item.type === 'search-query') {
        this._updateSearchQueryCriteria('')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';

.bc-criteria {
  display: flex;
  margin-top: 0.75rem;
  &__item {
    display: flex;
    align-items: center;
    padding: 0.357rem 1.25rem;
    margin-right: 0.625rem;
    margin-bottom: 0.625rem;
    border-radius: 0.25rem;
    background-color: $color-border;
    transition: all 0.3s ease;
    &-close {
      position: relative;
      top: -0.125rem;
      width: 0.875rem;
      height: 0.875rem;
      &:before {
        top: 50%;
        left: 0;
        transform: rotate(45deg);
      }
      &::after {
        top: 50%;
        left: 0;
        transform: rotate(-45deg);
      }
      &::before,
      &::after {
        position: absolute;
        content: '';
        width: 1rem;
        height: 0.125rem;
        border-radius: 0.25rem;
        background-color: $color-black;
        transition: all 0.5s ease;
      }
    }
    &-text {
      font-size: 1rem;
      margin-left: 0.625rem;
    }
    &:hover {
      color: $color-white;
      background-color: $color-red;
      .bc-criteria__item-close {
        &::before,
        &::after {
          transform: none;
          background-color: $color-white;
        }
      }
    }
  }
  &__count {
    display: flex;
    align-items: center;
    height: 2rem;
    &-number {
      border-radius: 0.25rem;
      padding: 0.25rem 1rem;
      background-color: $color-white;
    }
    &-label {
      margin-left: 0.375rem;
    }
  }
}
</style>
