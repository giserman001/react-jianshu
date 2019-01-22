import React, { PureComponent, Fragment } from 'react'

import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import * as actionCreators from '../store/actionCreators'

import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style'

class List extends PureComponent {
  render() {
    const { articleList, getMoreList, articlePage } = this.props
    return (
      <Fragment>
        {
          articleList.map((item, index) => {
            return (
              <Link key={index} to={'/detail/' + item.get('id')}>
                <ListItem>
                  <img className='pic' alt='' src={item.get('imgUrl')} />
                  <ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={() => getMoreList(articlePage)}>更多文字</LoadMore>
      </Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList']),
    articlePage: state.getIn(['home', 'articlePage'])
  }
}
const mapDispathToProps = (dispatch) => {
  return {
    getMoreList(articlePage) {
      dispatch(actionCreators.getMoreListAction(articlePage))
    }
  }
}
export default connect(mapStateToProps, mapDispathToProps)(List)