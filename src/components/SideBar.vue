<template>
    <v-card>
      <v-layout>
        <v-navigation-drawer
          expand-on-hover
          rail
        >
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-home" title="Home" to="/"></v-list-item>
            <v-list-item prepend-icon="mdi-hammer-wrench" title="How AI Works" to="/how-ai-works"></v-list-item>
            <v-list-item prepend-icon="mdi-head-dots-horizontal" title="AI Ethics" to="/ai-ethics"></v-list-item>
            <v-list-item prepend-icon="mdi-clock-outline" title="The Current Impact of AI" to="/the-current-impact-of-ai"></v-list-item>
            <v-list-item prepend-icon="mdi-clock-start" title="The Future Impact of AI" to="/the-future-impact-of-ai"></v-list-item>
            <v-list-item prepend-icon="mdi-space-station" title="The Opportunities and Challenges of AI" to="/the-opportunities-and-challenges-of-ai"></v-list-item>
            <v-list-item prepend-icon="mdi-notebook" title="Conclusions" to="/conclusions"></v-list-item>
            <v-list-item prepend-icon="mdi-book" title="Citations" to="/citations"></v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-layout>
    </v-card>
</template>
<script>
    export default {
        name: 'SideBar'
    }
</script>