import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import NotFound from './pages/NotFound';


class Routes extends Component {
  render() { 
    return
    <Switch>
      <Route exact path='/' Component={Login} />
      <Route exact path='/carteira' Component={Wallet} />
      <Route exact path='/notFound' Component={NotFound} />
    </Switch>
  }
}
 
export default Routes;
