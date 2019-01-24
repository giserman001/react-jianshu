import * as constants from './constants'
import axios from 'axios'
// import { fromJS } from 'immutable'

const changeLogin = () => ({
  type: constants.CHANGE_LOGIN,
  value: true
})
export const loginOut = () => ({
  type: constants.LOGINOUT,
  value: false
})
export const login = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&password=' + password).then(res => {
      const result =res.data.data
      if (result) {
        dispatch(changeLogin())
      } else {
        alert('登录失败！')
      }
    }).catch(err => {
      console.log(err, '网络错误')
    })
  }
}
