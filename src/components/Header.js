import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { userEmail, sumAllExpenses } = this.props;
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
}

export default Header;

Header.propTypes = {
  userEmail: PropTypes.func.isRequired,
  sumAllExpenses: PropTypes.func.isRequired,
};
