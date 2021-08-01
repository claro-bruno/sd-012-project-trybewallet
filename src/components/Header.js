import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  const { registeredEmail, somTotal } = props;
  return (
    <header>
      <span data-testid="email-field">{ registeredEmail }</span>
      <span data-testid="total-field">{somTotal()}</span>
      <span data-testid="header-currency-field">BRL</span>

    </header>
  );
}

Header.propTypes = {
  registeredEmail: PropTypes.string.isRequired,
  somTotal: PropTypes.func.isRequired,
};

export default Header;
