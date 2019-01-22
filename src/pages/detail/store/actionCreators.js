import * as constants from './constants'
import axios from 'axios'
// import { fromJS } from 'immutable'

const changeDetail = (result) => ({
  type: constants.CHANGE_DETAIL,
  title: result.title,
  content: result.content
})

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id).then(res => {
      const result = res.data.data
      dispatch(changeDetail(result))
    }).catch(err => {
      console.log('网络错误', err)
    })
  }
}
