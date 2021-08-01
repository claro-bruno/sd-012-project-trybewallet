import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <div data-testid="email-field">{ email }</div>
        <div data-testid="total-field">0</div>
        <div data-testid="header-currency-field">BRL</div>

      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapSateToProps = ({ user }) => ({
  email: user.email,
});

export default connect(mapSateToProps)(Header);
