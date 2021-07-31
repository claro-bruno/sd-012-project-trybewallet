import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/index';
import Login from './pages/Login';

class App extends React.Component() {
  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <Switch>
            <Route to="/" component={ Login } />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
