<template>  
    <div class="container">
        <div class="sidebar">
             <transition name="bar">
            <Menu theme="dark" v-show="this.$store.state.sidepop" @on-select="activatedname">   <!-- 为什么theme前面加了':'就无效？啊！我懂了！有变量就要用v-bind，没有变量就不能用 -->
                <MenuItem :class="{'ivu-menu-item-active':chosen,'ivu-menu-item-selected':chosen}" name="首页">首页</MenuItem>   <!--class名字为什要加单引号？？？-->
                <MenuItem v-for="(item,index) in sidecol" :key="index+1" @click.native="change" :name="item">{{item}}</MenuItem>        <!--KEY属性必须要写-->
            </Menu>
            </transition>
        </div>
        <div class="sidebar-mask" @click="sidebarin" v-show="this.$store.state.sidepop" @touchmove.prevent></div>   <!--native什么时候加-->
        <!-- 阻止遮罩层滚动 -->
    </div>    
</template>
<script>
    import axios from 'axios'
    export default {
        name: "sidebar",
        data() {
            return {
                sidecol: ['日常心理学', '用户推荐日报', '电影日报', '不许无聊', '设计日报', '大公司日报', '财经日报', '互联网安全', '开始游戏', '音乐日报', '动漫日报', '体育日报'],
                chosen: true,
            };
        },
        methods: {
            sidebarin() {
                this.$store.commit('popside');
                document.body.style.position = "absolute"; //当侧边栏收回时恢复body可滚动
            },
            change() {
                this.chosen = false;
            },
            activatedname(name) {
                this.$store.commit('changesider', name);
                this.$store.commit('getthemecontent');

            }
        }
    }
</script>
<style scoped>
    .sidebar {
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgb(72, 79, 96);
        z-index: 3;
        height: 100%;
        overflow: auto;
        /*侧边栏超出滚动*/
    }
    
    .sidebar::-webkit-scrollbar {
        /*隐藏侧边栏滚动条*/
        display: none;
    }
    
    .sidebar-mask {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(55, 55, 55, .6);
        height: 100%;
        z-index: 1;
    }
    
    .bar-enter-active,
    .bar-leave-active {
        transition: all .3s;
        /*时间要带单位啊啊！！！！*/
    }
    
    .bar-enter {
        margin-left: -240px;
    }
    
    .bar-leave-active {
        margin-left: -240px;
    }
</style>