<template>
  <div class="bc-page bc-detail">
    <Detail />
  </div>
</template>

<script>
export default {
  name: 'bc-detail',
  components: {
    Detail: () => import(/* webpackChunkName: "Detail" */ '@/components/Detail/Detail')
  }
}
</script>
