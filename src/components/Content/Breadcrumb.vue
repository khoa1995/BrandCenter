<template>
  <div class="bc-breadcrumb">
    <div class="bc-breadcrumb__branches">{{ selectedBrandName }}</div>
    <div class="bc-breadcrumb__direction">
      <Icon name="arrow-right" />
    </div>
    <div class="bc-breadcrumb__name-choosen">{{ currentPage }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'bc-breadcrumb',
  components: {
    Icon: () => import(/* webpackChunkName: "Icon" */ '@/components/Icon/Icon.vue')
  },
  props: {
    currentPage: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      selectedBrandName: 'brand/selectedBrandName'
    })
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
