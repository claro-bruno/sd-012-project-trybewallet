import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/carteira" component={ Wallet } />
      </Switch>
    );
  }
}
export default App;
