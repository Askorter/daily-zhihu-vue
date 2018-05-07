<template>
    <div v-html="acontent"></div>
</template>
<script>
    import axios from 'axios'
    export default {
        name: "articlepage",
        data() {
            return {
                acontent: ""
            }
        },
        created: function() {
            var aurl = 'https://zhihu-daily.leanapp.cn/api/v1/contents/';
            axios(aurl + this.$route.params.aid).then(response => {
                this.acontent = response.data.CONTENTS.body.replace(/(src="http)s?:\/\//g, 'src="https://images.weserv.nl/?url=');
                console.log(this.acontent);
            }).catch(response => {
                console.log(response);
            })
        },
        mounted: function() {
            scrollTo(0, 0);
        }
    }
</script>
<style>
    img {
        width: 100%;
        height: auto;
        max-width: 100%;
        display: block;
    }
    
    .avatar {
        max-width: 50px;
        margin: auto;
    }
</style>