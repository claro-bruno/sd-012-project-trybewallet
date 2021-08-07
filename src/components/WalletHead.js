import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletHead extends React.Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <header>
        <div>
          <h3 data-testid="email-field">{ email }</h3>
        </div>
        <div>
          <p data-testid="total-field">
            { expenses.reduce((acc, crr) => {
              const { currency, value, exchangeRates } = crr;
              const { ask } = exchangeRates[currency];
              const result = acc + (value * ask);
              const endResult = parseFloat(result.toFixed(2));
              return endResult;
            }, 0)}
          </p>
        </div>
        <div>
          <span data-testid="header-currency-field">
            BRL
          </span>
        </div>
      </header>
    );
  }
}

WalletHead.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(WalletHead);
