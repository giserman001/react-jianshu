import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import * as actionCreators from './store/actionCreators'
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style'
class Login extends PureComponent {
  render() {
    const {loginSub, login} = this.props
    if (!login) {
      return (
        <LoginWrapper>
          <LoginBox>
            {/* 注意这里有可能需要 innerRef获取dom  这是styled-components导致的，但是我这里竟然不需要，我也不太清楚为啥 */}
            <Input placeholder='账号' ref={(input) => {this.account = input}}/>
            <Input placeholder='密码' type='password' ref={(input) => {this.password = input}}/>
            <Button onClick={() => {loginSub(this.account, this.password)}}>登陆</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to='/'/>
    }
  }
}
const mapStateToProps = (state) => ({
  login: state.getIn(['login', 'login'])
})
const mapDispatchToProps = (dispatch) => {
  return {
    loginSub (account, password) {
      console.log(account.value, password.value)
      dispatch(actionCreators.login(account.value, password.value))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)