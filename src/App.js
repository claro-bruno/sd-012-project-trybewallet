import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
// import {  } from '../components';
// import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={ (props) => <Login { ...props } /> }
        />
        <Route
          exact
          path="/carteira"
          render={ (props) => <Wallet { ...props } /> }
        />
      </Switch>
    );
  }
}
