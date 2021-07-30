import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      Hello, TrybeWallet!
      <div>
        <Switch>
          <Route exact path="/" component={ Login } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
