import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Wallet from './pages/Wallet';

// prettier-ignore
class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          path="/carteira"
          component={ Wallet }
        />
        <Route
          exact
          path="/"
          component={ LoginPage }
        />
      </Switch>
    );
  }
}

export default App;
