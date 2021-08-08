import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// para conversão de valores: https://github.com/tryber/sd-012-project-trybewallet/pull/142/commits/50b5a13a4bc06a4633f4a5227a5ee88a85efe248

class Header extends Component {
  render() {
    const { myUserState, myWallet } = this.props;
    return (
      <section className="header-top">
        <div className="email-currency">
          <span data-testid="email-field">{ myUserState.email }</span>
          <div className="currency-status">
            <span data-testid="total-field">
              { `Despesa Total: R$ ${myWallet.reduce((acc, curr) => {
                const { currency, value, exchangeRates } = curr;
                const { ask } = exchangeRates[currency];
                return acc + (value * ask);
              }, 0)}` }
            </span>
            <span data-testid="header-currency-field">BRL</span>
          </div>
        </div>
      </section>
    );
  }
}

Header.propTypes = {
  myUserState: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
  myWallet: PropTypes.shape({
    expenses: PropTypes.shape({
      reduce: PropTypes.func.isRequired,
    }),
    reduce: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  myState: state,
  myWallet: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
