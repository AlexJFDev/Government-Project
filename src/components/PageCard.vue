<template>
  <v-card>
    <v-layout>
      <SideBar/>
      <v-app-bar>
        <template v-slot:title>
          <slot name="title"></slot>
        </template>
      </v-app-bar>
      <v-main style="min-height: 300px;">
        <slot name="main"></slot>
      </v-main>
    </v-layout>
  </v-card>
</template>
<script>
  import SideBar from '@/components/SideBar.vue'

  export default {
    name: 'PageCard',
    components: {
      SideBar
    }
  }
</script>
<style>
  .v-app-bar {
    text-align: center;
  }
</style>