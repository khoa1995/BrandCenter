<template>
  <div class='bc-sidebar-footer'>
    <div class='bc-sidebar-footer__link-wrapper'>
      <a class='bc-sidebar-footer__link' :href='link.href' target='_blank' v-for='link in footerLink' :key='link.id'>{{ link.label }}</a>
    </div>
    <div class='bc-sidebar-footer__copyright'>©2019 - Mantu Brandcenter</div>
  </div>
</template>

<script>
export default {
  name: 'bc-sidebar-footer',
  data () {
    return {
      footerLink: [
        {
          id: 'about',
          label: 'About',
          href: 'javascript:void(0)'
        },
        {
          id: 'content-policy',
          label: 'Content Policy',
          href: 'javascript:void(0)'
        },
        {
          id: 'help-feedback',
          label: 'Help & Feebacks',
          href: 'javascript:void(0)'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';

.bc-sidebar-footer {
  padding: 1.25rem 2.5rem;
  @media screen and (max-width: $width-fHD-zoom-125) {
    padding: 1rem 2rem;
  }
  @media screen and (max-width: $width-HD) {
    padding: 0.75rem 1.75rem;
  }
  &__link {
    padding: 0 0.5rem;
    font-weight: 500;
    font-size: 0.875rem;
    color: $color-text;
    &:hover {
      color: $color-main;
    }
    &-wrapper {
      margin: 0 -0.5rem;
    }
  }
  &__copyright {
    padding-top: 0.75rem;
    font-weight: 300;
    font-size: 0.75rem;
    color: $color-sub-text;
  }
}
</style>
