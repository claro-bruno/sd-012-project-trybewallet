import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <section>
          <WalletForm />
        </section>
      </div>
    );
  }
}

export default Wallet;
