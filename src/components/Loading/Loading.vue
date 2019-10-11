<template>
  <div class="bc-loading" @click="test">
    <b-spinner variant="primary"></b-spinner>
    <span class="bc-loading__message"></span>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { MAKE_TOAST } from '@/store/action-types'

export default {
  name: 'bc-loading',
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      message: state => state.toast.title
    })
  },
  methods: {
    ...mapActions({
      _makeToast: `toast/${MAKE_TOAST}`
    }),
    test () {
      if (this.message) {
        this._makeToast({
          title: this.message,
          variant: 'danger'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './../../assets/scss/base/variables';

.bc-loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $color-white;
  flex-direction: column;
  z-index: $z-index-modal;
  &__message {
    margin-top: 1rem;
    color: $color-red;
    font-size: 2rem;
  }
}
</style>
