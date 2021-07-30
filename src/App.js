import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Login />
        {/* <Route path="/" component={ <Login /> } /> */}
        <Route path="/wallet" component={ <Wallet /> } />
      </Switch>
    );
  }
}

export default App;
