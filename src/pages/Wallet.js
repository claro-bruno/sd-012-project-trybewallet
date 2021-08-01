import React from 'react';
import Header from '../components/Header';
import WalletHeader from '../components/WalletHeader';
import WalletTable from '../components/WalletTable';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <WalletHeader />
        <WalletTable />
      </main>
    );
  }
}

export default Wallet;
