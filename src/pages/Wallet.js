import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';
import WalletHeader from '../components/Wallet/WalletHeader';
import WalletAddExpenseForm from '../components/Wallet/WalletAddExpenseForm';

class Wallet extends React.Component {
  componentDidMount() {
    const { setCurrenciesToStore } = this.props;
    setCurrenciesToStore();
  }

  render() {
    return (
      <section>
        <WalletHeader />
        <WalletAddExpenseForm />
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrenciesToStore: () => dispatch(fetchCurrencies()),
});

Wallet.propTypes = {
  setCurrenciesToStore: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
