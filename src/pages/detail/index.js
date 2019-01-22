import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'
import {
  DetailWrapper,
  Header,
  Content
} from './style'


class Detail extends Component {
  render () {
    // this.props.match.params.id
    // this.props.location.search
    const { title, content } =  this.props
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{__html:content}} />
      </DetailWrapper>
    )
  }
  componentDidMount () {
    this.props.getDetail(this.props.match.params.id)
  }
}
const mapStateToProps = (state) => ({
  title: state.getIn(['detail', 'title']),
  content:state.getIn(['detail', 'content'])
})
const mapDispatchToProps = (dispatch) => ({
  getDetail (id) {
    dispatch(actionCreators.getDetail(id))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Detail)