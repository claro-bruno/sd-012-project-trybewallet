/* import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletHeader extends React.Component {
  render() {
    const { email, allExpenses } = this.props;
    return (
      <header>
        <p>
          E-mail:
          <span data-testid="email-field">
            { email }
          </span>
        </p>
        <p>
          Despesa Total: R$
          <span data-testid="total-field">
            { allExpenses }
          </span>
          <span data-testid="header-currency-field">BRL</span>
        </p>
      </header>
    );
  }
}

WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
  allExpenses: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  allExpenses: state.wallet.expenses
    .reduce((
      acc,
      { value, currency, exchangeRates },
    ) => acc + (parseFloat(exchangeRates[currency].ask) * value), 0),
});

export default connect(mapStateToProps)(WalletHeader);
 */
