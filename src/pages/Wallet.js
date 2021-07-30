import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import HeaderWallet from '../components/HeaderWallet';
import NewExpenses from '../components/NewExpense';
import './wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <div className="wallet-page">
        <HeaderWallet />
        <NewExpenses />
      </div>
    );
  }
}

export default Wallet;
