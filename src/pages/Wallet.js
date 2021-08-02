import React, { Component } from 'react';
import Header from '../components/Header';
import '../App.css';
import Form from '../components/Form';
import Table from '../components/Table';

class Wallet extends Component {
  render() {
    return (
      <div>
        <header>
          TrybeWallets
          <Header />
        </header>
        <Form />
        <Table />
      </div>
    );
  }
}

export default Wallet;
