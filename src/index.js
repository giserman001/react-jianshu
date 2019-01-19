import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './style.js'; // 定义全局样式
import GlobalIconFontStyle from './statics/iconfont/iconfont'
import App from './App';

ReactDOM.render(
  <Fragment>
    <GlobalStyle></GlobalStyle>
    <GlobalIconFontStyle></GlobalIconFontStyle>
    <App />
  </Fragment>,
  document.getElementById('root')
);