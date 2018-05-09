<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        height: 100%;
    }
    
    body {
        width: 100%;
        height: 100%;
    }
    
    html {
        height: 100%;
        overflow-y: scroll;
        /*滚动条消失页面不跳动*/
    }
</style>