import React, { Component } from 'react'
import { connect } from 'react-redux'
/*
<Route exact path="/Home" component={Home}/>
  1.只有包裹在Route组件里的才能使用`this.props.location`，
  2.假如有个需求，是面包屑或者导航组件里需要拿到`this.props.location`（导航组件或者面包屑一般不会包裹在`Route`里吧），那么直接这么写显然就不行了。
    这个时候`withRouter`修饰一下，就可以这么写了。
*/
import { withRouter } from 'react-router-dom' // 异步组件时需要使用
import * as actionCreators from './store/actionCreators'
import {
  DetailWrapper,
  Header,
  Content
} from './style'


class Detail extends Component {
  render() {
    // this.props.match.params.id
    // this.props.location.search
    const { title, content } = this.props
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </DetailWrapper>
    )
  }
  componentDidMount() {
    // console.log(this.props, 'aaaaaaaaaaaaaa')
    this.props.getDetail(this.props.match.params.id)
  }
}
const mapStateToProps = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})
const mapDispatchToProps = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))