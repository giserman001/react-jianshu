import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_SCROLL_SHOW,
  show
})


const initTopicList = (data) => ({
  type: constants.HOME_LIST,
  topicList: fromJS(data.topicList),
  articleList: fromJS(data.articleList),
  recommendList: fromJS(data.recommendList)
})
export const getTopicList = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then(res => {
      const action = initTopicList(res.data.data)
      dispatch(action)
    }).catch(err => {
      console.log('error', err)
    })
  }
}
const addHomeList = (data, nextPage) => ({
  type: constants.ADD_HOME_LIST,
  data: fromJS(data),
  nextPage
})
export const getMoreListAction = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then(res => {
      const action = addHomeList(res.data.data, page + 1)
      dispatch(action)
    }).catch(err => {
      console.log('error', err)
    })
  }
}