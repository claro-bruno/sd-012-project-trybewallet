import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <Route exact path="/" component={ Login } />
    );
  }
}

export default App;
