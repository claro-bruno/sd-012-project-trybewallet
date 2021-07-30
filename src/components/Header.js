import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;
    const despesa = 0;
    const cambio = 'BRL';
    return (
      <header className="header">
        <h1>TrybeWallet</h1>
        <div className="user-info">
          <p data-testid="email-field" className="user-email">
            {`E-mail: ${email}`}
          </p>
          <div className="user-waste">
            <span data-testid="total-field">
              {`Despesa Total: ${despesa} `}
            </span>
            <span data-testid="header-currency-field">
              {cambio}
            </span>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
