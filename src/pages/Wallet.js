import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchApi from '../actions/fetchApi';
import ExpenseInput from '../components/ExpenseInput';

class Wallet extends React.Component {
  constructor() {
    super();

    this.calculateExpenses = this.calculateExpenses.bind(this);
  }

  componentDidMount() {
    const { setFetchApi } = this.props;
    setFetchApi();
  }

  calculateExpenses() {
    const { expenses } = this.props;

    const totalExpense = expenses.reduce((acc, { value, currency, exchangeRates }) => {
      const { ask } = exchangeRates[currency];
      return acc + (value * ask);
    }, 0);

    return totalExpense.toFixed(2);
  }

  render() {
    const { email } = this.props;

    return (
      <>
        <header>
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">{ `R$${this.calculateExpenses()}`}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <main>
          <ExpenseInput />
        </main>
      </>

    );
  }
}

const mapStateToPrpos = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  setFetchApi: () => dispatch(fetchApi()),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(Object).isRequired,
  setFetchApi: PropTypes.func.isRequired,
};

export default connect(mapStateToPrpos, mapDispatchToProps)(Wallet);
