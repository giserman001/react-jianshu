import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
})
export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
})
export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
})
export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
})
export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page
})
// 不需要导出的action
const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data), // 这里需要转成immutable数据类型
  totalPage: Math.ceil(data.length / 10)
})
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then(res => {
      const action = changeList(res.data.data)
      dispatch(action)
    }).catch(err => {
      console.log('error', err)
    })
  }
}