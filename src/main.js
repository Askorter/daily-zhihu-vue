// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import App from "./App";
import router from "./router";
import iView from "iview";
import "iview/dist/styles/iview.css";

Vue.config.productionTip = false;
Vue.use(iView);
Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    sidepop: false,
    hadres: false,
    sidebaractivated: "首页",
    theme: {
      日常心理学: "13",
      用户推荐日报: "12",
      电影日报: "3",
      不许无聊: "11",
      设计日报: "4",
      大公司日报: "5",
      财经日报: "6",
      互联网安全: "10",
      开始游戏: "2",
      音乐日报: "7",
      动漫日报: "9",
      体育日报: "8"
    },
    titles: [],
    imgurls: [],
    articleid: [],
    articleshow: "",
    isloading: false,
    dateshow: new Date(),
    timelimit: true,
    firstin: true,
    isgettingmore: false,
    lastHeight: 0
  },
  mutations: {
    popside(state) {
      state.sidepop = !state.sidepop;
    },
    changesider(state, name) {
      state.sidebaractivated = name;
    },
    changeheight(state, height) {
      state.lastHeight = height;
    },
    getthemecontent(state) {
      if (state.sidebaractivated === "首页") {
        if (state.firstin == true) {
          state.isloading = true;
          console.log(state.firstin);
        }
        axios("https://zhihu-daily.leanapp.cn/api/v1/last-stories")
          .then(response => {
            //store.commit('loadingchange');
            state.titles = [];
            state.imgurls = [];
            state.articleid = [];
            for (let i = 0; i < response.data.STORIES.stories.length; i++) {
              state.titles.push(response.data.STORIES.stories[i].title); //匹配http或https
              /* state.imgurls.push(
                response.data.STORIES.stories[i].images
                  .join("")
                  .replace(/(http)s?:\/\//g, "https://images.weserv.nl/?url=")
              ); */ state.imgurls.push(
                response.data.STORIES.stories[i].images
              );
              state.articleid.push(response.data.STORIES.stories[i].id);
            }
          })
          .then(response => {
            // setTimeout(() => {
            //     store.commit('loadingchange');
            // }, 2000);
            if (state.firstin == true) {
              state.isloading = false;
              state.firstin = false;
              console.log(state.firstin);
            }
          })
          .catch(response => {
            console.log(response);
          });
      } else {
        var url = "https://zhihu-daily.leanapp.cn/api/v1/themes/"; //我为什么不把异步请求放在action中呢，ORZ,改，必须改！
        axios(url + state.theme[state.sidebaractivated])
          .then(response => {
            //store.commit('loadingchange');
            state.titles = [];
            state.imgurls = [];
            state.articleid = [];
            for (let i = 1; i < response.data.THEMEDES.stories.length; i++) {
              state.titles.push(response.data.THEMEDES.stories[i].title);
              state.articleid.push(response.data.THEMEDES.stories[i].id);
              if (response.data.THEMEDES.stories[i].images != undefined) {
                /* state.imgurls.push(
                  response.data.THEMEDES.stories[i].images
                    .join("")
                    .replace(/(http)s?:\/\//g, "https://images.weserv.nl/?url=")
                ); */
                state.imgurls.push(response.data.THEMEDES.stories[i].images);
              } else {
                state.imgurls.push("");
              }
            }
          })
          .then(response => {
            // setTimeout(() => {
            //     store.commit('loadingchange');
            // }, 2000);
          })
          .catch(response => {
            console.log(response);
          });
      }
    },
    getmorecontent(state) {
      if (!String.prototype.padStart)
        //手机浏览器有的没有实现padStart这个函数，用一个别人的polyfill  妈耶，我为什么不用babel呢...
        String.prototype.padStart =
          // 为了方便表示这里 fillString 用了ES6 的默认参数，不影响理解
          function(maxLength, fillString = " ") {
            if (
              Object.prototype.toString.call(fillString) !== "[object String]"
            )
              throw new TypeError("fillString must be String");
            let str = this;
            // 返回 String(str) 这里是为了使返回的值是字符串字面量，在控制台中更符合直觉
            if (str.length >= maxLength) return String(str);

            let fillLength = maxLength - str.length,
              times = Math.ceil(fillLength / fillString.length);

            // 这个算法叫啥？
            // SICP 的中文版第 30页 有用到同种算法计算乘幂计算
            while ((times >>= 1)) {
              fillString += fillString;
              if (times === 1) {
                fillString += fillString;
              }
            }
            return fillString.slice(0, fillLength) + str;
          };
      this.commit("dateback");

      var mydate = state.dateshow;
      //mydate = mydate.getFullYear().toString() + (mydate.getMonth() + 1).toString().padStart(2, '0') + mydate.getDate().toString().padStart(2, '0');
      //上面这种写法会导致移动端某些浏览器停止执行下面的语句，why???
      //用一个副本保存mydate就可以解决移动端上无法下拉加载更多内容的bug
      var mydatecopy =
        mydate.getFullYear().toString() +
        (mydate.getMonth() + 1).toString().padStart(2, "0") +
        mydate
          .getDate()
          .toString()
          .padStart(2, "0");

      if (state.sidebaractivated === "首页") {
        state.isgettingmore = true; //我去，让动画一直转着竟然意外地达到了我想要的效果，这不清真
        axios(
          "https://zhihu-daily.leanapp.cn/api/v1/before-stories/" + mydatecopy
        )
          .then(response => {
            for (let i = 0; i < response.data.STORIES.stories.length; i++) {
              state.titles.push(response.data.STORIES.stories[i].title); //匹配http或https
              /* state.imgurls.push(
                response.data.STORIES.stories[i].images
                  .join("")
                  .replace(/(http)s?:\/\//g, "https://images.weserv.nl/?url=")
              ); */ state.imgurls.push(
                response.data.STORIES.stories[i].images
              );
              state.articleid.push(response.data.STORIES.stories[i].id);
            }
            state.timelimit = false;
          })
          .then(response => {
            /* setTimeout(() => {
              state.timelimit = true;
            }, 500); */
            //优化防止多次执行获取更多内容的策略，从时间限制改为由页面滚动距离判断，不再需要定时器限制了
          })
          .catch(response => {
            console.log(response);
          });
      } else {
        //emm...原来是没有主题的过去消息的api...
        return;
      }
    },
    setarticle(state, id) {
      state.articleshow = id;
      console.log(id);
      return;
    },
    loadingchange(state) {
      state.isloading = !state.isloading;
      return;
    },
    dateback(state) {
      //这里可能还有bug，时间可能会出错
      state.dateshow.setDate(state.dateshow.getDate() - 1);
      console.log(state.dateshow);
    }
  }
});

// //添加请求拦截器
// axios.interceptors.request.use(config => {
//     //在发送请求之前做某事，比如说 设置loading动画显示
//     store.commit('loadingchange');
//     console.log(store.state.isloading)
//     return config
// }, error => {
//     //请求错误时做些事
//     setTimeout(() => {
//         store.commit('loadingchange');
//     }, 500);

//     return Promise.reject(error)
// })

// //添加响应拦截器
// axios.interceptors.response.use(response => {
//     //对响应数据做些事，比如说把loading动画关掉
//     setTimeout(() => {
//         store.commit('loadingchange');
//     }, 1000);
//     console.log(store.state.isloading)
//     return response
// }, error => {
//     //请求错误时做些事
//     setTimeout(() => {
//         store.commit('loadingchange');
//     }, 500);
//     //错误时停止动画
//     return Promise.reject(error)
// })

new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
