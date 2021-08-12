import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
// import Wallet from './pages/Wallet';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={ (props) => <Login { ...props } /> } />
      </Switch>
    );
  }
}

export default App;
