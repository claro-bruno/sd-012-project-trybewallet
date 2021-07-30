import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Form';

class Wallet extends Component {
  render() {
    const { email, expenses } = this.props;
    const total = expenses.length > 0
      ? expenses.reduce((acc, curr) => (
        acc + (curr.value * curr.exchangeRates[curr.currency].ask)), 0) : 0;
    return (
      <section className="content">
        <header>
          <p data-testid="email-field">
            E-mail:
            {' '}
            {email}
          </p>
          <p data-testid="total-field">{total}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <Form />
      </section>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

Wallet.defaultProps = {
  email: '',
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);
