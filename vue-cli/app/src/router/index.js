import Vue from 'vue'
import Router from 'vue-router'
import dailyzhihu from '@/page/daily-zhihu'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'dailyzhihu',
        component: dailyzhihu
    }]
})