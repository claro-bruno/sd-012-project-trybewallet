import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          Hello, TrybeWallet!
        </div>
        <Switch>
          <Route exact path="/" component={ Login } />
        </Switch>
      </div>
    );
  }
}
