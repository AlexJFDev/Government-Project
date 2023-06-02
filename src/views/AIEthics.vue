<template>
    <div>
        <PageCard>
            <template v-slot:title>AI Ethics</template>
            <template v-slot:main>
                <v-divider :thickness="28.08" class="border-opacity-0"></v-divider>
                <p>AI systems present a variety of ethical problems. Some of these problems include privacy concerns, biases, the creation of misinformation, and a lack of transparency. Furthermore, in the government sphere some of these ethical issues could also present constitutional challenges.<InTextCitation source="https://www.unesco.org/en/artificial-intelligence/recommendation-ethics/cases" number="4"/></p>
                <h3>Privacy concerns</h3>
                <p>As explained in <RouterLink to="/how-ai-works">How AI Works</RouterLink> modern AI systems must be trained on large amounts of data. For example, ChatGPT was trained on 570 gigabytes of text which came from all across the internet. ChatGPT's data has come from sources like Wikipedia, books, news, and research journals.<InTextCitation source="https://www.sciencefocus.com/future-technology/gpt-3/" number="5"/> Generally, this data does not present privacy concerns for use. However, individual authors may not like their writing being used in this way. An AI could also be trained off of someones private data, like texts or emails, which would certainly pose a privacy issue. Finally, even if someone is comfortable with something they wrote being used to train an AI, they might not be comfortable with that AI being used by the government.</p>
                <h3>Biases</h3>
                <p>The large datasets of AI systems also makes them susceptible to biases. This is for two primary reasons. Firstly, in a dataset as large as ChatGPT's it simply isn't possible for humans to verify with certainty that it contains no content that is biased, insensitive, or unpleasant in some other way. Additionally, many works, especially older ones, depict or are biased. For example, several of the works of Shakespeare include characters holding racist attitudes. It doesn't seem right to train an AI, like ChatGPT, on modified Shakespeare but neither does it seem right to exclude his works altogether.<InTextCitation source="https://www.unesco.org/en/artificial-intelligence/recommendation-ethics/cases" number="5"/></p>
                <h3>Misinformation</h3>
                <p></p>
                <h3>transparency</h3>
                <p>Blah blah</p>
                <h3>constitutional Challenges</h3>
                <p></p>
            </template>
        </PageCard>
    </div>
</template>
<script>
    import PageCard from '@/components/PageCard.vue'
    import InTextCitation from '@/components/InTextCitation.vue';

    export default {
        name: 'AIEthics',
        components: {
            PageCard,
            InTextCitation
        }
    }
</script>