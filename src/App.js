import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Routes from './Routes';
import './Styles/app.css';

class App extends Component {
  render() {
    return (
      <div>
        <button type="button"><Link to="/">INICIO</Link></button>
        <button type="button"><Link to="/carteira">CARTEIRA</Link></button>
        <Routes />
      </div>);
  }
}

export default App;
