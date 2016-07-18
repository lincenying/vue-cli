/* global window */

import Vue from 'vue'
import ls from 'store2'
import * as types from './mutation-types'

export const gLoadding = ({dispatch}, status) => {
    dispatch(types.GLOBAL_LOADDING, status)
}

export const gProgress = ({dispatch, state: {route: {path}}}, num) => {
    dispatch(types.GLOBAL_PROGRESS, num)
    var scrollTop = ls.get(path)
    if (num === 100 && scrollTop) {
        Vue.nextTick(function () {
            window.scrollTo(0, scrollTop)
        })
    }
}

export const showMsg = ({dispatch}, content, type = 'error') => {
    dispatch(types.GLOBAL_SHOWMSG, {content, type})
}

export const hideMsg = ({dispatch}) => {
    dispatch(types.GLOBAL_HIDEMSG)
}
