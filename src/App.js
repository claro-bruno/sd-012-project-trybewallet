import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" render={ () => <Login /> } />
      </Switch>
    </div>
  );
}

export default App;
