import React from 'react';
import WalletHeader from '../components/WalletHeader';
import AddExpenses from '../components/AddExpenses';
import '../styles/Wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <WalletHeader />
        <main>
          <AddExpenses />
        </main>
      </>
    );
  }
}

export default Wallet;
