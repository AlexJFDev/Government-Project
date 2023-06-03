<template>
    <div>
        <PageCard>
            <template v-slot:title>The Impact of AI on Employment</template>
            <template v-slot:main>
                <v-divider :thickness="28.08" class="border-opacity-0"></v-divider>
                <p>People have long been worried about new technologies replacing their jobs.<InTextCitation source="https://qz.com/1681832/the-history-of-the-future-of-work" number="22"/> AI has especially raised concerns and people have warned about the technology for decades. These concerns appear validated by A recent Goldman-Sachs report which found that new AI technologies could replace up to 300 million jobs.<InTextCitation source="https://www.bbc.com/news/technology-65102150" number="23"/> Fortunately, the report also suggests that this job replacement will mostly come as gains in productivity, not direct layoffs.</p>
                <p>To get a better understanding of how AI will probably impact employment it is helpful to take a look back at the impact other technologies have had. According to the world bank internet and computer access, which were once expected to destroy jobs through automation, create many jobs both directly and indirectly.<InTextCitation source="https://blogs.worldbank.org/jobs/broadband-access-spurs-jobs-hard-reach-areas" number="16"/> More generally, automation has transformed jobs and boosted wages throughout history.<InTextCitation source="https://hbr.org/2021/11/automation-doesnt-just-create-or-destroy-jobs-it-transforms-them" number="17"/></p>
            </template>
        </PageCard>
    </div>
</template>
<script>
    import InTextCitation from '@/components/InTextCitation.vue';
    import PageCard from '@/components/PageCard.vue'
 
    export default {
        name: 'TheFutureImpactOfAI',
        components: {
            PageCard,
            InTextCitation
        }
    }
</script>