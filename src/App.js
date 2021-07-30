import React from 'react';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/carteira">
            <Wallet />
          </Route>
        </Switch>
    );
  }
}

export default App;
