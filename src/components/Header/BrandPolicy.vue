<template>
  <div class="bc-brand-policy pull-right">
    <a class="bc-button bc-button--secondary" :href="brandPolicyHref" target="_blank">Brand Policy</a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'bc-brand-policy',
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters({
      selectedBrand: 'brand/selectedBrand'
    }),
    brandPolicyHref () {
      return this.selectedBrand ? this.selectedBrand.PolicyFileDownloadUrl : ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';

.bc-brand-policy {
}
</style>
