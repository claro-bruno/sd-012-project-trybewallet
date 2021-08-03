import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Select from '../components/Select';

class Wallet extends React.Component {
  constructor() {
    super();
    this.getExpenses = this.getExpenses.bind(this);
  }

  getExpenses() {
    const { expenses } = this.props;
    return (expenses.reduce((acc, cur) => acc + Number(cur.value)
            * Object.values(cur.exchangeRates)
              .find((elm) => elm.code === cur.currency).ask, 0).toFixed(2));
  }

  render() {
    const { email, expenses } = this.props;
    return (
      <>
        <header>
          <p data-testid="email-field">{email}</p>
          <p data-testid="total-field">{expenses ? this.getExpenses() : '0'}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <Select />
      </>
    );
  }
}

const mapState = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapState, null)(Wallet);
