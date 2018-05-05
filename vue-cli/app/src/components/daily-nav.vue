<template>
  <div class="nav">
    <Icon class="nav-button" :size="30" @click.native="popsidebar" type="navicon-round"></Icon>
  </div>
</template>
<script>
    export default {
        name: "topnav",
        methods: {
            popsidebar() {
                this.$store.commit('popside');
            }
        }
    }
</script>
<style scoped>
    .nav {
        position: absolute;
        top: 0;
        height: 50px;
        width: 100%;
        background-color: #7e57c2;
    }
    
    .nav-button {
        float: left;
        margin-left: 20px;
        margin-top: 10px;
    }
</style>