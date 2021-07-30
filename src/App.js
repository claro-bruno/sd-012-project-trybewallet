import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        {/* <Route path="/carteira" component={ Pagina } /> */}
      </Switch>
    );
  }
}

export default App;
