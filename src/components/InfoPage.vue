<template>
    <div>
        <SideBar></SideBar>
        <h4>{{ title }}</h4>
    </div>
</template>
<script>
    import SideBar from '@/components/SideBar.vue'

    export default {
        name: 'InfoPage',
        components: {
            SideBar
        },
        props: [
            'title'
        ],
    }
</script>