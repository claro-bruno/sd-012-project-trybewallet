import React from 'react';
import WalletHeader from '../components/Wallet/WalletHeader';
import WalletAddExpenseForm from '../components/Wallet/WalletAddExpenseForm';

class Wallet extends React.Component {
  render() {
    return (
      <section>
        <WalletHeader />
        <WalletAddExpenseForm />
      </section>
    );
  }
}

export default Wallet;
