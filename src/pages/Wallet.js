import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import HeaderWallet from '../components/HeaderWallet';
import FormWallet from '../components/FormWallet';
import { fetchAPI } from '../actions';
import FormTable from '../components/FormTable';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      total: 0,
      currency: 'BRL',
    };

    this.getTotalValue = this.getTotalValue.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
    this.getTotalValue();
  }

  getTotalValue() {
    const { expenses } = this.props;
    const totalValue = expenses
      .reduce((acc, { value, exchangeRates, currency }) => acc
      + value * exchangeRates[currency].ask, 0);
    this.setState({ total: totalValue });
  }

  render() {
    const { email } = this.props;
    const { total, currency } = this.state;

    return (
      <>
        <HeaderWallet email={ email } total={ total } moeda={ currency } />
        <main className="bg-secondary text-light">
          <FormWallet addValue={ this.addValue } />
          <FormTable
            removeValue={ this.removeValue }
            getTotalValue={ this.getTotalValue }
          />
        </main>
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
