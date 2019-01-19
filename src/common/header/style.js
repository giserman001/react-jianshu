import styled from 'styled-components'

import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  position:relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top: 0;
  left: 0;
  height: 56px;
  width: 100px;
  display:block;
  background: url('${ logoPic }');
  background-size: contain;
`
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin:0 auto;
`
export const NavItem = styled.div`
  cursor:pointer;
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color:#333;
  &.left {
    float: left
  }
  &.right {
    float: right;
    color:#969696;
  }
  &.active {
    color:#ea6f5a;
  }
`
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width:160px;
  height:38px;
  border:none;
  margin-left:20px;
  margin-top: 9px;
  outline:none;
  border-radius:19px;
  background:#eee;
  padding:0 30px 0 20px;
  box-sizing:border-box;
  font-size:14px;
  color:#666;
  &::placeholder {
    color:#999;
  }
  &.focused {
    width:240px;
  }
`
export const Addition = styled.div`
  position:absolute;
  top:0;
  right:0;
  height:56px;
`
export const Button = styled.div`
  float:right;
  cursor:pointer;
  line-height:38px;
  border-radius:19px;
  margin-top:9px;
  border:1px solid #ec6149;
  margin-right:20px;
  padding: 0 20px;
  font-size:14px;;
  &.reg {
    color:#ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`
export const SearchWrapper = styled.div`
  float:left;
  position:relative;
  .slide-enter {
    transition: all .4s ease-out;
  }
  .slide-enter-active {
    width:240px;
  }
  .slide-exit {
    transition: all .4s ease-out;
  }
  .slide-exit-active {
    width:160px;
  }
  .iconfont {
    position:absolute;
    right:5px;
    width:30px;
    font-size: 22px;
    text-align:center;
    line-height:30px;
    border-radius:15px;
    bottom:5px;
    &.focused {
      background: #777;
      color:#fff;
    }
  }
`