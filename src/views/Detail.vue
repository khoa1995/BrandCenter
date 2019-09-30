<template>
  <Section>
    <Detail/>
  </Section>
</template>

<script>
export default {
  name: 'home',
  components: {
    Detail: () => import(/* webpackChunkName: "Detail" */ '@/components/Detail/Detail')
  }
}
</script>
