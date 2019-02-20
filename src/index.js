import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './style.js'; // 定义全局样式
import GlobalIconFontStyle from './statics/iconfont/iconfont'
import IRouter from './router';

ReactDOM.render(
  <Fragment>
    <GlobalStyle></GlobalStyle>
    <GlobalIconFontStyle></GlobalIconFontStyle>
    <IRouter />
  </Fragment>,
  document.getElementById('root')
);