import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { emailUser, currency, total } = this.props;
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span
            className="navbar-brand mb-0 h1"
            data-testid="email-field"
          >
            { emailUser}
          </span>
          <span
            className="navbar-brand mb-0 h1"
            data-testid="header-currency-field"
          >
            { currency }
          </span>
          <span
            className="navbar-brand mb-0 h1"
            data-testid="total-field"
          >
            { total }
          </span>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  emailUser: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default Header;
