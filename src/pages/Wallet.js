import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/standart/Header';
import Forms from '../components/WalletControlled/Forms';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Forms />
      </>
    );
  }
}

export default connect(null, null)(Wallet);
