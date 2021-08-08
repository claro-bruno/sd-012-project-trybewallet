import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logoPaturso from '../Img/logoPaturso.jpg';
import './HeaderStyle.css';

class Header extends Component {
  constructor() {
    super();

    this.totalExpense = this.totalExpense.bind(this);
  }

  totalExpense() {
    const { expenses } = this.props;
    if (!expenses.length) return '0';
    const total = expenses
      .map(({ value, exchangeRates, currency }) => +exchangeRates[currency].ask * +value)
      .reduce((acc, curr) => acc + curr, 0);
    return total.toFixed(2);
  }

  render() {
    const { userEmail } = this.props;
    // console.log(total());
    return (
      <header className="header-content">
        <div>
          <img src={ logoPaturso } alt="Logo Paturso" />
          <h1>Trybe Wallet</h1>
        </div>
        <div>
          <p data-testid="email-field">{`User: ${userEmail}`}</p>
          <p data-testid="total-field">{`Total Expense: R$${this.totalExpense()}`}</p>
          <p data-testid="header-currency-field">Exchange Rate: BRL</p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
