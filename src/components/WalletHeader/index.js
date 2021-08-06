import React from 'react';
import PropTypes from 'prop-types';

class WalletHeader extends React.Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <header>
        <span data-testid="email-field">{email}</span>
        <span data-testid="total-field">{expenses}</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

WalletHeader.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.string,
}.isRequired;

export default WalletHeader;
