<template>
  <span class='bc-type-icon'>
    <IconPackage />
  </span>
</template>

<script>
export default {
  name: 'bc-icon-type-package',
  components: {
    IconPackage: () => import(/* webpackChunkName: "Icon" */ './IconPackage')
  }
}
</script>

<style lang="scss" scoped>
@import './../../../assets/scss/base/variables';

.bc-type-icon {
  background-color: $color-package;
}
</style>
