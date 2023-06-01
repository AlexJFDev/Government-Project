<template>
  <div>
    <PageCard>
      <template v-slot:title>How AI Works</template>
      <template v-slot:main>
        <h3>What is AI</h3>
        <p>The term AI refers to a broad range of technologies that are intended to have computers perform complex tasks that humans traditionally performed. This is why AI technology is used to play chess, decide what search results to show you on google, and even have conversations. Each AI is developed for a specific task, this means that any particular AI is really good, maybe even better than humans, at a particular task but falls short when doing anything else. A general AI would be one that is capable of performing a wide range of tasks very well, but currently, no general AI exists.<InTextCitation source="https://github.com/AlexJFDev/Government-Project" number="1"/></p>
        <h3>How does it work</h3>
        <p>All AI take some kind of data as an input and transform the input in some way to generate an output. Additionally, most AI are created through a training process where they start very poor at performing a task and get better.</p>
        <p>ChatGPT, google Bard, DALL-E, and other AI systems which have recently made headlines are examples of generative AI. This means they take a prompt as input and generate a picture, text, audio, or some other form of media based off that prompt. Google Bard and ChatGPT are also large language models <InTextCitation source="https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-generative-ai" number="2"/>. A large language model is like a powerful version of the predictive texting on your phone. They take a take a piece of text, ranging in size from a few characters to several paragraphs, as input and then evaluate what word is most likely to come next. These systems have been trained on very large bodies of text for a significant amount of time and then fine tuned. This has resulted in an AI which is much more capable than the text prediction on your phone.</p>
      </template>
    </PageCard>
  </div>
</template>
<script>
  import PageCard from '@/components/PageCard.vue'
  import InTextCitation from '@/components/InTextCitation.vue';

  export default {
    name: 'HowAIWorksView',
    components: {
      PageCard,
      InTextCitation
    }
  }
</script>
<style>
  h3 {
    text-align: center;
  }
</style>