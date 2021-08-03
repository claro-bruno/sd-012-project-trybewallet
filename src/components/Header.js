import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.sumExpenses = this.sumExpenses.bind(this);
  }

  sumExpenses() {
    const { expenses } = this.props;

    if (expenses.length !== 0) {
      const totalCost = expenses
        .reduce((total, expense) => (
          total + expense.value * expense.exchangeRates[expense.currency].ask), 0);
      return totalCost.toFixed(2);
    } return 0;
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <div data-testid="email-field">
          {email}
        </div>
        <div data-testid="total-field">
          Despesa Total
          { this.sumExpenses() }
        </div>
        <div data-testid="header-currency-field">
          BRL
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps)(Header);
