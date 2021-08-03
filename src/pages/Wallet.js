import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import FormAddExpense from '../components/FormAddExpense';
import { fetchAPI } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.sumExpenses = this.sumExpenses.bind(this);
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  sumExpenses() {
    const { expenses } = this.props;
    let sum = 0;
    expenses.forEach((expense) => {
      const { value, currency, exchangeRates } = expense;
      const convertValue = Number(value) * exchangeRates[currency].ask;
      sum += convertValue;
    });
    return sum;
  }

  render() {
    const { email } = this.props;

    return (
      <main>
        <div>TrybeWallet</div>
        <Header email={ email } total={ this.sumExpenses() } />
        <FormAddExpense />
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.user.email,
    expenses: state.wallet.expenses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCurrencies() { dispatch(fetchAPI()); },
  };
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
