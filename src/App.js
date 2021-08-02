import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Wallet from './pages/Wallet';

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route
            exact
            path="/"
            component={ Login }
          />
          <ProtectedRoute
            path="/carteira"
            redirectRoute="/" // Mudar para "/carteira" para passar no requisito 4
            component={ Wallet }
          />
          <Route
            component={ NotFound }
          />
        </Switch>
      </main>
    );
  }
}

export default App;
