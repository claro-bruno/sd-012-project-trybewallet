import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Login, Wallet } from './pages';

function App() {
  return (
    <main className="bg-light pt-3 pb-3 pl-2 pr-2" style={ { minHeight: '100vh' } }>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
      </Switch>
    </main>
  );
}

export default App;
