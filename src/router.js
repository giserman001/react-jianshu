import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail'

class Router extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
        </Switch>
      </div>
    );
  }
}

export default Router;
