import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();
    this.total = this.total.bind(this);
  }

  total() {
    const { expenses } = this.props;
    let soma = 0;
    expenses.forEach(({ value, currency, exchangeRates }) => {
      soma += exchangeRates[currency].ask * value;
    });
    return soma.toFixed(2);
  }

  render() {
    const { emailUser, currency } = this.props;
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span
            className="navbar-brand mb-0 h1"
            data-testid="email-field"
          >
            { emailUser}
          </span>
          <div>
            <span
              className="navbar-brand mb-0 h1"
              data-testid="total-field"
            >
              { this.total() }
            </span>
            <span
              className="navbar-brand mb-0 h1"
              data-testid="header-currency-field"
            >
              { currency }
            </span>
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  emailUser: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});
export default connect(mapStateToProps, null)(Header);
