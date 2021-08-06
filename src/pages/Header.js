import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { login, expenses } = this.props;
    const exchangeRate = expenses
      .map((exp) => Number(exp.exchangeRates[exp.currency].ask) * Number(exp.value));
    return (
      <header>
        <h3 data-testid="email-field">{ login }</h3>
        <h4 data-testid="header-currency-field">
          Despesa total: R$
          <span key="login" data-testid="total-field">
            { exchangeRate.reduce((acc, curr) => {
              acc += curr;
              return acc;
            }, 0) }
          </span>
          BRL
        </h4>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = ({
  login: PropTypes.string,
}).isRequired;

export default connect(mapStateToProps)(Header);
