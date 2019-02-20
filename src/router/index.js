import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from '../App'
import Login from '../pages/login'
import Admin from '../admin'


import Home from '../pages/home'
import Detail from '../pages/detail/loadable' // 异步组件使用
import Writer from '../pages/writer'

import store from '../store'
class IRouter extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <App>
            <Route path='/' exact render={() => {
              return (
                <Redirect to='/admin/home'></Redirect>
              )
            }}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/admin' render={() => {
              return (
                <Admin>
                  <Switch>
                    <Route path='/admin/home' component={Home}></Route>
                    <Route path='/admin/detail/:id' component={Detail}></Route>
                    <Route path='/admin/writer' component={Writer}></Route>
                  </Switch>
                </Admin>
              )
            }}></Route>
          </App>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default IRouter;
