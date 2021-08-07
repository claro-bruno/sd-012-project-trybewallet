import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { user } = this.props;
    return (
      <header className="headers">
        <p data-testid="email-field">{ user }</p>
        <span data-testid="total-field">{ 0 }</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.string,
};

Header.defaultProps = {
  user: '',
};

const mapStateToProps = (state) => ({
  user: state.user.email,
});

export default connect(mapStateToProps)(Header);
