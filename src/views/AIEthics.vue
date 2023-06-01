<template>
    <div>
        <PageCard>
            <template v-slot:title>AI Ethics</template>
            <template v-slot:main></template>
        </PageCard>
    </div>
</template>
<script>
    import PageCard from '@/components/PageCard.vue'

    export default {
        name: 'AIEthics',
        components: {
            PageCard
        }
    }
</script>