import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './components/Wallet';

function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={ () => <Login /> }
      />
      <Route
        exact
        path="/carteira"
        component={ () => <Wallet /> }
      />
    </Switch>
  );
}

export default App;
