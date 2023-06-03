<template>
  <PageCard>
    <template v-slot:title>Home</template>
    <template v-slot:main>
      <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <h1>The US Government and AI</h1>
        <h3>How will AI influence the US government?</h3>
        <h3>To learn more, explore this website using the sidebar on the left.</h3>
      </div>
      <p>To assist in my research on this topic I identified the following 5 research areas: how AI works, AI ethics, the present use of AI, the impact of AI on employment, and the opportunities and challenges of AI. Then, for each research area, I identified a research question that I could use to assist in my research.</p>
      <v-list>
        <v-list-item title="How AI works" subtitle="At a high level, how do AI systems like ChatGPT work?"/>
        <v-list-item title="AI ethics" subtitle="What ethical concerns does AI pose when being used by the government?"/>
        <v-list-item title="The Present use of AI" subtitle="How have AI systems been used by public and private organizations so far?"/>
        <v-list-item title="The Impact of AI on Employment" subtitle="How have AI systems been used by public and private organizations so far?"/>
        <v-list-item title="The Opportunities and Challenges of AI" subtitle="What opportunities and challenges do AI systems bring to the government bureaucracy?"/>
      </v-list>
      <p>My research documents can be found <a href="https://drive.google.com/drive/folders/1056YVDs8vVg3iu_WKy-rTZVaKr9miUx2?usp=sharing">here</a> and the source code and documentation of this website is in <a href="https://github.com/AlexJFDev/Government-Project">this git repo</a>.</p>
    </template>
  </PageCard>
</template>

<script>
  import PageCard from '@/components/PageCard.vue'

  export default {
    name: 'HomeView',
    components: {
      PageCard
    },
    mounted() {
      if (window.innerWidth < 650) {
        alert("This website may not display correctly on smaller screens")
      }
    }
  }
</script>
<style>
  .home {
    text-align: center;
  }
</style>
