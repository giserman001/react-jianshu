import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail'


import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            {/* <Route path='/' exact render={() => <div>首页</div>}></Route>
              <Route path='/detail' exact render={() => <div>detail</div>}></Route> */}
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
