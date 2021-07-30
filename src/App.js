import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import './App.css';

function App() {
  return (
    <Switch>
      <Route to="/" component={ Login } />
      <Route to="/carteira" component={ Wallet } />
    </Switch>
  );
}

export default App;
