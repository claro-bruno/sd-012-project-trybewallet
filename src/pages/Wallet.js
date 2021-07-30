import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SelectPayment from '../components/SelectPayment';
import ExpenseTag from '../components/ExpenseTag';

class Wallet extends React.Component {
  render() {
    const { userMail } = this.props;
    let { totalExpenses } = this.props;
    if (totalExpenses > 0) {
      totalExpenses.reduce((acc, init) => init + acc);
    } else {
      totalExpenses = 0;
    }
    return (
      <>
        <header>
          <span data-testid="email-field">{userMail}</span>
          <span data-testid="total-field">{totalExpenses}</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <main>
          <form action="">
            <label htmlFor="value">
              Valor:
              <input type="text" id="value" />
            </label>
            <label htmlFor="description">
              Descrição:
              <input type="text" id="description" />
            </label>
            <label htmlFor="currency-select">
              Moeda:
              <select name="currency-select" id="currency-select" />
            </label>
            <SelectPayment />
            <ExpenseTag />
          </form>
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userMail: state.user.email,
  totalExpenses: state.wallet.expenses,
});

Wallet.propTypes = {
  userMail: PropTypes.string,
  totalExpenses: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
