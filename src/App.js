import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Wallet from './pages/Wallet';
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/carteira" component={ Wallet } />
      </Switch>
    );
  }
}

export default App;
