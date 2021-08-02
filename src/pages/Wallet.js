import React, { Component } from 'react';
import Header from '../components/Header';
import Form from '../components/Form';

class Wallet extends Component {
  render() {
    return (
      <div className="wallet">
        <Header />
        <Form />
      </div>
    );
  }
}

export default Wallet;
