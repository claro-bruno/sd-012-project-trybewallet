import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wallet from './pages/Wallet';
import Login from './pages/Login';

const Routes = () => (
  <Router>
    <Suspense fallback={ <div>Loading...</div> }>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/Carteira" component={ Wallet } />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
