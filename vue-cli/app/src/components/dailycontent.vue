<template>
    <div class="content">
        <Card class="cardcontent" v-for="(item,index) in count" :key="index"  @click.native="showarticle(getid(index))">
            <p v-html="gettitle(index)"></p>   
            <img :src="getimgurl(index)">    
            <!-- 通过拼接id来改内容，实在是不得已而为之-->
            <!-- 终于不用拼接id了！！！ -->
        </Card>
    </div> 
</template>
<script>
    import axios from 'axios';
    export default {
        name: "dailycontent",
        data() {
            return {
                count: 10,
            }
        },
        methods: {
            gettitle(i) {
                return this.$store.state.titles[i];
            },
            getimgurl(i) {
                return this.$store.state.imgurls[i];
            },
            getid(i) {
                return this.$store.state.articleid[i];
            },
            showarticle(id) {
                this.$router.push({
                        name: 'dailyzhihuarticle',
                        params: {
                            aid: id
                        }
                    })
                    //this.$store.commit('setarticle', id);
                    //window.location.href = '/article';
            }
        },
        //跨域代理没有用，为什么！！！！！！
        // created: function() { //在 then的内部不能使用Vue的实例化的this, 因为在内部 this 没有被绑定!!使用箭头函数可以和父方法共享变量
        //     axios('https://zhihu-daily.leanapp.cn/api/v1/last-stories').then(response => {
        //         if (this.$store.state.hadres == false) {
        //             for (let i = 0; i < this.count; i++) {
        //                 //啊啊啊啊啊！！！视图不更新是因为使用array[i]=xx时，vue无法检测到数据的变化！！
        //                 //Vue 不能检测以下变动的数组：
        //                 //当你利用索引直接设置一个项时，vm.items[indexOfItem] = newValue
        //                 //当你修改数组的长度时， 例如：vm.items.length = newLength
        //                 this.title.push(response.data.STORIES.stories[i].title);
        //                 this.imgurl.push(response.data.STORIES.stories[i].images.join('').replace(/https:\/\//g, 'https://images.weserv.nl/?url=')); //hahahahahahahahahhahahah，api图片有限制，会报403
        //                 // document.getElementById('pp' + i).innerHTML = this.title[i];
        //                 // document.getElementById('ii' + i).src = this.imgurl[i];
        //             }
        //             this.$store.state.hadres = true;
        //         }
        //     }).catch(response => {
        //         console.log(response);
        //     })
        // }
        created: function() {
            this.$store.commit('getthemecontent');
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