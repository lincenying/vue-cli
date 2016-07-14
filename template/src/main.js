import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import vueValidator from 'vue-validator'
import store from './store'

import App from './App.vue'

import index from './components/index.vue'

Vue.use(VueRouter)
Vue.use(vueValidator)

var router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    suppressTransitionError: true
})

router.map({
    '/': {
        name: 'index',
        component: index
    },
    '*': {
        component: index
    }
})

sync(store, router)

router.beforeEach(() => {
    store.dispatch('GLOBAL_PROGRESS', 30)
})
router.afterEach(() => {
    window.scrollTo(0, 0)
})
router.start(App, '#app')
