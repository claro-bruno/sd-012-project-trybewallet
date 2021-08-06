import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { getEmailToState } = this.props;
    return (
      <div>
        <header>
          <h1>Trybe Wallet</h1>
          <p>
            Email:
            <span data-testid="email-field">{getEmailToState}</span>
          </p>
          <p>
            Gasto Total:
            <span data-testid="total-field">{0}</span>
          </p>
          <p>
            Câmbio Utilizado:
            <span data-testid="header-currency-field">BRL</span>
          </p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  getEmailToState: user.email,
});

Header.propTypes = {
  getEmailToState: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Header);
