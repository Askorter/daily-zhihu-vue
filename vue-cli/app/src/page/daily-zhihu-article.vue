<template>
    <div class="appcontainer">
        <topnav></topnav>
        <sidebar></sidebar>
        <articlepage></articlepage>
    </div>
</template>
<script>
    import topnav from '../components/daily-nav';
    import sidebar from '../components/sidebar';
    import articlepage from '../components/articlepage'
    export default {
        name: "dailyzhihu",
        components: {
            topnav,
            sidebar,
            articlepage
        }
    }
</script>