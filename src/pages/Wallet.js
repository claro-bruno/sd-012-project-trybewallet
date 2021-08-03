import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/standart/Header';
import Forms from '../components/WalletControlled/Forms';
import Table from '../components/standart/Table';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Forms />
        <Table />
      </>
    );
  }
}

export default connect(null, null)(Wallet);
