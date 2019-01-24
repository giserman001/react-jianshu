import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
class Writer extends PureComponent {
  render() {
    // 登录鉴权
    const { login } = this.props
    if (login) {
      return (
        <div>写文章</div>
      )
    } else {
      return <Redirect to='/login'/>
    }
  }
}
const mapStateToProps = (state) => ({
  login: state.getIn(['login', 'login'])
})

export default connect(mapStateToProps, null)(Writer)