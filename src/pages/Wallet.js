import React from 'react';
import HeaderWallet from '../components/HeaderWallet';
import FormWallet from '../components/FormWallet';
import ExpensesList from '../components/ExpensesList';

class Wallet extends React.Component {
  render() {
    return (
      <section>
        <HeaderWallet />
        <FormWallet />
        <ExpensesList />
      </section>
    );
  }
}

export default Wallet;
