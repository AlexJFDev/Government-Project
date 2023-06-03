<template>
  <v-list-item :title="CitationText"/>
</template>
<script>
  export default {
    name: 'BibliographyCitation',
    props: {
      source: String,
      number: String,
    },
    computed: {
      CitationText() {
        return `${this.number}) ${this.source}`
      }
    }
  }
</script>