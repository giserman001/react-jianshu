import React, { Component, Fragment } from 'react';
import Header from './common/header'
class Admin extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div>
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}

export default Admin;
