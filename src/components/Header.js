import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <div data-testid="email-field">
          {`E-mail: ${email}`}
        </div>
        <div data-testid="total-field">
          Total: R$ 0,00
        </div>
        <div data-testid="header-currency-field">
          Câmbio: BRL
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

function mapState(state) {
  return { email: state.user.email };
}

export default connect(mapState)(Header);
