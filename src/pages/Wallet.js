import React from 'react';
import BodyWallet from './components/BodyWallet';
import HeaderWallet from './components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <HeaderWallet />
        <BodyWallet />
      </div>
    );
  }
}

export default Wallet;
