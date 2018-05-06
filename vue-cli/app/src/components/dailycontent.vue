<template>
    <div class="content">
        <Card class="cardcontent" v-for="(item,index) in count" :key="index">
            <p :id="'pp'+index"></p>   
            <img :id="'ii'+index">    
            <!-- 通过拼接id来改内容，实在是不得已而为之        -->
            <!-- 因为刷新后可能因异步无法获取到data，无法数据驱动视图更新 ！！！-->
        </Card>
    </div> 
</template>
<script>
    import axios from 'axios'
    export default {
        name: "dailycontent",
        data() {
            return {
                title: [],
                imgurl: [],
                count: 10,
            }
        },
        methods: {
            getcontent(i) {
                return this.title[i];
            },
            getimgurl(i) {
                return this.imgurl[i];
            }
        },
        //跨域代理没有用，为什么！！！！！！
        beforeCreate: function() { //在 then的内部不能使用Vue的实例化的this, 因为在内部 this 没有被绑定!!使用箭头函数可以和父方法共享变量
            axios('https://zhihu-daily.leanapp.cn/api/v1/last-stories').then(response => {
                if (this.$store.state.hadres == false) {
                    for (let i = 0; i < this.count; i++) {
                        this.title[i] = response.data.STORIES.stories[i].title;
                        this.imgurl[i] = response.data.STORIES.stories[i].images;
                        this.imgurl[i] = this.imgurl[i].join('').replace(/https:\/\//g, 'https://images.weserv.nl/?url='); //hahahahahahahahahhahahah，api图片有限制，会报403
                        document.getElementById('pp' + i).innerHTML = this.title[i];
                        document.getElementById('ii' + i).src = this.imgurl[i];
                    }
                    this.$store.state.hadres = true;
                }
                console.log(this.$store.state.hadres);
            }).catch(response => {
                console.log(response);
            })
        }
    }
</script>
<style>
    .content {
        margin: auto;
        width: 60%;
    }
    
    .cardcontent {
        margin-top: 20px;
    }
</style>