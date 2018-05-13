<template>
<div class="content" v-if="!this.$store.state.isloading" mode="out-in">

        <Card class="cardcontent" v-for="(item,index) in this.$store.state.titles" :key="index"  @click.native="showarticle(getid(index))">
            <div class="title">
                <div class="title-c">
                    <p v-html="gettitle(index)"></p>  
                </div>
            </div>
            <div class="title-img">
                <div class="title-img-c">
                    <img :src="getimgurl(index)">
                </div>
            </div>
               
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
                this.$store.commit('setarticle', id);
                this.$router.push({
                        path: 'article',
                    })
                    //window.location.href = '/article';
            },
            handleScroll() {
                var ifbottom = Math.abs((document.documentElement.clientHeight || document.body.clientHeight) + (document.documentElement.scrollTop || document.body.scrollTop) -
                        (document.documentElement.scrollHeight || document.body.scrollHeight)) //避免浮点数计算不精确问题
                if (ifbottom < 1) {
                    setTimeout(() => {
                        this.$store.commit('getmorecontent');

                    }, 500);


                }

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
            scrollTo(0, 0);
            this.$store.commit('getthemecontent');
            window.addEventListener('scroll', this.handleScroll);
        },
        // updated: function() {  //这段代码会导致浏览器崩溃，为什么？？？
        //     this.$store.commit('loadingchange');
        //     setTimeout(() => {
        //         this.$store.commit('loadingchange');
        //     }, 1000);

        // },
        destroyed: function() {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>
<style scoped>
    .content {
        margin: auto;
        width: 80%;
    }
    
    .cardcontent {
        margin-top: 20px;
        overflow: hidden;
        min-height: 70px;
    }
    
    .title {
        position: absolute;
        left: 0;
        top: 0;
        width: 80%;
        height: 100%;
        line-height: 20px;
        font-size: 0.8rem;
    }
    
    .title-c {
        height: 100%;
        display: flex;
        padding: 0 10px;
        flex-direction: row;
        align-items: center;
    }
    
    .title-c p {
        margin: 0 auto;
    }
    
    .title-img {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 20%;
    }
    
    .title-img-c {
        height: 100%;
        display: flex;
        border-left: 1px solid #efefef;
        flex-direction: row;
        align-items: center;
    }
    
    .title-img-c img {
        display: inline-block;
        width: 50px;
        right: 20px;
        margin: 0 auto;
        border-radius: 5px;
    }
    
    @media screen and (min-width: 765px) {
        .content {
            width: 60%;
            margin: auto;
        }
    }
    
    @media screen and (max-width: 765px) {
        .cardcontent {
            margin-top: 20px;
            overflow: hidden;
            min-height: 55px;
        }
        .title {
            font-size: 0.5rem;
        }
    }
</style>
<style>
    .ivu-card-body {
        height: 100%;
        /* display: flex;
        align-items: center; */
        /*我要flex布局啊，之后再调吧*/
    }
    
    .ivu-scroll-container::-webkit-scrollbar {
        /*隐藏侧边栏滚动条*/
        display: none;
    }
    /* .title-img {
            position: absolute;
            width: 50px;
            right: 20px;
            top: 50%;
            padding-top: 25px;
        } */
</style>