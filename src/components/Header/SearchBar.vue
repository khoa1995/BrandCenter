<template>
  <div class="bc-search-bar">
    <span class="bc-search-bar__icon">
      <Icon name="search" />
    </span>
    <input
      v-model="searchQuery"
      :class="searchInputClass"
      placeholder="Search by Name, Type, Keyword ..."
      @focus="handleFocus"
      @keydown="handleKeyDown"
      @input="handleInput"/>
    <SearchSuggestion />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import {
  GET_SUGGESTIONS,
  UPDATE_SUGGESTIONS,
  UPDATE_VISIBLE_STATE,
  UPDATE_SEARCH_QUERY_CRITERIA
} from '@/store/action-types'
import { debounce } from 'lodash'

export default {
  name: 'bc-search-bar',
  components: {
    Icon: () => import(/* webpackChunkName: "Icon" */ '@/components/Icon/Icon.vue'),
    SearchSuggestion: () => import(/* webpackChunkName: "SearchSuggestion" */ './SearchSuggestion')
  },
  data () {
    return {
      searchQuery: ''
    }
  },
  computed: {
    ...mapGetters({
      selectedBrandId: 'brand/selectedBrandId'
    }),
    searchInputClass () {
      return {
        'bc-search-bar__input': true,
        'bc-search-bar__input--active': this.searchQuery
      }
    }
  },
  methods: {
    ...mapActions({
      _updateSearchQueryCriteria: `criteria/${UPDATE_SEARCH_QUERY_CRITERIA}`,
      _getSuggestion: `suggestions/${GET_SUGGESTIONS}`,
      _updateVisibleState: `suggestions/${UPDATE_VISIBLE_STATE}`,
      _updateSuggestions: `suggestions/${UPDATE_SUGGESTIONS}`
    }),
    handleFocus () {
      this._updateVisibleState(true)
    },
    handleKeyDown (event) {
      // Press enter to search
      if (event.keyCode === 13) {
        // Update search query criteria
        this._updateSearchQueryCriteria(this.searchQuery)
        // Hide search suggestion
        this._updateVisibleState(false)
      }
      // Press escape
      if (event.keyCode === 27) {
        // Clear search input
        this.searchQuery = ''
        // Clear suggestion list
        this._updateSuggestions([])
      }
    },
    handleInput: debounce(function () {
      if (this.searchQuery.length >= 3) {
        // Get suggestion list
        this._getSuggestion({
          CategoryIds: '',
          BrandIds: this.selectedBrandId,
          Query: this.searchQuery
        })
      } else {
        // Clear suggestion list
        this._updateSuggestions([])
      }
    }, 500),
    getSearchQueryFromUrl () {
      let { searchQuery } = this.$route.query
      if (searchQuery) {
        // Update local searchQuery
        this.searchQuery = searchQuery
        // Get suggestion list
        this._getSuggestion({
          CategoryIds: '',
          BrandIds: this.selectedBrandId,
          Query: this.searchQuery
        })
      }
    }
  },
  mounted () {
    this.getSearchQueryFromUrl()
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
    padding: 0.125rem 1.25rem;
    background-color: transparent;
    border-bottom: 0.0625rem solid transparent;
    @media screen and (max-width: $iPhone5-portrait) {
      padding: 0 1rem;
    }
    &:placeholder {
      font-weight: 500;
      color: $color-btn-border;
      @media screen and (max-width: $iPhone5-portrait) {
        font-size: 0.825rem;
      }
    }
    &:focus {
      border-bottom-color: $color-mantu;
    }
    &--active {
      border-bottom-color: $color-mantu;
    }
  }
}
</style>
