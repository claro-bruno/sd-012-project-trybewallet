import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { emailStore } = this.props;
    const totalGastos = 0;
    const cambio = 'BRL';
    return (
      <header>
        <h1>Trybe Wallet</h1>
        <p>
          Email:
          <span data-testid="email-field">{`${emailStore}`}</span>
        </p>
        <p>
          Despesa Total: R$
          <span data-testid="total-field">{`${totalGastos}`}</span>
          <span data-testid="header-currency-field">{`${cambio}`}</span>
        </p>
      </header>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  emailStore: user.email,
});

Header.propTypes = {
  emailStore: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Header);
