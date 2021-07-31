import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();
    this.sumTotal = this.sumTotal.bind(this);
  }

  sumTotal() {
    const { expenses } = this.props;
    let soma = 0;
    expenses.forEach(({ value, currency, exchangeRates }) => {
      soma += exchangeRates[currency].ask * value;
    });
    return soma.toFixed(2);
  }

  render() {
    const { email, currency } = this.props;
    return (
      <header id="page-header">
        <h4 data-testid="email-field">{ email }</h4>
        <p data-testid="total-field">{ this.sumTotal() }</p>
        <p data-testid="header-currency-field">{ currency }</p>
      </header>
    );
  }
}

Header.defaultProps = {
  expenses: undefined,
  currency: undefined,
};

Header.propTypes = {
  email: PropTypes.string.isRequired,
  currency: PropTypes.string,
  // total: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  currency: wallet.currency,
  total: wallet.total,
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(Header);
