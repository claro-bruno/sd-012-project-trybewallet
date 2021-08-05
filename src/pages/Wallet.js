import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  componentDidMount() {
    const { expenses } = this.props;
    console.log(expenses);
  }

  render() {
    const { email, currency } = this.props;
    return (
      <>
        <Header emailUser={ email } currency={ currency } total={ 0 } />
        <WalletForm />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  currency: state.wallet.currency,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
