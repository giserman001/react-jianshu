import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'
import * as actionCreators from './store/actionCreators'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'
// 可以提交组件性能优化 之前防止组件因外部因素重新渲染
// 那么我们shouldComponentUpdate生命周期函数判断，来提高组件性能
class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt='' className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4605/1d5cb81933dbb48ab0aa53d481a1300fc5406e7f.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
        {
          this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null
        }
      </HomeWrapper>
    )
  }
  handleScrollTop () {
    window.scrollTo(0, 0)
  }
  componentDidMount () {
    this.props.getHomeListData() // 初始化topic数据
    this.bindEvents()
  }
  bindEvents () {
    window.addEventListener('scroll', this.props.changeScollTopShow)
  }
  componentWillUnmount () {
    // 组件卸载时销毁scroll事件的监听
    window.removeEventListener('scroll', this.props.changeScollTopShow)
  }
}
const mapStateToProps = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})
const mapDispatchToProps = (dispatch) => {
  return {
    getHomeListData () {
      dispatch(actionCreators.getTopicList())
    },
    changeScollTopShow () {
      // document.documentElement.scrollTop 要获取当前页面的滚动条纵坐标位置
      console.log(document.documentElement.scrollTop)
      if (document.documentElement.scrollTop > 100) {
        dispatch(actionCreators.toggleTopShow(true))
      } else {
        dispatch(actionCreators.toggleTopShow(false))
      }
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)