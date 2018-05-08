// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';


Vue.config.productionTip = false
Vue.use(iView)
Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
    state: {
        sidepop: false,
        hadres: false,
        sidebaractivated: "首页",
        theme: {
            "日常心理学": "13",
            "用户推荐日报": "12",
            "电影日报": "3",
            "不许无聊": "11",
            "设计日报": "4",
            "大公司日报": "5",
            "财经日报": "6",
            "互联网安全": "10",
            "开始游戏": "2",
            "音乐日报": "7",
            "动漫日报": "9",
            "体育日报": "8"
        },
        titles: [],
        imgurls: [],
        articleid: [],
        articleshow: "",
        isloading: false
    },
    mutations: {
        popside(state) {
            state.sidepop = !state.sidepop;
        },
        changesider(state, name) {
            state.sidebaractivated = name;
        },
        getthemecontent(state) {
            if (state.sidebaractivated === "首页") {
                axios('https://zhihu-daily.leanapp.cn/api/v1/last-stories').then(response => {
                    state.titles = [];
                    state.imgurls = [];
                    state.articleid = [];
                    for (let i = 0; i < 10; i++) {
                        state.titles.push(response.data.STORIES.stories[i].title);
                        state.imgurls.push(response.data.STORIES.stories[i].images.join('').replace(/(http)s?:\/\//g, 'https://images.weserv.nl/?url=')); //匹配http或https
                        state.articleid.push(response.data.STORIES.stories[i].id);
                    }
                }).catch(response => {
                    console.log(response);
                })
            } else {
                var url = 'https://zhihu-daily.leanapp.cn/api/v1/themes/';
                axios(url + state.theme[state.sidebaractivated]).then(response => {
                    state.titles = [];
                    state.imgurls = [];
                    state.articleid = [];
                    for (let i = 1; i < 11; i++) {
                        state.titles.push(response.data.THEMEDES.stories[i].title);
                        state.articleid.push(response.data.THEMEDES.stories[i].id);
                        if (response.data.THEMEDES.stories[i].images != undefined) {
                            state.imgurls.push(response.data.THEMEDES.stories[i].images.join('').replace(/(http)s?:\/\//g, 'https://images.weserv.nl/?url='));
                        } else {
                            state.imgurls.push('');
                        }
                    }
                }).catch(response => {
                    console.log(response);
                })
            }

        },
        setarticle(state, id) {
            state.articleshow = id;
            console.log(id)
            return
        },
        loadingchange(state) {
            state.isloading = !state.isloading;
            return
        }
    }
})

//添加请求拦截器
axios.interceptors.request.use(config => {
    //在发送请求之前做某事，比如说 设置loading动画显示
    store.commit('loadingchange');
    console.log(store.state.isloading)
    return config
}, error => {
    //请求错误时做些事
    store.commit('loadingchange');
    return Promise.reject(error)
})

//添加响应拦截器
axios.interceptors.response.use(response => {
    //对响应数据做些事，比如说把loading动画关掉
    store.commit('loadingchange');
    console.log(store.state.isloading)
    return response
}, error => {
    //请求错误时做些事
    store.commit('loadingchange');
    return Promise.reject(error)
})

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',

})