import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { getEmailToState, getExpensesToState } = this.props;

    const gastoTotal = getExpensesToState
      .reduce((acc, expense) => acc
      + parseFloat(expense.value)
      * parseFloat(expense.exchangeRates[expense.currency].ask), 0);

    return (
      <div>
        <header>
          <h1>Trybe Wallet</h1>
          <p>
            Email:
            <span data-testid="email-field">{getEmailToState}</span>
          </p>
          <p>
            Gasto Total:
            <span data-testid="total-field">{gastoTotal}</span>
          </p>
          <p>
            Câmbio Utilizado:
            <span data-testid="header-currency-field">BRL</span>
          </p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  getEmailToState: user.email,
  getExpensesToState: wallet.expenses,
});

Header.propTypes = {
  getEmailToState: PropTypes.string,
  getExpensesToState: PropTypes.arrayOf(
    PropTypes.object,
  ),
}.isRequired;

export default connect(mapStateToProps, null)(Header);
