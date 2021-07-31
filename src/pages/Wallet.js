import React from 'react';
import { Header, AddExpense, Table } from '../components';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <AddExpense />
        <Table />
      </>
    );
  }
}

export default Wallet;
