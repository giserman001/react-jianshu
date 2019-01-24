import * as constants from './constants'
import { fromJS } from 'immutable'
// immutable 库
// immutable 对象(不可更改的对象)
const defaultState = fromJS({
  login: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN:
      return state.set('login', action.value)
    case constants.LOGINOUT:
      return state.set('login', action.value)
    default:
      return state
  }
}