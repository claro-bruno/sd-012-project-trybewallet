import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <div>
      <h1>Hello, TrybeWallet!</h1>
      <Switch>
        <Route to="/" component={ Login } />
        <Route to="/carteira" component={ Wallet } />
      </Switch>
    </div>);
}

export default App;
