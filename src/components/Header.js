import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);
    this.calculateSumExpenses = this.calculateSumExpenses.bind(this);
  }

  calculateSumExpenses() {
    const { expenses } = this.props;
    const valueTotal = expenses.reduce((acc, curr) => (
      acc
        + parseFloat(curr.value)
        * parseFloat(curr.exchangeRates[curr.currency].ask)
    ), 0);
    console.log(valueTotal);
    return valueTotal.toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <section>
        <h3 data-testid="email-field">{ email }</h3>
        <p data-testid="total-field">
          Despesa Total: R$
          { this.calculateSumExpenses() }
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.objectOf),
};
Header.defaultProps = {
  expenses: undefined,
};

export default connect(mapStateToProps)(Header);
