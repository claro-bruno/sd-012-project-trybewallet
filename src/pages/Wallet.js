import React from 'react';
import WalletHeader from '../components/Wallet/Header/WalletHeader';
import WalletExpenseForm from '../components/Wallet/ExpenseForm/WalletExpenseForm';
import ExpenseTable from '../components/Wallet/ExpenseTable/ExpenseTable';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <WalletHeader />
        <WalletExpenseForm />
        <ExpenseTable />
      </div>
    );
  }
}

export default Wallet;
