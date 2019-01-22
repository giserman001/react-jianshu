import * as constants from './constants'
import { fromJS } from 'immutable'
// immutable 库
// immutable 对象(不可更改的对象)
const defaultState = fromJS({
  title: '',
  content: ''
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content
      })
    default:
      return state
  }
}