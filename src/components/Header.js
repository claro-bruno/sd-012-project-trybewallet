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
    };
  }

  componentDidUpdate(prevProps) {
    const { wallet: { expenses } } = this.props;
    const { total } = this.state;
    if ((prevProps.wallet.expenses !== expenses)
        && (expenses.length > 0)) {
      console.log(expenses.length);
      console.log(expenses);
      console.log(total);
      this.addToTotal();
    }
  }

  addToTotal() {
    const { wallet: { expenses } } = this.props;
    const somaTotal = expenses.map((expenseValue) => {
      const resultValue = expenseValue.value;
      return resultValue;
    }).reduce((currentValue, nextValue) => {
      const result = parseFloat(currentValue) + parseFloat(nextValue);
      return result;
    }, 0);
    console.log(somaTotal);
    this.setState((prevProps) => ({
      ...prevProps,
      total: somaTotal,
    }));
  }

  render() {
    const { email, localCurrency } = this.props;
    const { total } = this.state;
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
  localCurrency: PropTypes.shape({
    code: PropTypes.string,
    symbol: PropTypes.string,
  }).isRequired,
  wallet: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.shape({
      exchangeRates: PropTypes.arrayOf(PropTypes.shape({
        camelName: PropTypes.string,
        name: PropTypes.string,
        code: PropTypes.string,
        ask: PropTypes.number,
      })),
    })).isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, null)(Header);
