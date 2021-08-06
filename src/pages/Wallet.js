import React from 'react';
import HeaderWallet from '../components/HeaderWallet';
import FormWallet from '../components/FormWallet';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <HeaderWallet />
        <FormWallet />
      </div>
    );
  }
}

export default Wallet;
