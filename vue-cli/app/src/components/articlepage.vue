<template>
    <div class="articlec" v-html="acontent" v-if="!this.$store.state.isloading"></div>
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
            axios(aurl + this.$store.state.articleshow).then(response => {
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
    .content-img,
    .origin_image {
        width: 100%;
        height: auto;
        max-width: 100%;
        display: block;
    }
    
    .avatar {
        max-width: 50px;
        margin: auto;
    }
    
    .meta {
        text-align: center;
    }
    
    .articlec {
        width: 80%;
        margin: auto;
        padding: 20px;
        text-align: left;
    }
    
    .question-title {
        text-align: center;
    }
    
    .headline-title,
    .onlyheading {
        text-align: center;
    }
</style>