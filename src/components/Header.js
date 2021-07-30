import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, currencies, expenses } = this.props;
    console.log(currencies, expenses);

    return (
      <header>
        <p data-testid="email-field">
          Usuário:
          { email }
        </p>
        <p data-testid="total-field">
          Despesa Total: 0
          {/* { expenses } */}
        </p>
        <p data-testid="header-currency-field">
          Moeda: BRL
          {/* { currencies } */}
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf().isRequired,
  expenses: PropTypes.arrayOf().isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
