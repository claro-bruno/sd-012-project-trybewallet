import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
