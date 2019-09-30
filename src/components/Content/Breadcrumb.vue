<template>
  <div class="bc-breadcrumb">
    <div class="bc-breadcrumb__branches">{{ selectedBrand }}</div>
    <div class="bc-breadcrumb__direction">
      <Icon name="arrow-right" />
    </div>
    <div class="bc-breadcrumb__name-choosen">Home</div>

  </div>
</template>

<script>
import { brandList } from '@/fakeData.js'

export default {
  name: 'bc-breadcrumb',
  components: {
    Icon: () => import(/* webpackChunkName: "Icon" */ '@/components/Icon/Icon.vue')
  },
  data () {
    return {
      brandList,
      selectedBrandId: 'mantu'
    }
  },
  computed: {
    selectedBrand () {
      return this.brandList ? this.brandList.find(x => x.id === this.selectedBrandId).label : ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';

.bc-breadcrumb {
  display: flex;
  margin-bottom: 0.25rem;
  &__branches {
    color: $color-sub-text;
  }
  &__name-choosen {
    color: $color-mantu;
  }
  &__direction {
    margin: 0 0.6rem;
    width: 0.8rem;
    color: $color-sub-text;
  }
}
</style>
