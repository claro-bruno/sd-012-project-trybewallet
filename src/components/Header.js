import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;
    const amount = 0;
    const exchange = 'BRL';
    return (
      <header>
        <div>
          <p data-testid="email-field">
            {`E-mail:${email}`}
          </p>
          <p data-testid="total-field">
            {`Despesa total:${amount}`}
          </p>
          <p data-testid="header-currency-field">
            {`Cambio:${exchange}`}
          </p>
        </div>
      </header>

    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = ({ user }) => ({
  email: user.email,
});

export default connect(mapStateToProps)(Header);
