<template>
  <div class="home">
    <h1>The US Government and AI</h1>
    <p>How will AI influence the US government?</p>
    <RouterLink to="/how-ai-works">How AI Works</RouterLink>
  </div>
</template>

<script>
  export default {
    name: 'HomePage'
  }
</script>
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
