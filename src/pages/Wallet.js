import React, { Component } from 'react';
import Header from '../components/Header';
import '../App.css';
import Form from '../components/Form';

class Wallet extends Component {
  render() {
    return (
      <div>
        <header>
          TrybeWallets
          <Header />
        </header>
        <Form />
      </div>
    );
  }
}

export default Wallet;
