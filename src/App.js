import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <div>
      <div>Hello, TrybeWallett!</div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/wallet" component={ Wallet } />
      </Switch>
    </div>
  );
}

export default App;
