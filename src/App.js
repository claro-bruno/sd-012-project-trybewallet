import React from 'react';
import Login from './pages/Login';
import { Switch, Route, Router } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
        <Switch>
          <Route exact path="/">
            <Login />
          </Route> 
        </Switch>
    );
  }
}

export default App;
