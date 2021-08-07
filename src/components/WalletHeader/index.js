import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletHeader extends React.Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <header>
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">
          {
            expenses
              .reduce((acc, cur) => acc + (cur.value * Object.values(cur.exchangeRates)
                .find((e) => e.code === cur.currency).ask), 0)
          }
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

WalletHeader.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.arrayOf(PropTypes.number),
}.isRequired;

export default connect(mapStateToProps, null)(WalletHeader);
