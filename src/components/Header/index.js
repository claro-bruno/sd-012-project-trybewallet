import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { emailStore, totalExpense } = this.props;
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
          <span data-testid="total-field">{`${totalExpense.toFixed(2)}`}</span>
          <span data-testid="header-currency-field">{`${cambio}`}</span>
        </p>
      </header>
    );
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  emailStore: user.email,
  totalExpense: wallet.totalExpense,
});

Header.defaultProps = {
  totalExpense: 0,
};

Header.propTypes = {
  emailStore: PropTypes.string,
  totalExpense: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps, null)(Header);
