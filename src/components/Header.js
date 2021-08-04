import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import trybePath from '../images/trybe.png';

class Header extends Component {
  constructor(props) {
    super(props);

    this.addToTotal = this.addToTotal.bind(this);

    this.state = {
      total: 0,
      localCurrency: {
        code: 'R$',
        symbol: 'BRL',
      },
    };
  }

  componentDidUpdate(prevProps) {
    const { wallet: { expenses } } = this.props;
    if ((prevProps.wallet.expenses !== expenses)
        && (expenses.length > 0)) {
      this.addToTotal();
    }
  }

  addToTotal() {
    const { wallet: { expenses } } = this.props;

    const totalSumExpenses = expenses.map((expenseValue) => {
      const exchangeExpense = (Object.values(expenseValue.exchangeRates)
        .find((exchangeRate) => exchangeRate.code === expenseValue.currency)
        .bid) * expenseValue.value;
      return exchangeExpense;
    }).reduce((currentValue, nextValue) => {
      const sumExpenses = parseFloat(currentValue) + parseFloat(nextValue);
      return sumExpenses;
    }, 0);

    this.setState((prevProps) => ({
      ...prevProps,
      total: totalSumExpenses,
    }));
  }

  render() {
    const { email } = this.props;
    const { total, localCurrency } = this.state;
    const formato = { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' };
    return (
      <div className="header-container">
        <img className="wallet-logo" src={ trybePath } alt="trybe" />
        <div className="header-information">
          <span data-testid="email-field">{`Email: ${email}`}</span>
          <div className="total-expenses">
            <span>Despesa Total: </span>
            <span data-testid="total-field">
              { total.toLocaleString('pt-BR', formato) }
            </span>
            <span data-testid="header-currency-field">{` ${localCurrency.symbol}`}</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ wallet: state.wallet });

Header.propTypes = {
  email: PropTypes.string.isRequired,
  wallet: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.shape({
      exchangeRates: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        code: PropTypes.string,
        ask: PropTypes.number,
      })),
    })).isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, null)(Header);
