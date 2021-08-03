import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Wallet from './pages/Wallet';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          component={ Login }
        />
        <ProtectedRoute
          path="/carteira"
          redirectRoute="/carteira" // Mudar para "/carteira" para passar no requisito 4 e para "/" para funcionar
          component={ Wallet }
        />
        <Route
          component={ NotFound }
        />
      </Switch>
    );
  }
}

export default App;
