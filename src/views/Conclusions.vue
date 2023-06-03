<template>
    <div>
        <PageCard>
            <template v-slot:title>Conclusions</template>
            <template v-slot:main>
                <p>AI is likely to radically change the word that we live in. For the United States to stay relevant, it is essential that our government adopt these new technologies as fast as possible. This means finding ways to address its weaknesses, finding appropriate regulations, and developing the legal concepts to make AI compatible with the government and our constitution.</p>
            </template>
        </PageCard>
    </div>
</template>
<script>
    import PageCard from '@/components/PageCard.vue'

    export default {
        name: 'Conclusions',
        components: {
            PageCard
        }
    }
</script>