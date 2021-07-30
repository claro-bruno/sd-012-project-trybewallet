import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import wallet from './pages/Wallet';
import login from './pages/Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ login } />
          <Route path="/carteira" component={ wallet } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
