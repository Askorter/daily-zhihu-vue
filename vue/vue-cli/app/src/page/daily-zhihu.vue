<template>
    <div class="appcontainer">
        <topnav></topnav>
        <sidebar></sidebar>
        <dailycontent></dailycontent>
    </div>
</template>
<script>
    import topnav from '../components/daily-nav';
    import sidebar from '../components/sidebar';
    import dailycontent from '../components/dailycontent';
    export default {
        name: "dailyzhihu",
        components: {
            topnav,
            sidebar,
            dailycontent
        }
    }
</script>