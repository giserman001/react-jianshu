import * as constants from './constants'
import { fromJS } from 'immutable'
// immutable 库
// immutable 对象(不可更改的对象)
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: true
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.HOME_LIST:
      return state.merge({
        'topicList': action.topicList,
        'articleList': action.articleList,
        'recommendList': action.recommendList
      })
    case constants.ADD_HOME_LIST:
      return state.merge({
        'articleList': state.get('articleList').concat(action.data),
        'articlePage': action.nextPage
      })
    case constants.TOGGLE_SCROLL_SHOW:
      return state.set('showScroll', action.show)
    default:
      return state
  }
}