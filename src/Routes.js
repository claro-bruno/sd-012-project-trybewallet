import React from 'react';
import { Switch, Route } from 'react-router';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function Routes() {
  return (
    <Switch>
      <Route exact path="/"><Login /></Route>
      <Route><Wallet /></Route>
    </Switch>
  );
}

export default Routes;
