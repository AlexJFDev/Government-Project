<template>
    <div>
        <PageCard>
            <template v-slot:title>The Opportunities and Challenges of AI</template>
            <template v-slot:main>
                <v-divider :thickness="28.08" class="border-opacity-0"></v-divider>
                <p>AI presents a variety of opportunities and challenges that will be faced in the 2020s.</p>
                <h3>Opportunities</h3>
                <p>AI presents a wide range of opportunities to improve life and productivity. Some of these opportunities will augment human abilities and others will come about from AI acting on its own. AI can assist in decision making, draw insights about data and text, and act as an assistant. These augmentations will improve quality of life and productivity.<InTextCitation source="https://ai100.stanford.edu/2021-report/standing-questions-and-responses/sq9-what-are-most-promising-opportunities-ai" number="18"/> The potential of AI on its own is less clear. This is because, like the internet was a decade or two ago, an emerging technology. We simply cannot predict with certainty what is capable of.</p>
                <h3>Challenges</h3>
                <p>Generative AI is not perfect and also faces some challenges. The greatest of these might be from a new concept called "prompt-injection". This occurs because generative AI take natural language instructions. Users can sneak requests, alternative instructions, or phrases into the prompts that AI receive and cause them to behave in unexpected ways. This kind of attack is already being carried out against AI tools.<InTextCitation source="https://mashable.com/article/beware-chatgpt-ai-prompt-injections" number="19"/></p>
                <p>AI will also need to be appropriately regulated by the government. This is a powerful technology and we don't want to hamper its development but neither do we want to let that power fall into the hands of bad actors. To best regulate AI, we must learn from our mistakes of the past and follow the middle path between the interests of the people and of innovation.<InTextCitation source="https://www.nytimes.com/2023/05/03/opinion/ai-lina-khan-ftc-technology.html" number="20"/></p>
            </template>
        </PageCard>
    </div>
</template>
<script>
    import InTextCitation from '@/components/InTextCitation.vue';
    import PageCard from '@/components/PageCard.vue'

    export default {
        name: 'TheOpportunitiesAndChallengesOfAI',
        components: {
            PageCard,
            InTextCitation
        }
    }
</script>