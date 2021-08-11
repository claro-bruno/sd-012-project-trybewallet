import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <>
      <div>Hello, TrybeWallet!</div>
      <Switch>
        <Route to path="/" component={ Login } />
        <Route to path="/carteira" component={ Wallet } />
      </Switch>
    </>
  );
}

export default App;
