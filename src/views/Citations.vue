<template>
    <div>
        <PageCard>
            <template v-slot:title>Citations</template>
            <template v-slot:main></template>
        </PageCard>
    </div>
</template>
<script>
    import PageCard from '@/components/PageCard.vue'

    export default {
        name: 'Citations',
        components: {
            PageCard
        }
    }
</script>