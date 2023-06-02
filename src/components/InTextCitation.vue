<template>
  <router-link to="/citations" class="citation">
    {{ number }}
    <v-tooltip
      activator="parent"
    >{{ source }}</v-tooltip>
  </router-link>
</template>
<script>
  export default {
    name: 'InTextCitation',
    props: {
      source: String,
      number: String,
    }
  }
</script>
<style>
  .citation {
    color: #2261a0;
    font-size: small;
    text-decoration: none;
    vertical-align: super;
  }
</style>