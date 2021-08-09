import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Wallet from './pages/Wallet';

// Consulta ao código do colega Renan Ferreira - Turma 12:
// https://github.com/tryber/sd-012-project-trybewallet/pull/128/commits/c2be41bdb5aee644d387cd2c19a7e924d3dffc2a

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/carteira" component={ Wallet } />
    </Switch>
  );
}

export default App;
