import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import wallet from './pages/Wallet';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ wallet } />
          <Route path="" component="" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
