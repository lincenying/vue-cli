/* global window, document */

import { ssp } from '../tools/command'
import * as types from './mutation-types'

export const gLoadding = ({dispatch}, status) => {
    dispatch(types.GLOBAL_LOADDING, status)
}

export const gProgress = ({dispatch, state: {route: {path}}}, num) => {
    dispatch(types.GLOBAL_PROGRESS, num)
    ssp(path, num)
}

export const showMsg = ({dispatch}, content, type = 'error') => {
    dispatch(types.GLOBAL_SHOWMSG, {content, type})
}

export const hideMsg = ({dispatch}) => {
    dispatch(types.GLOBAL_HIDEMSG)
}
