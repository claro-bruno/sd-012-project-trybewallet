import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from './wallet.svg';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header className="header">
        <Logo className="logo" />
        <p data-testid="email-field">
          Email:
          { email }
        </p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Header);
