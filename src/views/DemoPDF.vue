<template>
  <div class="bc-pdf">
    <pdf
      v-for="idx in numPages"
      :key="idx"
      :src="fileUrl"
      :page="idx" />
  </div>
</template>

<script>
import pdf from 'vue-pdf'
const fileUrl = pdf.createLoadingTask('https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf')

export default {
  name: 'demo-pdf',
  components: {
    pdf
  },
  data () {
    return {
      fileUrl,
      numPages: undefined
    }
  },
  mounted () {
    this.fileUrl.then(pdf => {
      this.numPages = pdf.numPages
    })
  }
}
</script>

<style lang="scss" scoped>
.bc-pdf {
  padding: 0 5rem 3rem;
}
</style>
