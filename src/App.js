import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/carteira" component={ Wallet } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default App;
