<template>

<div class="articlec" v-html="acontent" v-if="!this.$store.state.isloading" mode="out-in">

    </div>

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
        margin: auto;
        max-width: 100%;
        display: block;
    }
    
    .question-title {
        font-size: 2rem;
        text-align: center;
    }
    
    .question {
        margin-top: 20px;
    }
    
    .articlec .avatar {
        max-width: 50px;
        margin: auto;
    }
    
    .meta {
        text-align: center;
        margin-bottom: 20px;
    }
    
    .content {
        margin-bottom: 50px;
    }
    
    .articlec {
        width: 60%;
        margin: auto;
        padding: 20px;
        text-align: left;
        font-size: 0.8rem;
        word-break: break-all;
    }
    
    .answer {
        margin-top: 50px;
        border-bottom: 1px solid #dad8d8;
    }
    
    .headline-title,
    .onlyheading {
        text-align: center;
    }
    
    .articlec img {
        width: 100%;
        height: auto;
        max-width: 100%;
        display: block;
        margin: auto;
    }
    
    @media screen and (max-width: 765px) {
        .articlec {
            width: 80%;
            margin: auto;
            padding: 20px;
            text-align: left;
        }
    }
</style>