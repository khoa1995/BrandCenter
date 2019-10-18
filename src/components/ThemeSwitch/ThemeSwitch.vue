<template>
  <div class='bc-theme-switch'>
    <slot></slot>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import tinycolor from 'tinycolor2'

export default {
  name: 'bc-theme-switch',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      selectedBrandColor: 'brand/selectedBrandColor'
    }),
    brandColorStyle () {
      let color = tinycolor(this.selectedBrandColor)
      return `
        /* Scrollbar */
        ::-webkit-scrollbar-thumb {
          background-color: ${color.setAlpha(0.5).toString()};
        }
        ::-webkit-scrollbar-thumb:hover {
          background-color: ${color.setAlpha(0.7).toString()};;
        }

        /* Search */
        .bc-theme-switch .bc-search-bar__icon {
          background-color: ${this.selectedBrandColor};
        }
        .bc-theme-switch .bc-search-bar__input:focus,
        .bc-theme-switch .bc-search-bar__input--active {
          border-bottom-color: ${this.selectedBrandColor};
        }

        /* Suggestion */
        .bc-theme-switch .bc-search-suggestion__item:hover {
          color: ${this.selectedBrandColor};
          background-color: ${color.setAlpha(0.2).toString()};
        }

        /* Button */
        .bc-theme-switch .bc-button--default {
          background-color: ${this.selectedBrandColor};
        }
        .bc-theme-switch .bc-button--secondary {
          color: ${this.selectedBrandColor};
          background-color: ${color.setAlpha(0.2).toString()};
        }
        .bc-theme-switch .bc-button--secondary:hover {
          color: #fff;
          background-color: ${this.selectedBrandColor};
        }

        /* Sidebar */
        .bc-theme-switch .bc-sidebar__hamburger {
          background-color: ${this.selectedBrandColor};
        }

        /* Main Menu */
        .bc-theme-switch .bc-main-menu__item:hover {
          color: ${this.selectedBrandColor};
          background-color: ${color.setAlpha(0.2).toString()};
        }
        .bc-theme-switch .bc-main-menu__item:hover .bc-main-menu__item-icon {
          background-color: ${this.selectedBrandColor};
        }

        /* Category */
        .bc-theme-switch .bc-category__item:hover .bc-category__item-link,
        .bc-theme-switch .bc-category__item--dropdown .bc-category__item-link,
        .bc-theme-switch .bc-category__sub-link:hover,
        .bc-theme-switch .bc-category__sub-item--dropdown > .bc-category__sub-link {
          color: ${this.selectedBrandColor};
          background-color: ${color.setAlpha(0.2).toString()};
        }
        .bc-theme-switch .bc-category__item:hover .bc-category__item-icon,
        .bc-theme-switch .bc-category__item--dropdown .bc-category__item-icon {
          background-color: ${this.selectedBrandColor};
        }

        /* Content Request */
        .bc-theme-switch .bc-content-request {
          background-color: ${this.selectedBrandColor};
        }
        .bc-theme-switch .bc-content-request__expand-button:hover {
          color: ${this.selectedBrandColor};
        }

        /* Filter */
        .bc-theme-switch .bc-filter__button:hover {
          color: ${this.selectedBrandColor};
          background-color: ${color.setAlpha(0.2).toString()};
        }
        .bc-theme-switch .bc-filter__button:hover .bc-filter__button-icon {
          color: ${this.selectedBrandColor};
        }
        .bc-theme-switch .bc-filter--open .bc-filter__button {
          color: ${this.selectedBrandColor};
          background-color: ${color.setAlpha(0.2).toString()};
        }
        .bc-theme-switch .bc-filter--open .bc-filter__button-icon {
          color: ${this.selectedBrandColor};
        }
        .bc-theme-switch .bc-filter__group-item:hover {
          background-color: ${color.setAlpha(0.2).toString()};
        }
        .bc-theme-switch .bc-filter__group-item--selected {
          background-color: ${this.selectedBrandColor};
        }
        .bc-theme-switch .bc-filter__group-item--selected:hover {
          background-color: ${this.selectedBrandColor};
        }

        /* Download Box */
        .bc-theme-switch .bc-download-box__item:hover {
          border-color: ${this.selectedBrandColor};
        }

        /* Grid Layout */
        .bc-theme-switch .bc-grid-layout__item-title:hover {
          color: ${this.selectedBrandColor};
        }
      `
    }
  },
  watch: {
    selectedBrandColor () {
      this._injectStyle()
    }
  },
  mounted () {
    this._injectStyle()
  },
  methods: {
    _injectStyle () {
      let el = document.getElementById('themeSwitch')
      if (el && this.selectedBrandColor) {
        el.innerHTML = this.brandColorStyle
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
