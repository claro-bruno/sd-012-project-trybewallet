import React from 'react';
import Header from '../components/Header';
import WalletTable from '../components/WalletTable';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <WalletTable />
      </main>
    );
  }
}

export default (Wallet);
