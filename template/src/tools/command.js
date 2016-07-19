import Vue from 'vue'
import ls from 'store2'

export const ssp = (path, num) => {
    var clientHeight = document.documentElement.clientHeight,
        scrollTop = ls.get(path)
    if (num === 100 && scrollTop) {
        Vue.nextTick(() => {
            if (document.body.clientHeight >= scrollTop + clientHeight) {
                window.scrollTo(0, scrollTop)
            } else {
                ls.remove(path)
            }
        })
    }
}
