<template>
  <div class="text--uppercase">{{ title }}</div>
</template>
<script>
export default {
  name: 'text--uppercase',
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';

.text--uppercase {
  font-size: 1rem;
  text-transform: uppercase;
  color: $color-sub-text;
}
</style>
