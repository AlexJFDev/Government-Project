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
                <p>The large datasets of AI systems also makes them susceptible to biases. This is for two primary reasons. Firstly, in a dataset as large as ChatGPT's it simply isn't possible for humans to verify with certainty that it contains no content that is biased, insensitive, or unpleasant in some other way. Additionally, many works, especially older ones, depict or are biased. For example, several of the works of Shakespeare include characters holding racist attitudes. It doesn't seem right to train an AI like ChatGPT, on modified Shakespeare but neither does it seem right to exclude his works altogether.<InTextCitation source="https://www.unesco.org/en/artificial-intelligence/recommendation-ethics/cases" number="6"/></p>
                <h3>Misinformation</h3>
                <p>When it comes to misinformation, AI systems and especially generative AI face two major ethical issues. One is the intentional creation of misinformation and the other is the accidental creation of misinformation.</p>
                <p>Recently, funny images of celeberties,<InTextCitation source="https://www.nytimes.com/2023/04/08/technology/ai-photos-pope-francis.html" number="7"/> AI generated songs,<InTextCitation source="https://www.npr.org/2023/04/21/1171032649/ai-music-heart-on-my-sleeve-drake-the-weeknd" number="8"/> and a fake photo of former President Trump being arrested<InTextCitation source="https://www.bbc.com/news/world-us-canada-65069316" number="21"/> have all been in the news. The first two of these examples are fairly innocent, but the later is cause for concern. Generative AI can be used to quickly make fake content and when used maliciously the technology could present a serious problem.</p>
                <p>Generative agents, especially large language models, have also created misinformation unintentionally. When this happens it is referred to as the AI "hallucinating".<InTextCitation source="https://spectrum.ieee.org/ai-hallucination" number="9"/> Thinking back to <RouterLink to="/how-ai-works">how AI works</RouterLink> you might be able to figure out why. Generative agents are just predicting what word is statistically most likely to come next, they are not actually evaluating whether or not it is true or correct.</p>
                <h3>Transparency</h3>
                <p>Transparency is also an issue for AI systems. Because they are are so massive and trained, not designed by hand, it is currently not possible for us to know how AI systems come to create their outputs. This is known as the black box problem.</p>
                <h3>Legal Challenges</h3>
                <p>Many of these ethical issues could present constitutional or legal barriers to AI being used by the government. For example, if an AI is found to be biased against a group of people protected by the 14th amendment, the use of that AI by a government entity could be restricted or even unconstitutional.<InTextCitation source="https://www.archives.gov/milestone-documents/14th-amendment" number="10"/></p>
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