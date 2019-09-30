<template>
  <div class="bc-detail-package">
    <ul class="bc-detail-package__list-wrapper list-unstyled">
      <li><Icon name="download"/><a href="#" class="bc-detail-package__list-item">Logo-mantu-color.png</a></li>
      <li><Icon name="download"/><a href="#" class="bc-detail-package__list-item">Logo-mantu-color.png</a></li>
      <li><Icon name="download"/><a href="#" class="bc-detail-package__list-item">Logo-mantu-color.png</a></li>
      <li><Icon name="download"/><a href="#" class="bc-detail-package__list-item">Logo-mantu-color.png</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'bc-detail-package',
  components: {
    Icon: () => import(/* webpackChunkName: "Icon" */ '@/components/Icon/Icon.vue')
  }
}
</script>

<style lang="scss" scoped>
@import "./../../assets/scss/base/variables";

.bc-detail-package {
  line-height: 2;
  border: 1px solid $color-border;
  &__list {
    &-item {
      padding: .2rem;
      color: $color-black;
      text-decoration: underline;
    }
    &-wrapper {
      margin-bottom: 0;
    }
  }
}
</style>
