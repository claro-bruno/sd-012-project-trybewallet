import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Route
        exact
        path="/"
        component={ Login }
      />
    </BrowserRouter>
  );
}

export default App;
