<template>
  <div class="bc-page bc-search">
    <Breadcrumb currentPage="Search" />
    <BCCriteria />
    <BCFilter :isShowTitle="false"/>
    <div class="bc-search__control">
      <div class="bc-search__per-page">
        <span class="bc-search__per-page-label">Items per page</span>
        <b-form-select
          class="bc-search__per-page-select"
          v-model="rowsPerPage"
          :options="perPageOptions"
          @change="handlePerPageChange" />
      </div>
      <b-pagination
        class="bc-pagination"
        v-model="selectedPage"
        :per-page="rowsPerPage"
        :total-rows="totalSearchedFiles"
        @change="handlePaginationChange" />
    </div>
    <template v-if="contentLayout === 'grid'" >
      <GridLayout :contentData="searchedFiles.Files"/>
    </template>
    <template v-else>
      <ListLayout :contentData="searchedFiles.Files" />
    </template>
  </div>
</template>

<script>
import { files } from '@/fakeData'
import { mapState, mapGetters, mapActions } from 'vuex'
import {
  SEARCH_FILES
} from '@/store/action-types'
import { isEmpty } from 'lodash'

export default {
  name: 'bc-search',
  components: {
    Breadcrumb: () => import(/* webpackChunkName: "Breadcrumb" */ '@/components/Content/Breadcrumb'),
    BCCriteria: () => import(/* webpackChunkName: "BCCriteria" */ '@/components/Content/BCCriteria.vue'),
    BCFilter: () => import(/* webpackChunkName: "BCFilter" */ '@/components/Content/BCFilter'),
    GridLayout: () => import(/* webpackChunkName: "GridLayout" */ '@/components/Content/GridLayout'),
    ListLayout: () => import(/* webpackChunkName: "Listlayout" */ '@/components/Content/ListLayout')
  },
  data () {
    return {
      files,
      rowsPerPage: 8,
      selectedPage: 1,
      perPageOptions: [
        {
          value: 8,
          text: 8
        },
        {
          value: 12,
          text: 12
        },
        {
          value: 16,
          text: 16
        }
      ]
    }
  },
  watch: {
    criteriaCategory (value) {
      // Search files when change selected category
      this._searchFiles({
        Page: this.selectedPage,
        RowsPerPage: this.rowsPerPage,
        BrandCategoryId: this.selectedBrandId,
        CategoryId: value.Id,
        Query: this.searchQuery
      })
    },
    searchQuery (value) {
      // Search files when change searchQuery
      this._searchFiles({
        Page: this.selectedPage,
        RowsPerPage: this.rowsPerPage,
        BrandCategoryId: this.selectedBrandId,
        CategoryId: !isEmpty(this.criteriaCategory) ? this.criteriaCategory.categoryId : '',
        Query: this.searchQuery
      })
    }
  },
  computed: {
    ...mapState({
      contentLayout: state => state.config.contentLayout,
      searchedFiles: state => state.files.searchedFiles,
      criteriaCategory: state => state.criteria.fromCategory,
      searchQuery: state => state.criteria.fromSearch.Label
    }),
    ...mapGetters({
      criteriaList: 'criteria/criteriaList',
      selectedBrandId: 'brand/selectedBrandId'
    }),
    totalSearchedFiles () {
      return this.searchedFiles ? this.searchedFiles.Total : 1
    },
    numberOfPages () {
      return Math.ceil(this.totalSearchedFiles / this.rowsPerPage)
    }
  },
  methods: {
    ...mapActions({
      _searchFiles: `files/${SEARCH_FILES}`
    }),
    searchFiles (page = 0, perPage = 0, searchQuery = '') {
      let { categoryId } = this.$route.query
      this._searchFiles({
        Page: page !== 0 ? page : this.selectedPage,
        RowsPerPage: perPage !== 0 ? perPage : this.rowsPerPage,
        BrandCategoryId: this.selectedBrandId,
        CategoryId: categoryId,
        Query: searchQuery !== '' ? searchQuery : this.searchQuery
      })
    },
    handlePaginationChange (page) {
      // Request new page if page !== selectedPage
      if (page !== this.selectedPage) {
        this.searchFiles(page)
      }
    },
    handlePerPageChange (perPage) {
      this.searchFiles(0, perPage)
    }
  },
  mounted () {
    // Search file by category id from url
    this.searchFiles()
  }
}
</script>

<style lang="scss" scoped>
@import './../assets/scss/base/variables';

.bc-search {
  &__control {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  &__per-page {
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 1rem;
    margin-right: 1rem;
    &-label {
      margin-right: 0.5rem;
    }
    &-select {
      max-width: 4rem;
      &:focus {
        box-shadow: none;
      }
    }
  }
}
</style>
