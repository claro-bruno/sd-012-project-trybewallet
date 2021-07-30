import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login, Wallet, NotFound } from './pages';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={ (props) => (<Login { ...props } />) } />
      <Route path="/carteira" render={ (props) => (<Wallet { ...props } />) } />
      <Route component={ NotFound } />
    </Switch>
  );
}

export default App;
