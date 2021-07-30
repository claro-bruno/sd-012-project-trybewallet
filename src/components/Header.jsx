import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Header = ({ email, total, currency }) => {
  return (
    <header>
      <h1>TrybeWallet</h1>
      <h3 data-testid="email-field">{email}</h3>
      <p data-testid="total-field">{total !== undefined ? total : 0 }</p>
      <p data-testid="header-currency-field">{currency}</p>
    </header>
  );
};

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  currency: wallet.currency,
  total: wallet.total,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};
