<template>
  <PageCard class="home">
    <template v-slot:title>Home</template>
    <template v-slot:main>
      <img alt="Vue logo" src="../assets/logo.png">
      <h1>The US Government and AI</h1>
      <p>How will AI influence the US government?</p>
      <p>To learn more, explore this website with the sidebar on the left.</p>
    </template>
  </PageCard>
</template>

<script>
  import PageCard from '@/components/PageCard.vue'

  export default {
    name: 'HomeView',
    components: {
      PageCard
    }
  }
</script>
<style>
  .home {
    text-align: center;
  }
</style>
