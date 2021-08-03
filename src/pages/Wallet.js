import React from 'react';
import Header from '../components/Header';
import OutGoing from '../components/OutGoing';

class Wallet extends React.Component {
  render() {
    return (
      <div className="WalletBody">
        <Header />
        <OutGoing />
      </div>
    );
  }
}

export default Wallet;
