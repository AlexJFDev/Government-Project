<template>
    <div>
        <PageCard>
            <template v-slot:title>The Opportunities and Challenges of AI</template>
            <template v-slot:main></template>
        </PageCard>
    </div>
</template>
<script>
    import PageCard from '@/components/PageCard.vue'

    export default {
        name: 'TheOpportunitiesAndChallengesOfAI',
        components: {
            PageCard
        }
    }
</script>