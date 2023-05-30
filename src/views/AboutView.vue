<template>
  <div class="about">
    <img alt="Vue logo" src="../assets/logo.png">
    <HomePage msg="About Page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from '@/components/HomePage.vue'

export default {
  name: 'HomeView',
  components: {
    HomePage
  }
}
</script>