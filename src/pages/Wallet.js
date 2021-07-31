import React from 'react';
import WalletHeader from '../components/Wallet/Header/WalletHeader';
import WalletExpenseForm from '../components/Wallet/ExpenseForm/WalletExpenseForm';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <WalletHeader />
        <WalletExpenseForm />
      </div>
    );
  }
}

export default Wallet;
