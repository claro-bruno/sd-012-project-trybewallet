import React from 'react';
import HeaderWallet from '../components/HeaderWallet';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseTable from '../components/ExpenseTable';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <HeaderWallet />
        <ExpenseForm />
        <ExpenseTable />
      </>
    );
  }
}

export default Wallet;
