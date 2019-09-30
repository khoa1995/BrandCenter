<template>
  <div class='bc-switch-layout clickable' @click='handleClickSwitchLayout'>
    <Icon :name='iconName' />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { UPDATE_CONTENT_LAYOUT } from '@/store/action-types'

export default {
  name: 'bc-switch-layout',
  components: {
    Icon: () => import(/* webpackChunkName: "Icon" */ '@/components/Icon/Icon.vue')
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      contentLayout: state => state.config.contentLayout
    }),
    iconName () {
      return this.contentLayout === 'grid' ? 'list' : 'grid'
    }
  },
  methods: {
    ...mapActions({
      _updateContentLayout: `config/${UPDATE_CONTENT_LAYOUT}`
    }),
    handleClickSwitchLayout () {
      if (this.contentLayout === 'grid') {
        this._updateContentLayout('list')
      } else {
        this._updateContentLayout('grid')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';

.bc-switch-layout {
  min-width: 1.75rem;
  text-align: center;
  color: $color-main;
  margin-left: 1.875rem;
}
</style>
