// 汇总所有reducer(对数据拆分)

// import { combineReducers } from 'redux' // 组合所有模块reducer
import { combineReducers } from 'redux-immutable' // 组合所有模块reducer
import { reducer as headerReducer } from '../common/header/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as detailReducer } from '../pages/detail/store'

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer
})

export default reducer