<template>
    <div>
        <PageCard>
            <template v-slot:title>Citations</template>
            <template v-slot:main>
                <v-list>
                    <BibliographyCitation number="1" source="https://www.oracle.com/artificial-intelligence/what-is-ai/"/>
                    <BibliographyCitation number="2" source="https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-generative-ai"/>
                    <BibliographyCitation number="3" source="https://openai.com/blog/chatgpt"/>
                    <BibliographyCitation number="4" source="https://www.unesco.org/en/artificial-intelligence/recommendation-ethics/cases"/>
                    <BibliographyCitation number="5" source="https://www.sciencefocus.com/future-technology/gpt-3/"/>
                    <BibliographyCitation number="6" source="https://www.unesco.org/en/artificial-intelligence/recommendation-ethics/cases"/>
                    <BibliographyCitation number="7" source="https://www.nytimes.com/2023/04/08/technology/ai-photos-pope-francis.html"/>
                    <BibliographyCitation number="8" source="https://www.npr.org/2023/04/21/1171032649/ai-music-heart-on-my-sleeve-drake-the-weeknd"/>
                    <BibliographyCitation number="9" source="https://spectrum.ieee.org/ai-hallucination"/>
                    <BibliographyCitation number="10" source="https://www.archives.gov/milestone-documents/14th-amendment"/>
                    <BibliographyCitation number="11" source="https://openai.com/blog/chatgpt-plugins"/>
                    <BibliographyCitation number="12" source="https://www.cnet.com/tech/computing/google-reveals-its-ai-powered-search-engine-to-answer-your-questions/"/>
                    <BibliographyCitation number="13" source="https://fedscoop.com/fbi-finance-team-to-roll-out-first-software-bot/"/>
                    <BibliographyCitation number="14" source="https://fedscoop.com/kelly-fletcher-rpa/"/>
                    <BibliographyCitation number="15" source="https://www.ibm.com/blog/irs-ai-automation/"/>
                    <BibliographyCitation number="16" source="https://blogs.worldbank.org/jobs/broadband-access-spurs-jobs-hard-reach-areas"/>
                    <BibliographyCitation number="17" source="https://hbr.org/2021/11/automation-doesnt-just-create-or-destroy-jobs-it-transforms-them"/>
                    <BibliographyCitation number="18" source="https://ai100.stanford.edu/2021-report/standing-questions-and-responses/sq9-what-are-most-promising-opportunities-ai"/>
                    <BibliographyCitation number="19" source="https://mashable.com/article/beware-chatgpt-ai-prompt-injections"/>
                    <BibliographyCitation number="20" source="https://www.nytimes.com/2023/05/03/opinion/ai-lina-khan-ftc-technology.html"/>
                    <BibliographyCitation number="21" source="https://www.bbc.com/news/world-us-canada-65069316"/>
                    <BibliographyCitation number="22" source="https://qz.com/1681832/the-history-of-the-future-of-work"/>
                    <BibliographyCitation number="23" source="https://www.bbc.com/news/technology-65102150"/>
                </v-list>
            </template>
        </PageCard>
    </div>
</template>
<script>
    import PageCard from '@/components/PageCard.vue'
    import BibliographyCitation from '@/components/BibliographyCitation.vue';

    export default {
        name: 'Citations',
        components: {
            PageCard,
            BibliographyCitation
        }
    }
</script>