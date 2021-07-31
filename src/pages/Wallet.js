import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    const { email, currency, total } = this.props;
    return (
      <Header emailUser={ email } currency={ currency } total={ total } />
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  currency: state.wallet.currency,
  total: state.wallet.total,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
