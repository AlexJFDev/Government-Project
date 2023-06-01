<template>
    <div>
        <PageCard>
            <template v-slot:title>How AI Works</template>
            <template v-slot:main></template>
        </PageCard>
    </div>
</template>
<script>
    import PageCard from '@/components/PageCard.vue'

    export default {
        name: 'HowAIWorksView',
        components: {
            PageCard
        }
    }
</script>