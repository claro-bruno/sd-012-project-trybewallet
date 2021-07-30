import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={ () => <Login /> } />
        <Route path="/carteira" render={ () => <Wallet /> } />
      </Switch>
    </div>
  );
}

export default App;
