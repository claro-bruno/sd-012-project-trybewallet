import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Tabela from '../components/Tabela';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <div>TrybeWallet</div>
        <Header />
        <WalletForm />
        <Tabela />
      </div>
    );
  }
}

export default Wallet;
