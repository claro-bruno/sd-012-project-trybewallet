import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

const { func } = PropTypes;
Wallet.propTypes = {
  getCoins: func.isRequired,
}.isRequired;

export default connect(null, null)(Wallet);
