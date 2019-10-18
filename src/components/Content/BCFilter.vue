<template>
  <div :class="filterClass">
    <div class="bc-title pull-left" v-if="isShowTitle">Discover {{ seletedBrandName }}'s content</div>
    <div class="bc-filter__button clickable" @click="handleClickButton">
      <Icon class="bc-filter__button-icon" name="filter" />
      <span class="bc-filter__button-label">Filters</span>
    </div>
    <!-- <LayoutSwitch /> -->
    <div class="bc-filter__content">
      <BCFilterSelect :group="group" v-for="group in filterGroups" :key="group.id" @onSelectGroup="handleSelectGroup" @onSelectItem="handleSelectItem" @onClickOutside="handleClickOutsideGroup" />
    </div>
  </div>
</template>

<script>
import { filterGroups } from '@/fakeData'
import { mapGetters } from 'vuex'

export default {
  name: 'bc-filter',
  components: {
    Icon: () => import(/* webpackChunkName: "Icon" */ '@/components/Icon/Icon.vue'),
    // LayoutSwitch: () => import(/* webpackChunkName: "LayoutSwitch" */ './LayoutSwitch.vue'),
    BCFilterSelect: () => import(/* webpackChunkName: "BCFilterSelect" */ './BCFilterSelect.vue')
  },
  props: {
    isShowTitle: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      filterGroups,
      isOpen: false
    }
  },
  computed: {
    ...mapGetters({
      seletedBrandName: 'brand/selectedBrandName'
    }),
    filterClass () {
      return {
        'bc-filter': true,
        'bc-filter--open': this.isOpen
      }
    }
  },
  methods: {
    handleClickButton () {
      // Toggle state
      this.isOpen = !this.isOpen
      // Collapse all dropdown
      this.filterGroups.forEach(group => {
        group.isDropdown = false
      })
    },
    handleSelectGroup (groupId) {
      let selectedGroup = this.filterGroups.find(g => g.id === groupId)
      selectedGroup.isDropdown = !selectedGroup.isDropdown
    },
    handleSelectItem (groupId, itemId) {
      let selectedGroup = this.filterGroups.find(g => g.id === groupId)
      let selectedItem = selectedGroup.filters.find(x => x.id === itemId)
      selectedItem.isSelected = !selectedItem.isSelected
    },
    handleClickOutsideGroup (groupId) {
      let selectedGroup = this.filterGroups.find(g => g.id === groupId)
      selectedGroup.isDropdown = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';

.bc-title {
  font-weight: 700;
  font-size: 2.5rem;
  color: $color-main;
  padding-right: 2rem;
  @media screen and (max-width: $iPhone8-landscape) {
    font-size: 2rem;
    flex: 1 0 100%;
    padding-right: 0;
    margin-bottom: 1rem;
  }
}

.bc-filter {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 2rem;
  &--open {
    .bc-filter {
      &__button {
        border-color: transparent;
        background-color: adjust-color($color-mantu, $alpha: -0.8);
      }
      &__content {
        opacity: 1;
        height: auto;
        margin: 3.5rem 0;
        overflow: visible;
        @media screen and (max-width: $width-HD) {
          margin: 2.5rem 0;
        }
      }
    }
  }
  &__button {
    display: inline-flex;
    align-items: center;
    font-weight: 500;
    font-size: 0.875rem;
    padding: 0.625rem 1.5rem;
    border-radius: 0.5rem;
    border: 0.0625rem solid $color-border;
    transition: all 0.3s ease;
    &:hover {
      color: $color-mantu;
      border-color: transparent;
      background-color: adjust-color($color-mantu, $alpha: -0.8);
    }
    &-icon {
      color: $color-main;
      transition: all 0.3s ease;
    }
    &-label {
      padding-left: 0.5rem;
    }
  }
  &__content {
    flex: 1 0 100%;
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2.25rem;
    margin: 0;
    opacity: 0;
    height: 0;
    overflow: hidden;
    transition: all 0.3s ease;
    @media screen and (max-width: $height-iPad) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: $iPhone5-landscape) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
