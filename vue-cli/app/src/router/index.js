import Vue from 'vue'
import Router from 'vue-router'
import dailyzhihu from '@/page/daily-zhihu'
import dailycontent from '@/components/dailycontent'
import articlepage from '@/components/articlepage'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'dailyzhihu',
        redirect: 'index',
        component: dailyzhihu,
        children: [{
            path: 'article',
            name: 'articlepage',
            component: articlepage
        }, {
            path: 'index',
            name: 'dailycontent',
            component: dailycontent
        }]
    }, ]
})

router.beforeEach((to, from, next) => {
    if (from.name === null && to.name === "articlepage") {
        next({
            path: '/' //啊啊啊，终于成功跳转了啊，'index'没有用，为什么？
        })
    } else {
        next();
    }
})

export default router;