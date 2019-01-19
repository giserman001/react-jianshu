import {SEARCH_FOCUS, SEARCH_BLUR} from './constants'
import { fromJS } from 'immutable'
// immutable 库
// immutable 对象(不可更改的对象)
const defaultState = fromJS({
  focused: false
})

export default (state = defaultState, action) => {
  if (action.type === SEARCH_FOCUS) {
    // immutable对象的set方法，会结合之前immutable对象的值
    // 和设置的值， 返回一个全新的对象
    return state.set('focused', true)
  }
  if (action.type === SEARCH_BLUR) {
    return state.set('focused', false)
  }
  return state
}