import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';

class App extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ Login } />
        </Switch>
      </main>
    );
  }
}

export default App;
