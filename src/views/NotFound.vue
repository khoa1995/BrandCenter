<template>
  <div class="bc-notfound">Page not found</div>
</template>

<script>
export default {
  name: 'notfound',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../assets/scss/base/variables';

.bc-notfound {
  display: flex;
  padding: 12rem 2rem;
  min-height: calc(100vh - 104px);
  font-size: 4rem;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
