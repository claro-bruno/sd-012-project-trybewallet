import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
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
      </Switch>
    );
  }
}
