import React from 'react';
import HeaderWallet from '../components/HeaderWallet';
import ExpenseForm from '../components/ExpenseForm';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <HeaderWallet />
        <ExpenseForm />
      </div>
    );
  }
}

export default Wallet;
