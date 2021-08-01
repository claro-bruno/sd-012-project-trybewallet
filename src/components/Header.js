import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header className="header">
        <div>
          <span data-testid="total-field">0</span>
          <span data-testid="header-currency-field">BRL</span>
        </div>
        <div
          data-testid="email-field"
        >
          { email }
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
};

Header.defaultProps = {
  email: 'email@email.com',
};

export default Header;
