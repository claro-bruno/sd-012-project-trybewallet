import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, totalExpense = 0 } = this.props;
    return (
      <header>
        <p data-testid="email-field">
          Usuário:
          { email }
        </p>
        <p data-testid="total-field">
          Despesa Total: R$
          { totalExpense.toFixed(2) }
        </p>
        <p data-testid="header-currency-field">
          Moeda: BRL
          {/* { currencies } */}
        </p>
      </header>
    );
  }
}

Header.defaultProps = {
  totalExpense: 0,
};

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalExpense: PropTypes.number,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalExpense: state.wallet.totalExpense,
});

export default connect(mapStateToProps, null)(Header);
