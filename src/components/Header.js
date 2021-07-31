import React from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = ({ user }) => ({
  registeredEmail: user.email,
});

Header.propTypes = {
  registeredEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
