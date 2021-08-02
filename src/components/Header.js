import React, { Component } from 'react';
import PropTypes from 'prop-types';
import trybePath from '../images/trybe.png';

class Header extends Component {
  render() {
    const { email, total, localCurrency } = this.props;
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

Header.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  localCurrency: PropTypes.shape({
    code: PropTypes.string,
    symbol: PropTypes.string,
  }).isRequired,
};

export default Header;
