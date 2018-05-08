<template>
    <div class="appcontainer">
        <topnav></topnav>
        <sidebar></sidebar>
        <transition name="loading" mode="out-in">
            <Spin id="loading" v-if="this.$store.state.isloading"><svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
  <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" transform="rotate(340 25 25)">
    <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform>
    </path>
  </svg></Spin>
        </transition>     
        <router-view></router-view>
        <BackTop></BackTop>
    </div>
</template>
<script>
    import topnav from '../components/daily-nav';
    import sidebar from '../components/sidebar';
    export default {
        name: "dailyzhihu",
        components: {
            topnav,
            sidebar
        }
    }
</script>