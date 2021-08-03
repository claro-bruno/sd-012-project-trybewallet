import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Header = ({ getEmail, getTotal }) => {
  const setTotalValue = () => (
    getTotal.reduce((acc, curr) => acc + Number(curr.value)
    * Object.values(curr.exchangeRates)
      .find((e) => e.code === curr.currency).ask, 0).toFixed(2)
  );

  return (
    <header>
      <p data-testid="email-field">{getEmail}</p>
      <p>
        Despesas total:
        <span data-testid="total-field">
          {getTotal ? setTotalValue() : '0'}
        </span>
        <span data-testid="header-currency-field"> BRL</span>
      </p>
    </header>
  );
};

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
  getTotal: state.wallet.expenses,
});

Header.propTypes = {
  getEmail: PropTypes.string.isRequired,
  getTotal: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Header);
