import React from 'react';
import Header from './walletComp/Header';
import Form from './walletComp/Form';
import Table from './walletComp/Table';

export default class Wallet extends React.Component {
  render() {
    return (
      <div className="wallet-screen">
        <Header />
        <Form />
        <Table />
      </div>
    );
  }
}
