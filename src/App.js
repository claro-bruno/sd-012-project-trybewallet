import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={ Login } />
      </Switch>
    );
  }
}
