import React from 'react';
import { connect } from 'react-redux';
import { string, arrayOf } from 'prop-types';
import ExpenseForm from './ExpenseForm';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.totalExpensesFromGlobalState = this.totalExpensesFromGlobalState.bind(this);
  }

  totalExpensesFromGlobalState() {
    const { expenses } = this.props;
    if (!expenses.length) return '0';
    const total = expenses
      .map(({ value, exchangeRates, currency }) => +exchangeRates[currency].ask * +value) // exchangeRates[currency].ask entra no objeto exchangeRates, seta a chave com valor da currency (ex.: se currency = [USD, ..., XRP], exchangeRates[currency[0]].ask = USD.ask, e 'ask' possui os valores em números)
      .reduce((accValue, currValue) => accValue + currValue, 0);
    return total.toFixed(2);
  }

  render() {
    const { emailFromGlobalState } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">
            {`Email: ${emailFromGlobalState}`}
          </p>
          <p data-testid="total-field">
            {this.totalExpensesFromGlobalState()}
          </p>
          <p data-testid="header-currency-field">
            BRL
          </p>
        </header>

        <ExpenseForm /* onChange={ this.handleChange } */ />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailFromGlobalState: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  emailFromGlobalState: string.isRequired,
  expenses: arrayOf(string).isRequired,
};
