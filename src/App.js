import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
