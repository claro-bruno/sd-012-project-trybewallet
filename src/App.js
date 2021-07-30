import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login, Wallet, NotFound } from './pages';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/wallet" component={ Wallet } />
      <Route component={ NotFound } />
    </Switch>
  );
}

export default App;
