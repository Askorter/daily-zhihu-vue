import Vue from 'vue'
import Router from 'vue-router'
import dailyzhihu from '@/page/daily-zhihu'
import dailyzhihuarticle from '@/page/daily-zhihu-article'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'dailyzhihu',
            component: dailyzhihu
        },
        {
            path: '/article',
            name: 'dailyzhihuarticle',
            component: dailyzhihuarticle
        }
    ]
})