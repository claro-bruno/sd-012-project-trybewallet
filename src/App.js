import { Container } from 'react-bootstrap';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Container fluid>

      <Router>
        <Switch>
          <Route exact path="/">

            <Login />

          </Route>
          <Route path="/wallet">

            <Wallet />

          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
