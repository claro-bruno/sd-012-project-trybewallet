import React from 'react';
import Proptypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, total, currency } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{ total }</p>
        <p data-testid="header-currency-field">{ currency }</p>
      </header>
    );
  }
}

Header.propTypes = {
  email: Proptypes.string.isRequired,
  total: Proptypes.number.isRequired,
  currency: Proptypes.string.isRequired,
};

export default Header;
