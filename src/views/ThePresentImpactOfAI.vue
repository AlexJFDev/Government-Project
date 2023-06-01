<template>
    <div>
        <PageCard>
            <template v-slot:title>The Present Impact of AI</template>
            <template v-slot:main></template>
        </PageCard>
    </div>
</template>
<script>
    import PageCard from '@/components/PageCard.vue'

    export default {
        name: 'ThePresentImpactOfAI',
        components: {
            PageCard
        }
    }
</script>