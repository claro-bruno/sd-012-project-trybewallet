import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleExpensesTotal = this.handleExpensesTotal.bind(this);
  }

  handleExpensesTotal(expenses) {
    // let total;
    const newExpenses = expenses.map((expense) => ({
      value: expense.value,
      currency: Object.values(expense.exchangeRates)
        .filter((currency) => currency.code === expense.currency),
    }));
    const reducer = (accumulator, current) => (
      Number(accumulator)
      + Number(
        current.value * current.currency[0].ask,
      )
    );
    const total = newExpenses.reduce(reducer, 0).toFixed(2);
    return total;
  }

  render() {
    const { email, expenses } = this.props;
    return (
      <header className="header">
        <div>
          <span data-testid="total-field">
            { this.handleExpensesTotal(expenses) }
          </span>
          <span data-testid="header-currency-field">BRL</span>
        </div>
        <div
          data-testid="email-field"
        >
          { email }
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
  email: 'email@email.com',
  expenses: [{}, {}],
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
