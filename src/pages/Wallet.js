import React from 'react';
import HeaderWallet from '../components/HeaderWallet';
import FormWallet from '../components/FormWallet';

class Wallet extends React.Component {
  render() {
    return (
      <section>
        <HeaderWallet />
        <FormWallet />
      </section>
    );
  }
}

export default Wallet;
