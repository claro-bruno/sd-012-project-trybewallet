import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import Header from '../components/Header';
import Table from '../components/Table';

// prettier-ignore
class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ExpenseForm />
        <Table />
      </>
    );
  }
}

export default Wallet;
