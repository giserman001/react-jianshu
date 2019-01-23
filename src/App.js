import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import Login from './pages/login'
import Router from './router'
import store from './store'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Route path='/' exact component={Router}></Route>
            <Route path='/login' exact component={Login}></Route>
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
