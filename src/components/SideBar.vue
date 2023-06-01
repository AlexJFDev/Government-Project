<template>
  <v-navigation-drawer permanent>
    <v-list>
      <v-list-item prepend-icon="mdi-home" title="Home" to="/"></v-list-item>
      <v-list-item prepend-icon="mdi-hammer-wrench" title="How AI Works" to="/how-ai-works"></v-list-item>
      <v-list-item prepend-icon="mdi-head-dots-horizontal" title="AI Ethics" to="/ai-ethics"></v-list-item>
      <v-list-item prepend-icon="mdi-clock-outline" title="Present Impact" to="/the-present-impact-of-ai"></v-list-item>
      <v-list-item prepend-icon="mdi-account-hard-hat" title="Employment" to="/the-impact-of-ai-on-employment"></v-list-item>
      <v-list-item prepend-icon="mdi-space-station" title="Opportunities and Challenges" to="/the-opportunities-and-challenges-of-ai"></v-list-item>
      <v-list-item prepend-icon="mdi-notebook" title="Conclusions" to="/conclusions"></v-list-item>
      <v-list-item prepend-icon="mdi-book" title="Citations" to="/citations"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
  export default {
    name: 'SideBar'
  }
</script>