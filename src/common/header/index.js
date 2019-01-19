import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from './style'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focused: false
    }
    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
  }
  render() {
    return (
      <HeaderWrapper>
        {/* <Logo href='/'/> 回到首页写法有多种*/}
        <Logo />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载APP</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <span className="iconfont">&#xe607;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout={400}
              in={this.state.focused}
              classNames='slide'>
              <NavSearch
                className={this.state.focused ? 'focused' : ''}
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlur}></NavSearch>
            </CSSTransition>
            <span className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe646;</span>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'><span className="iconfont">&#xe608;</span>写文章</Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
  handleInputFocus(e) {
    this.setState({
      focused: true
    })
  }
  handleInputBlur(e) {
    this.setState({
      focused: false
    })
  }
}
export default Header