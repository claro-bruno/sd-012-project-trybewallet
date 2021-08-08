import React from 'react';
import Header from '../components/Header';
import Forms from '../components/Form';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <div>TrybeWallet</div>
        <Header />
        <Forms />
      </div>
    );
  }
}

export default Wallet;
