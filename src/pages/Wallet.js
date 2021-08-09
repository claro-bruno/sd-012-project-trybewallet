import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormExpenses from '../components/ExpensesForm/FormExpenses';

class Wallet extends Component {
  render() {
    const { email, despesas } = this.props;
    return (
      <div>
        Wallet
        <header>
          <p>
            Usuário:
            <span data-testid="email-field">{email}</span>
          </p>
          <p>
            Despesa total:
            <span data-testid="total-field">{ despesas }</span>
          </p>
          <p>
            Câmbio:
            <span data-testid="header-currency-field">BRL</span>
          </p>
        </header>
        <FormExpenses />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  despesas: state.wallet.expenses
    .reduce((acc, { value, exchangeRates, currency }) => (
      acc + Number(value) * Number(exchangeRates[currency].ask)),
    0),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  despesas: PropTypes.objectOf(PropTypes.string).isRequired,
};
// const mapStateToProps = (state) => ({ personalInputs: state.reducer.personalInputs });

export default connect(mapStateToProps, null)(Wallet);
