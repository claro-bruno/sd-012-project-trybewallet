import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import './styles/loginpage.css';

function App() {
  return (
    <div>
      <h1 id="header-container">Hello, TrybeWallet!</h1>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
      </Switch>
    </div>);
}

export default App;
