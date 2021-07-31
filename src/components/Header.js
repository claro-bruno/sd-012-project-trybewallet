import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  const { registeredEmail } = props;
  return (
    <header>
      <span data-testid="email-field">{ registeredEmail }</span>
      <span data-testid="total-field">0</span>
      <span data-testid="header-currency-field">BRL</span>

    </header>
  );
}

Header.propTypes = {
  registeredEmail: PropTypes.string.isRequired,
};

export default Header;
