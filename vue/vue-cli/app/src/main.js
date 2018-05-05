// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
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
        sidepop: false
    },
    mutations: {
        popside(state) {
            state.sidepop = !state.sidepop;
        }
    }
})

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})