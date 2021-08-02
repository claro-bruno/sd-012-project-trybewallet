import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  const { userEmail, sumAllExpenses } = props;
  return (
    <div>
      <span data-testid="email-field">
        { userEmail }
      </span>
      <p data-testid="total-field">{ sumAllExpenses() }</p>
      <p data-testid="header-currency-field">BRL:</p>
    </div>
  );
}

export default Header;

Header.propTypes = {
  userEmail: PropTypes.func.isRequired,
  sumAllExpenses: PropTypes.func.isRequired,
};
