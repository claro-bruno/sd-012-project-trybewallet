import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <>
        TrybeWallet
        <Switch>
          <Route path="/carteira" component={ Wallet } />
          <Route exact path="/" component={ Login } />
        </Switch>
      </>
    );
  }
}

export default App;
