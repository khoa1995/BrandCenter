<template>
  <section class='bc-section'>
    <div class='bc-section__heading' v-show='title'>
      <div class='bc-section__heading-label'>{{ title }}</div>
    </div>
    <div class='bc-section__content'>
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'bc-section',
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';

.bc-section {
  &:not(:last-child) {
    margin-bottom: 3rem;
  }
  &__heading {
    margin-bottom: 1.875rem;
    &-label {
      color: $color-main;
      font-weight: 700;
      font-size: 2.1875rem;
      @media screen and (max-width: $iPhone8-landscape) {
        font-size: 2rem;
      }
    }
  }
  &__content {
  }
}
</style>
