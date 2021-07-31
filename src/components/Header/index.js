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
        <p data-testid="email-field">{ emailStore }</p>
        <p data-testid="total-field">{ totalGastos }</p>
        <p data-testid="header-currency-field">{ cambio }</p>
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
