<template>
  <div class="bc-list-layout">
    <b-table
      show-empty
      responsive
      borderless
      tbody-class="bc-list-layout__body"
      tbody-tr-class="bc-list-layout__row"
      :items="contentData"
      :fields="tableFields"
      :busy="isBusy">
      <div slot="table-busy" class="text-center text-danger my-2">
        <b-spinner class="align-middle"></b-spinner>
      </div>
      <template slot="name" slot-scope="data">
        <span class="bc-list-layout__file">
          <span class="bc-list-layout__file-type">
            <Icon :name="`type-${data.item.type}`" />
          </span>
          <span class="bc-list-layout__file-info">
            <span class="bc-list-layout__file-title">{{ data.item.title }}</span>
            <span class="bc-list-layout__file-size">{{ data.item.size }}</span>
          </span>
        </span>
      </template>
      <template slot="category" slot-scope="data">
        <span>{{ data.item.category }}</span>
      </template>
      <template slot="brand" slot-scope="data">
        <span>{{ data.item.brand }}</span>
      </template>
      <template slot="type" slot-scope="data">
        <span>{{ data.item.typeLabel }}</span>
      </template>
      <template slot="publishedDate" slot-scope="data">
        <span>{{ data.item.publishedDate }}</span>
      </template>
      <template slot="action">
        <ListAction />
      </template>
    </b-table>
  </div>
</template>

<script>

export default {
  name: 'bc-list-layout',
  components: {
    Icon: () => import(/* webpackChunkName: "Icon" */ '@/components/Icon/Icon.vue'),
    ListAction: () => import(/* webpackChunkName: "ListAction" */ './ListAction')
  },
  props: {
    contentData: {
      type: Array,
      require: true
    }
  },
  data () {
    return {
      isBusy: false,
      tableFields: [
        {
          key: 'name',
          label: 'Name',
          class: 'bc-list-layout__column bc-list-layout__column--name',
          tdClass: 'bc-list-layout__column--tbody',
          sortable: false
        },
        {
          key: 'category',
          label: 'Category',
          class: 'bc-list-layout__column bc-list-layout__column--category',
          tdClass: 'bc-list-layout__column--tbody',
          sortable: false
        },
        {
          key: 'brand',
          label: 'Brand',
          class: 'bc-list-layout__column bc-list-layout__column--brand',
          tdClass: 'bc-list-layout__column--tbody',
          sortable: false
        },
        {
          key: 'type',
          label: 'Type',
          class: 'bc-list-layout__column bc-list-layout__column--type',
          tdClass: 'bc-list-layout__column--tbody',
          sortable: false
        },
        {
          key: 'publishedDate',
          label: 'Published',
          class: 'bc-list-layout__column bc-list-layout__column--published',
          tdClass: 'bc-list-layout__column--tbody',
          sortable: false
        },
        {
          key: 'action',
          label: '',
          class: 'bc-list-layout__column bc-list-layout__column--action',
          tdClass: 'bc-list-layout__column--tbody',
          sortable: false
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';

.bc-list-layout {
  /deep/ thead tr {
    border-left: 0.0625rem solid transparent;
    border-right: 0.0625rem solid transparent;
  }
}

/deep/ .bc-list-layout {
  &__row {
    background-color: $color-white;
    border: 0.0625rem solid $color-border;
    transition: all 0.3s ease;
    &:hover {
      background-color: adjust-color($color-black, $lightness: 95%);
    }
  }
  &__column {
    padding: 1.5rem;
    color: $color-sub-text;
    &--tbody {
      color: $color-text;
    }
    &--name {
      min-width: 25rem;
      padding-left: 3rem
    }
    &--category {
      min-width: 8rem;
    }
    &--brand {
      min-width: 10rem;
    }
    &--type {
      min-width: 8rem;
    }
    &--published {
      min-width: 10rem;
    }
    &--action {
      min-width: 12.5rem;
    }
  }
  &__file {
    display: flex;
    &-info {
      padding-left: 1.5rem;
      display: flex;
      flex-direction: column;
    }
    &-title {
      color: $color-text;
      font-weight: 700;
      font-size: 1.125rem;
      overflow: hidden;
      height: calc(1.125rem * #{$line-height} * 2);
    }
    &-size {
      font-size: 1rem;
      margin-top: 0.25rem;
    }
  }
}
</style>
