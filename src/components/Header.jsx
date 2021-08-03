import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { userEmail, sumTotal } = this.props;
    let sum = 0;
    if (sumTotal.length > 0) {
      sum = sumTotal.reduce(
        (acumulator, currentValue) => (
          Number(
            currentValue.value * currentValue.exchangeRates[currentValue.currency]
              .ask,
          ) + acumulator),
        0,
      );
    }

    return (
      <header>
        <div>
          <p>Email:</p>
          <p data-testid="email-field">{ userEmail }</p>
        </div>
        <div>
          <p>Total gastos: R$</p>
          <p data-testid="total-field">{ sum.toFixed(2) }</p>
        </div>
        <div>
          <p>Moeda:</p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  sumTotal: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  userEmail: PropTypes.string,
  sumTotal: PropTypes.number,
}.isRequired;
