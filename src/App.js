import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Wallet from './components/Wallet';

// prettier-ignore
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/carteira"
            component={ Wallet }
          />
          <Route
            exact
            path="/"
            component={ LoginPage }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
