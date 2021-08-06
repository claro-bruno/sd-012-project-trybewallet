import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WalletHeader from '../components/WalletHeader';

class Wallet extends React.Component {
  render() {
    const { email, expenses, currency } = this.props;

    const headerProps = {
      email,
      expenses,
      currency,
    };
    return (
      <WalletHeader { ...headerProps } />
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  getUserInfo: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Wallet);
